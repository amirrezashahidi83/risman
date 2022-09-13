<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function getComments($counselor_id){
    	return response()->json(
    		Comment::where('counselor_id',$counselor_id)->get()
    	,200);
    }

    public function addComment(Request $request){
    	
    }
}
