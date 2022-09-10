<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudyPlan;
use App\Models\CounselorPlan;
use App\Models\Student;

class StudyController extends Controller
{
    public function store(Request $request){
    	
        $data = $request->data;
        $student_id = $request->Student_id

    	$study_plan = new StudyPlan();

    	$study_plan->data = $data;
    	$study_plan->student_id = $student_id;

    	return response()->json($study_plan->save(),200);
    }

    public function index($start_week,$student_id){
        $end_week = strtotime('friday',$start_week);

        $study_plan = StudyPlan::where('student_id',$student_id)->where('created_at','>=',$start_week)->where('created_at','<',$end_week)->get();

        return response()->json($study_plan,200);
    }

    public function compareWithPlan($student_id,$start_week){
        $end_week = strtotime('friday',$start_week);

        $student = Student::where('id',$student_id)->first();

        $counselor_id = $student->counselor_id;

        $StudyPlan = StudyPlan::where('student_id',$student_id)->where('created_at','>=',$start_week)->where('created_at','<',$end_time)->get();

        $CounselorPlan = CounselorPlan::where('counselor_id',$counselor_id)->where('created_at','>=',$start_time)->where('created_at','<',$end_time)->get();

        $allSum = array();

        for($i = 0;$i<2;$i++){
            foreach(array($StudyPlan,$CounselorPlan)[$i] as $day){
                $plan = json_decode($day['data']);

                $lessons = $plan->lessons;
                foreach($lessons as $lesson){
                    $allSum[$i][$lesson]['study_time'] += $lesson->study_time;
                    $allSum[$i][$lesson]['test_time'] += $lesson->test_time;
                    $allSum[$i][$lesson]['test_count'] += $lesson->test_count; 
                }
            }
        }

        $result = array();

        foreach ($sum[1] as $lesson) {
            
            array_push($lesson,$lesson['study_time'],$sum[0][$lesson]['study_time'],);
        }
        


    }

    public function compareWeeks($counselor_id){
        
        $start_week1 = $request->start_week1;
        $start_week2 = $request->start_week2;

        $start_weeks = array($start_week1,$start_week2);
        $students = Student::where('counselor_id',$counselor_id)->get();

        $allSum = array();
        foreach($students as $student){
            $week_sum = array($student,0,0,0);

            for($i = 1;$i<3;$i++){
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

    public function comaprePeriods(Request $request){
        $period1 = $request->period1;
        $period2 = $request->period2;
        $counselor_id = $request->counselor_id;

        $students = Student::where('counselor_id',$counselor_id)->get();
        $allSum = array();

        foreach($students as $student){
            $study_plans = StudyPlan::where('created_at','>=',$period1)->where('created_at','<',$period2)->where('student_id',$student->id)->get();

            $sum_study = 0;
            $sum_test_count = 0;
            $sum_test_time = 0;

            foreach($study_plans as $day){
                $plan = json_decode($day['data']);

                $lessons = $plan->lessons;

                foreach($lessons as $lesson){
                    $sum_study += $lesson->study_time;
                    $sum_test_time += $lesson->test_time;
                    $sum_test_count += $lesson->test_count;
                }

            }
            array_push($allSum,array($student,$sum_study,$sum_test_count,$sum_test_time))
        }

        return response()->json([],200);

    }
}
