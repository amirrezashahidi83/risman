<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Exam;

class ExamController extends Controller
{
	public function index($exam_id){

	}
	public function store(Request $request){

	}

	public function getAll($grade,$major){
		$exams = Exam::where('grade',$grade)->where('major',$major)->get();
		return response()->json($exams,200);
	}

	    

}
