<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Exam;
use App\Models\Analysis;

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

	    
	public function addAnalysis(Request $request){
		
		$data = $request->data;
		$exam_id = $request->exam_id;
		$student_id = $request->student_id;

		$Analysis = new Analysis();
		$Analysis->data = $data;
		$Analysis->exam_id = $exam_id;
		$Analysis->student_id = $student_id;

		return response()->json($Analysis->save(),200);
	}

	public function getAnalysises($student_id){

		$analysises = Analysis::where('student_id',$student_id)->get();

		return response()->json($analysises,200);
	}

}
