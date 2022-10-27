<?php

namespace App\Http\Controllers\Counselor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Counselor;
use App\Models\User;
use JWTAuth;

class CounselorController extends Controller
{
    public function __construct(){
        $this->middleware('checkUser',['except' => ['getAll']]);
    }

    public function update(Request $request){

    }
    
    public function index($id){
    	return Counselor::where('id',$id)->first();
    }

    public function destroy($counselor_id){
        Counselor::where('id',$counselor_id)->forceDelete();
    }

    public function accept($id){
    	Counselor::where('id',$id)->update(['status' => 1]);
    }

    public function search(Request $request){
        $limit = $request->limit;
        $user = JWTAuth::toUser($request->token);
        
        $keyword = $request->has('search') ? $request->keyword : '*';

        $state = $request->has('state') ? $user->state : "*" ;
        $city = $request->has('city') ? $user->city : "*";

        return Counselor::where('name',$keyword)::where('state',$state)::where('city',$city)
        ->limit($limit)->get();

    }    
}
