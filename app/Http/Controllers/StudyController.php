<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudyPlan;
use App\Models\CounselorPlan;
use App\Models\Counselor;
use App\Models\Student;

class StudyController extends Controller
{
    public function __construct(){
        $this->middleware('checkUser');
    }

    public function store(Request $request){
    	
        $data = $request->data;
        $student_id = $request->Student_id;

    	$study_plan = new StudyPlan();

    	$study_plan->data = $data;
    	$study_plan->student_id = $student_id;

    	return response()->json($study_plan->save(),200);
    }

    public function index($student_id){

        $start_week = strtotime('last Satuarday');
        $end_week = strtotime('friday',$start_week);

        $currentWeek = StudyPlan::where('student_id',$student_id)->where('created_at','>=',$start_week)->where('created_at','<',$end_week)->get();

        $start_week = strtotime('-1 week',$start_week);
        $end_week = strtotime('friday',$start_week);

        $previousWeek = StudyPlan::where('student_id',$student_id)->where('created_at','>=',$start_week)->where('created_at','<',$end_week)->get();

        return response()->json(
            [
                'currentWeek' => $currentWeek,
                'previousWeek' => $previousWeek
            ]
        ,200);
    }

    public function getStatusByCounselor($counselor_id){
        $yesterday = strtotime('yesterday');
        $students = Counselor::where('id',$counselor_id)->get();
        $studies = array();
        $statuses = array();

        foreach($students as $student){
            $student_id = $student->id;
            $sentStatus = StudyPlan::where('student_id',$student_id)->where('created_at','>=',$yesterday)
            ->count() == 1;

            $start_week = strtotime('this week');
            $end_week = strtotime('friday',$start_week);

            $sum_study = 0;
            $study_plans = StudyPlan::where('student_id',$student_id)->where('created_at','>=',$start_week)->where('created_at','<',$end_week)->get();
            
            foreach($study_plans as $study_plan){
                foreach($study_plan->lessons as $lesson){
                    $sum_study += $lesson['study_time'];
                }
            }
            
            array_push($studies,$sum_study);
            array_push($statuses,$sentStatus);

        }
        return response()->json(
            [
                'statuses' => $statuses,
                'studies' => $studies
            ]
            ,200);
    }

}
