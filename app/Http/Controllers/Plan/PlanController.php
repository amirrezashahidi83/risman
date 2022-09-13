<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CounselorPlan;
use App\Models\StudyPlan;
use App\Models\Student;
use App\Models\Schedule;
use App\Models\Lesson;

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
        
        $general_lessons = Lesson::where('type',1)->only(['id']);
        $special_lessons = Lesson::where('type',2)->only(['id']);

        $plan = array();
        for($i = 1;$i < 8;$i++){
            array_push($plan,array());
            $today = $schedules->where('day',$i);
            $tomorrow = $schedules->where('day',($i + 1) / 7);

            for($j = 1;$j < 7;$j++){
                $tomorrow_special = $tomorrow->whereIn('lesson_id',$special_lessons);
                $tomorrow_general = $tomorrow->whereIn('lesson_id',$general_lessons);

                $today_special = $today->whereIn('lesson_id',$special_lessons);
                $today_general = $today->whereIn('lesson_id',$general_lessons);

                if(count($tomorrow_general) > 0 && count($tomorrow_special) > 0)
                {
                                        
                }else if(count($tomorrow_general) > 0){

                }else{

                }

            }
        }
    }

}
