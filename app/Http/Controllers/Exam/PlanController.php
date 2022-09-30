<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ExamPlan;

class PlanController extends Controller
{
    public function store(Request $request){
    	
    	$plan = new ExamPlan();
    	$path = $request->file("file")->store("exam_plans");
    	$plan->title = $request->title;
    	$plan->exam_id = $request->exam_id;
    	$plan->file = $path;
    	$plan->save();
    }

    public function destroy($plan_id){
    	ExamPlan::where('id',$plan_id)->first()->forceDelete();
    }
}
