<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function __construct(){
        $this->middleware('checkUser');
    }
 
    public function getAll($counselor_id){
    	return response()->json(
    		Comment::where('counselor_id',$counselor_id)->get()
    	,200);
    }

    public function store(Request $request){
    	$student_id = $request->student_id;
    	$text = $request->text;
    	$rating = $request->rating;
    	$type = $request->type;

    	$comment = new Comment();
    	$comment->student_id = $student_id;
    	$comment->text = $text;
    	$comment->rating = $rating;
    	$comment->save();
    	return (
    		$comment->id
    		,200);
    }
}
