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
		$daily->type = 2;
		$daily->counselor_id = $counselor_id;

		return response()->json($daily->save(),200);

	}

	public function addMessage(Request $request){
		$counselor_id = $request->counselor_id;
		$text = $request->text;

		$daily = new Daily();
		$daily->text = $text;
		$daily->type = 1;
		$daily->counselor_id = $counselor_id;

		return response()->json($daily->save(),200);
	}

	public function getAll($counselor_id){
		return response()->json(
			Daily::where('counselor_id',$counselor_id)->get()
			,200);
	}

	public function getByTime($counselor_id,$time){

		$dailies = Daily::where('counselor_id',$counselor_id)->where("start_time","<=",$time)
		->where("end_time",">=",$time)->get();
		return response()->json({
			'texts' => $dailies->where('type',1),
			'images' => $dailies->where('type',2)
			}
			,200);
	}
}
