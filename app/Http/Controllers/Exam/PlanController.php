<?php

namespace App\Http\Controllers\Exam;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ExamPlan;

class PlanController extends Controller
{
    public function __construct(){
        $this->middleware('checkUser');
    }

    public function index($grade,$major){
        return response()->json(
            ExamPlan::where("grade",$grade)->where('major',$major)->first()
        ,200);

    }

    public function getAll(){
        return response()->json(
            ExamPlan::get()
        ,200);
    }

    public function store(Request $request){
    	
    	$plan = new ExamPlan();
        if($request->hasFile('file') ){
    	   $path = $request->file("file")->store("exam_plans/files");
    	   $plan->file = $path;
        }
        else{
            $plan->file = "";
        }


        if($request->hasFile('image')){
            $image = $request->file("image")->store("exam_plans/images");
            $plan->image = $image;
        }else{
            $plan->image = "";
        }

        $plan->title = $request->title;
    	$plan->exam_id = $request->exam_id;
        $plan->price = $request->price;
        $plan->available = $request->available;
    	$plan->save();
    }

    public function destroy($plan_id){
    	ExamPlan::where('id',$plan_id)->first()->forceDelete();
    }
}
