<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\helper\Tools;
use App\Stu;
use App\StudySum;
use DB;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\UsersExport;
use App\Exports\SutExport;
use Verta;

class reportApiController extends Controller

{

    public function report2weekly(Request $request)
    {

        $token = $request->token;
        $weekId1 = $request->weekId1;
        $weekId2 = $request->weekId2;

        $checkLogin = Tools::checkTokenMosh($token);

        if (!$checkLogin['success'])  // check Login user 
            return response()->json($this->loginErrorArr);

        $teacher = $checkLogin['user'];

        $students = Stu::where('mosh_id', $teacher->code)
            ->select('id', 'name', 'base_id', 'r_id', 'img')
            ->get();

        if ($students->count() > 0) {

            $studentsIds = [];

            foreach ($students as $value) {
                array_push($studentsIds, $value->id);
            }

            $resultWeek1 = Tools::weeklyResultSum($weekId1, $studentsIds);

            $resultWeek2 = Tools::weeklyResultSum($weekId2, $studentsIds);


            foreach ($students as $i => $stu) {
                $students[$i]->sumStudy_S1 = 0;
                $students[$i]->sumStudy_S2 = 0;

                if ($resultWeek1->count() > 0)
                    foreach ($resultWeek1  as $j => $value) { // Survey and get sum second time first week

                        if (
                            $value->stu_id ==  $stu->id &&
                            $value->h_sum &&
                            explode(':', $value->h_sum)[0]
                        ) {
                            $students[$i]->sumStudy_S1 += explode(':', $value->h_sum)[0] * 3600;

                            if (explode(':', $value->h_sum)[1])
                                $students[$i]->sumStudy_S1 += explode(':', $value->h_sum)[1] * 60;
                        }
                    }


                if ($resultWeek2->count() > 0)
                    foreach ($resultWeek2  as $j => $value) { // Survey and get sum second time latter week

                        if (
                            $value->stu_id ==  $stu->id &&
                            $value->h_sum &&
                            explode(':', $value->h_sum)[0]
                        ) {
                            $students[$i]->sumStudy_S2 += explode(':', $value->h_sum)[0] * 3600;

                            if (explode(':', $value->h_sum)[1])
                                $students[$i]->sumStudy_S2 += explode(':', $value->h_sum)[1] * 60;
                        }
                    }

                $students[$i]->Progress = $students[$i]->sumStudy_S2 - $students[$i]->sumStudy_S1;

                $students[$i]->growth = '+';

                if ($students[$i]->sumStudy_S2 < $students[$i]->sumStudy_S1)
                    $students[$i]->growth = '-';

                $students[$i]->Progress = Tools::convertSecond_2_hours(abs($students[$i]->Progress));

                $students[$i]->sumStudy1 = Tools::convertSecond_2_hours($students[$i]->sumStudy_S1);
                $students[$i]->sumStudy2 = Tools::convertSecond_2_hours($students[$i]->sumStudy_S2);
            }


            return response()->json([

                'students' => $students,

            ]);
        }
    }

    public function excelReport2weekly(Request $request)
    {
        $token = $request->token;
        $weekId1 = $request->weekId1;
        $weekId2 = $request->weekId2;

        $checkLogin = Tools::checkTokenMosh($token);

        if (!$checkLogin['success'])  // check Login user 
            return response()->json($this->loginErrorArr);

        $teacher = $checkLogin['user'];

        $excelFileName = time() . 'w' . $weekId1 . 'w' . $weekId2 . '.xls';

        Excel::store(new SutExport($weekId1, $weekId2, $teacher), 'excels/' . $excelFileName, 'exel_store');

        return response()->json([

            'success' => true,
            'address' => 'excels/' . $excelFileName,

        ]);
    }

    
    public function compare_students(Request $request) {
        
        $token = $request->token;
        $time1 = $request->time1;
        $time2 = $request->time2;
        $lesson_id = $request->lesson_id;
        
        $time1 = Verta::parse($request->time1 . ' ' . '00:00:01');
        $time2 = Verta::parse($request->time2 . ' ' . '23:59:00');

        $time1 = $time1->timestamp;
        $time2 = $time2->timestamp;

        $checkLogin = Tools::checkTokenMosh($token);

        if (!$checkLogin['success'])  // check Login user 
            return response()->json($this->loginErrorArr);

        $teacher = $checkLogin['user'];

        $students = Stu::where('mosh_id', $teacher->code)
            ->select('id', 'name', 'base_id', 'r_id', 'img')
            ->get();
 
        if ($students->count() > 0) {

            $studentsIds = [];

            foreach ($students as $value) {
                array_push($studentsIds, $value->id);
            }

            foreach ($students as $i => $stu) {
                $students[$i]->sumStudy = 0;
                $students[$i]->testCount = 0;
                $students[$i]->secound = 0;
                $students[$i]->test_time = 0;

                if($lesson_id)
                    $sumQuery = DB::table('edu_plan')
                        ->where('stu_id', $stu->id)
                        ->where('date_time','>=', $time1)
                        ->where('date_time','<=', $time2)
                        ->where('l_id', $lesson_id)
                        ->get();
                else
                    $sumQuery = DB::table('edu_plan')
                        ->where('stu_id', $stu->id)
                        ->where('date_time','>=', $time1)
                        ->where('date_time','<=', $time2)
                        ->get();

                if($sumQuery->count() > 0){
                    $students[$i]->sumStudy = Tools::sumStudyTime_and_testCount($sumQuery);
                    
                    $students[$i]->testCount = $students[$i]->sumStudy['testCount'];
                    $students[$i]->secound = $students[$i]->sumStudy['studyTime'];
                    $students[$i]->test_time = Tools::convertSecond_2_hours($students[$i]->sumStudy['test_time']);
                    $students[$i]->sumStudy = Tools::convertSecond_2_hours($students[$i]->sumStudy['studyTime']);
                }
            }

            return response()->json([

                'students' => $students,

            ]);
        }

    }
}
