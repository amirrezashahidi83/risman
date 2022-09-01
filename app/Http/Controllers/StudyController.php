<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudyPlan;

class StudyController extends Controller
{
    public function store(Request $request){
    	
    	$study_time = $request->study_time;
    	$test_time = $request->test_time;
    	$test_count = $request->test_count;
    	$topic_id = $request->topic_id;
    	$lesson_id = $request->lesson_id;

    	$study_plan = new StudyPlan();

    	$study_plan->study_time = $study_time;
    	$study_plan->test_time = $test_time;
    	$study_plan->test_count = $test_count;
    	$study_plan->topic_id = $topic_id;
    	$study_plan->lesson_id = $lesson_id;

    	return response()->json($study_plan->save(),200);
    }

    public function index($study_id){

    }
}
