<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\CounselorPlan;
use App\Models\StudyPlan;
use App\Models\User;

class CompareController extends Controller
{
    public function compareWithPlan($student_id){
        $start_week = strtotime('last Satuarday');
        $end_week = strtotime('friday',$start_week);

        $student = Student::where('id',$student_id)->first();

        $counselor_id = $student->counselor_id;

        $StudyPlan = StudyPlan::where('student_id',$student_id)->where('created_at','>=',$start_week)->where('created_at','<',$end_time)->get();

        $CounselorPlan = CounselorPlan::where('counselor_id',$counselor_id)->where('created_at','>=',$start_time)->where('created_at','<',$end_time)->get();

        $allSum = array();

        for($i = 0;$i<2;$i++){
            foreach(array($StudyPlan,$CounselorPlan)[$i] as $day){
                $plan = json_decode($day);

                $lessons = $plan->lessons;
                foreach($lessons as $lesson){
                    $allSum[$i][$lesson]['study_time'] += $lesson->study_time;
                    $allSum[$i][$lesson]['test_time'] += $lesson->test_time;
                    $allSum[$i][$lesson]['test_count'] += $lesson->test_count; 
                }
            }
        }

        $result = array();

        foreach ($sum[0] as $counselor_lesson) {
            if(!in_array($sum[1],$lesson))
                $sum[1][$lesson] = array();

            $student_lesson = $sum[1][$lesson];

            $result[$lesson] = array(
                "need_study_time" => $counselor_lesson['study_time'],
                "diff_study_time" => ($counselor_lesson['study_time'] - $student_lesson['study_time']),
                "need_test_time" => $counselor_lesson['test_time'],
                "diff_test_time" => ($counselor_lesson['test_time'] - $student_lesson['test_time']),
                "need_test_count" => $counselor_lesson['test_count'],
                "diff_test_count" => ($counselor_lesson['test_count'] - $student_lesson['test_count']),
            );    
        }
        
        return $result;
    }

    public function compareWeeks(Request $request){
      
        $counselor_id = $request->counselor_id;
        $from_week = $request->from_week;
        $to_week = $request->to_week;

        $start_weeks = array($from_week,$to_week);
        $students = Student::where('counselor_id',$counselor_id)->get();

        $allSum = array();
        foreach($students as $student){
            $name = User::where('id',$student->user_id)->first()->name;
            $week_sum = array($name,0,0,0);

            for($i = 0;$i<2;$i++){
                $start_week = $start_weeks[$i];
                $end_week = strtotime('friday',$start_week);

                $study_plan = StudyPlan::where('student_id',$student->id)->where('created_at','>=',$start_week)->where('created_at','<',$end_week)->get();

                foreach($study_plan as $day){
                    $plan = $day['data'];
                    $lessons = $plan->lessons;

                    foreach($lessons as $lesson)
                        $week_sum[$i] += $lesson->test_time + $lesson->study_time;
                }
        
            }
            $week_sum[3] = $week_sum[2] - $week_sum[1];
            array_push($allSum,$week_sum);
        }

        return response()->json($allSum,200);

    }

    public function comparePeriods(Request $request){
        $from_date = $request->from_date;
        $to_date = $request->to_date;
        $counselor_id = $request->counselor_id;

        $students = Student::where('counselor_id',$counselor_id)->get();
        $allSum = array();

        foreach($students as $student){
            $name = User::where('id',$student->user_id)->first()->name;
            $study_plans = StudyPlan::where('created_at','>=',$from_date)->where('created_at','<',$to_date)->where('student_id',$student->id)->get();

            $sum_study = 0;
            $sum_test_count = 0;
            $sum_test_time = 0;

            foreach($study_plans as $day){
                $plan = json_decode($day);

                $lessons = $plan->lessons;

                foreach($lessons as $lesson){
                    $sum_study += $lesson->study_time;
                    $sum_test_time += $lesson->test_time;
                    $sum_test_count += $lesson->test_count;
                }

            }
            array_push($allSum,array($name,$sum_study,$sum_test_count,$sum_test_time));
        }

        return response()->json($allSum,200);

    }

}
