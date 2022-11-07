<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public function __construct(){
        $this->middleware('checkUser');
    }

    public function update(Request $request){
    	$user_id = $request->user_id;
    	$data = $request->data;
    	User::where('id',$user_id)->update($data);
    	return response()->json(1,200);
    }
}
