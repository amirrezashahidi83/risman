<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;

class ScheduleController extends Controller
{
	public function __construct(){
		$this->middleware('checkUser');
	}

    public function index($student_id){
    	return response()->json(
    		Schedule::where('student_id',$student_id)->first()
    	,200);
    }

    public function update(Request $request){
        $student_id = $request->student_id;
        $plan = $request->plan;

        $result = Schedule::where('student_id',$student_id)->update(['plan' => $plan]);
        
        return response()->json(
            $result
        ,200);
    }

}
