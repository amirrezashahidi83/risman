<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Daily;

class DailyController extends Controller
{
	public function addPicture(Request $request){
		
		$counselor_id = $request->counselor_id;
		$picture = $request->file('picture');
		$path = $picture->store('dailys','public');

		$daily = new Daily();
		$daily->picture = $path;
		$daily->counselor_id = $counselor_id;

		return response()->json($daily->save(),200);

	}

	public function addMessage(Request $request){
		$counselor_id = $request->counselor_id;
		$message = $request->message;

		$daily = new Daily();
		$daily->message = $message;
		$daily->counselor_id = $counselor_id;

		return response()->json($daily->save(),200);
	}

	public function getLastMessage($counselor_id){
		$counselor_id = $request->counselor_id;

		$daily = Daily::where('counselor_id',$counselor_id)->where('type',0)->orderByDesc('id')->first();

		return response()->json($daily,200);
	}

	public function getLastPicture(Request $request){
		$counselor_id = $request->counselor_id;

		$daily = Daily::where('counselor_id',$counselor_id)->where('type',1)->orderByDesc('id')->first();

		return response()->json($daily,200);
	}

	public function getAll($counselor_id){
		return response()->json(
			Daily::where('counselor_id',$counselor_id)->get()
			,200);
	}
}
