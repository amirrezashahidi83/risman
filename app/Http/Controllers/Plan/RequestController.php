<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PlanRequest;
use App\Models\Student;

class RequestController extends Controller
{
	public function getByCounselor($counselor_id){
		return response()->json(
			PlanRequest::where('counselor_id',$counselor_id)->get()
			,200);
	}    

	public function getByStudent($student_id){
		return response()->json(
			PlanRequest::where('student_id',$student_id)->get()
			,200);
	}

	public function store(Request $request){
		$student_id = $request->student_id;
		$counselor_id = Student::where('id',$student_id)->counselor_id;

		$request = new PlanRequest();
		$request->student_id = $student_id;
		$request->counselor_id = $counselor_id;
		$request->type = 1;
		$request->status = 0;

		return response()->json($request->save(),200);
	}

	public function accept($request_id){
		$result = PlanRequest::where('id',$request_id)->update(['status' => 1]);
		return response()->json($result,200);
	}

	public function reject($request_id){
		$result = PlanRequest::where('id',$request_id)->update(['status' => -1])
	}
}
