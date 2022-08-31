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

    	return response()->json($lesson->save(),200)
    }

    public function getLessons($grade){
    	$lessons = Lesson::where('grade',$grade)->get();

    	return response()->json($lessons,200);
    }

    public function addTopic(Request $request){
    	$lesson_id = $request->lesson_id;
    	$title = $request->title;

    	$topic = new Topic();
    	$topic->lesson_id = $lesson_id;
    	$topic->title = $title;

    	return response()->json($topic->save(),200);	
    }

    public function getTopics($lesson_id){
    	$topics = Topic::where('lesson_id',$lesson_id)->get();
    	return response()->json($topics,200);
    }
}
