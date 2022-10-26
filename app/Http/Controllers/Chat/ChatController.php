<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;

class ChatController extends Controller
{
    public function __construct(){
        $this->middleware('checkUser');
    }

    public function index($chat_id){
    	return response()->json(
    		Chat::where('id',$chat_id)->first(),
    		200);
    }

    public function store(Request $request){
    	$title = $request->title;

    	$chat = new Chat();
    	$chat->title = $title;
    	if($request->has('profilePic')){
    		$profilePic = $request->profilePic;
    		$path = $profilePic->store('chats/profile','local');
    		$chat->profilePic = $path;
    	}
    	return response()->json($chat->save(),200);
    }

    public function destroy($chat_id){

    }

}
