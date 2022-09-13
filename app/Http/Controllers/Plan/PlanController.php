<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CounselorPlan;
use App\Models\StudyPlan;
use App\Models\Student;
use App\Models\Schedule;

class PlanController extends Controller
{

    public function store(Request $request){
    	$counselor_id = $request->counselor_id;
    	$data = $request->data;

    }

    public function getByStudent($student_id){

    	$plan_id = Student::where('id',$student_id)->first()->$plan_id;

    	return response()->json([
    		Plan::where('id',$plan_id)->first()
    	],200);
    }

    public function getByCounselor($counselor_id){

    	$plans = Plan::where('counselor_id',$counselor_id)->get();
    	return response()->json([$plans],200);
    }

    public function createSmart(Request $request){
        $student_id = $request->student_id;
        $schedules = Schedule::where('student_id',$student_id)->get();
        
        $plan = array();
        for($i = 1;$i < 8;$i++){
            $today = $schedules->where('day',$i);
            $tomorrow = $schedules->where('day',($i + 1) / 7);

            foreach($tomorrow as $part){
                if($part)
            }
        }
    }

}
