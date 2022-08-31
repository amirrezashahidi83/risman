<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plan;
use App\Models\Student;

class PlanController extends Controller
{
    public function index($id){
    	return response()->json([Plan::where('id',$id)->first()],200);
    }

    public function store(Request $request){
    	$counselor_id = $request->counselor_id;
    	$data = $request->data;

    }

    public function assignPlan(Request $request){
    	$student_id = $request->student_id;
    	$plan_id = $request->plan_id;

    	$result = Student::where("id",$student_id)->first()->update(['plan_id' => $plan_id]);

    	return response()->json([$result],200);
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

    public function compare(Request $request){

    }
}
