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

    public function destroy(){
        
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
        $student = Student::where('id',$student_id)->first();

        $major = $student->major;
        $grade = $student->grade;
        $schedules = Schedule::where('student_id',$student_id)->get();
        
        $general_lessons = Lesson::where('type',1)->where('major',$major)->where('grade','>=',$grade)->only(['id']);
        $special_lessons = Lesson::where('type',2)->where('major',$major)->where('grade','>=',$grade)->only(['id']);

        $main_lessons = $special_lessons->where('main',1);

        $plan = array();
        for($i = 1;$i < 8;$i++){
            array_push($plan,array('data'=>array(),'day'=> 1));
            $today = $schedules->where('day',$i);
            $tomorrow = $schedules->where('day',($i + 1) / 7);

                $tomorrow_special = $tomorrow->whereIn('lesson_id',$special_lessons);
                $tomorrow_general = $tomorrow->whereIn('lesson_id',$general_lessons);

                $today_special = $today->whereIn('lesson_id',$special_lessons);
                $today_general = $today->whereIn('lesson_id',$general_lessons);

                if(count($tomorrow_general) > 0 && count($tomorrow_special) > 0)
                {
                    $plan[$i]['data'] = array_merge($plan[$i],$tomorrow_special);
                    $plan[$i]['data'] = array_merge($plan[$i],$tomorrow_general);                
                }else if(count($tomorrow_general) > 0){
                    $plan[$i]['data'] = array_merge($plan[$i],$main_lessons);
                    $plan[$i]['data'] = array_merge($plan[$i],$tomorrow_general);                

                }else{
                    $plan[$i]['data'] = $main_lessons;
                    $plan[$i]['day'] = 1;
                }

            
        }
    }

}
