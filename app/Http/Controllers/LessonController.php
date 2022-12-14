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

    	return response()->json($lesson->save(),200);
    }

    public function update(Request $request){
        Lesson::where("id",$request->lesson_id)->first()->
        update(['topics' => $request->topics,
                'title' => $request->title]);

        return view('admin.lesson');
    }

    public function destroy($lesson_id){
        Lesson::where("id",$lesson_id)->first()->forceDelete();
    }
    
    public function getAll($grade,$major){
        $lessons = Lesson::where('grade',"<=",$grade)->where('major',$major)->get();
    	$primary_lessons = Lesson::where('grade',"<=",$grade)->where('major',$major)->where('main',1)->get();
        $secondary_lessons = Lesson::where('grade',"<=",$grade)->where('major',$major)->where('main',0)->get();

    	return response()->json(
            [
                'primary' => $primary_lessons,
                'secondary' => $secondary_lessons
            ]
        ,200);
    }

}
