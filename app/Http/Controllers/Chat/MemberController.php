<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Chat;

class MemberController extends Controller
{
    public function index($member_id){
    	return response()->json(
    		User::where('id',$member_id)->first()
    		,200);
    }

    public function add_to_Chat(Request $request){
    	$member_id = $request->member_id;
    	$chat_id = $request->chat_id;

    	$chat = Chat::where('id',$chat_id);
    	$new_member = User::where('id',$member_id)->first();
    	$members = json_decode($chat->members);

    	array_push($members,$new_member);

    	$chat->members = $members;

    	return response()->json($chat->save(),200);

    }

    public function remove_from_Chat(Request $request){
    	$member_id = $request->member_id;
    	$chat_id = $request->chat_id;

    	$chat = Chat::where('id',$chat_id);
    	$new_member = User::where('id',$member_id)->first();
    	$members = json_decode($chat->members);

    	array_splice($members,$new_member);

    	$chat->members = $members;

    	return response()->json($chat->save(),200);
    }

    public function getAll($chat_id){
    	$members = Chat::where('id',$chat_id)->get();
    	return response()->json($members,200);
    }
}
