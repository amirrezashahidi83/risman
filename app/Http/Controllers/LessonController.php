<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lesson;
use App\Models\Topic;

class LessonController extends Controller
{
    public function index($lesson_id){
    	$lesson = Lesson::where('id',$lesson_id)->first();
    	return response()->json($lesson,200);
    }

    public function store(Request $request){
    	$title = $request->title;
    	$grade = $request->grade;

    	$lesson = new Lesson();
    	$lesson->title = $title;
    	$lesson->grade = $grade;
        $lesson->major = $major;

    	return response()->json($lesson->save(),200)
    }

    public function update(){

    }

    public function destroy(){

    }
    
    public function getAll($grade,$major){
    	$lessons = Lesson::where('grade',$grade)->where('major',$major)->get();

    	return response()->json($lessons,200);
    }

}
