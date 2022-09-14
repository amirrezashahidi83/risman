<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TopicController extends Controller
{
    
    public function store(Request $request){
    	$lesson_id = $request->lesson_id;
    	$title = $request->title;

    	$topic = new Topic();
    	$topic->lesson_id = $lesson_id;
    	$topic->title = $title;

    	return response()->json($topic->save(),200);	
    }

    public function getByLesson($lesson_id){
    	$topics = Topic::where('lesson_id',$lesson_id)->get();
    	return response()->json($topics,200);
    }
    
    public function update(){
    	
    }

    public function destroy(){
    	
    }
}
