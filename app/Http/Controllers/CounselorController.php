<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Counselor;
use App\Models\Comment;

class CounselorController extends Controller
{
    public function index($id){
    	return Counselor::where('id',$id)->first();
    }

    public function acceptCounselor($id){
    	$result = Counselor::where('id',$id)->update(['status' => 1]);

        return response()->json($result,200);
    }

    public function getComments($counselor_id){
        return response()->json(
            Comment::where('counselor_id',$counselor_id)->get(0)
            ,200);
    }

    public function addComment(Request $request){
    	$counselor_id = $request->counselor_id;
        $sender_id = $request->user_id;
        $rating = $request->rating;
        $type = $request->type;
        $text = $request->comment;

        $comment = new Comment();
        $comment->user_id = $sender_id;
        $comment->counselor_id = $counselor_id;
        $comment->rating = $rating;
        $comment->type = $type;
        $comment->text = $text;

        return response()->json(
            $comment->save()
            ,200);
    }
    
}
