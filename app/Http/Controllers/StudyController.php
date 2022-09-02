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

    public function compareWithPlan(Request $request){
        $student_id = $request->student_id;

        $start_week = $request->start_week;
        $end_week = strtotime('friday',$start_week);

        $student = Student::where('id',$student_id)->first();

        $counselor_id = $student->counselor_id;

        $StudyPlan = StudyPlan::where('student_id',$student_id)->where('created_at','>=',$start_week)->where('created_at','<',$end_time)->get();

        $CounselorPlan = CounselorPlan::where('counselor_id',$counselor_id)->where('created_at','>=',$start_time)->where('created_at','<',$end_time)->get();

        $red_boxes = array();
        $yellow_boxes = array();
        $green_boxes = array();

        foreach($CounselorPlan as $day){
            $plan = json_decode($day['data']);

            $lessons = $plan->lessons;
            foreach($lessons as $lesson){
            }



        }

    }

    public function compareWeeks($student_id){
        
        $start_week1 = $request->start_week1;
        $start_week2 = $request->start_week2;

        $start_weeks = array($start_week1,$start_week2);
        $week_sum = array(0,0,0);

        for($i = 0;$i<2;$i++){
            $start_week = $start_weeks[$i];
            $end_week = strtotime('friday',$start_week);

            $study_plan = StudyPlan::where('student_id',$student_id)->where('created_at','>=',$start_week)->where('created_at','<',$end_week)->get();

            foreach($study_plan as $day){
                $plan = $day['data'];
                $lessons = $plan->lessons;

                foreach($lessons as $lesson)
                    $week_sum[$i] += $lesson->test_time + $lesson->study_time;
            }
    
        }

        return response()->json($week_sum,200);

    }

    public function comaprePeriods(Request $request){
        $period1 = $request->period1;
        $period2 = $request->period2;

        $study_plans = StudyPlan::where('created_at','>=',$period1)->where('created_at','<',$period2)->get();

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

        return response()->json([],200);

    }
}
