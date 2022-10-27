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
        $this->middleware('checkUser',['except' => ['search']]);
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
       
        $page = $request->page;
        $user = JWTAuth::user();
        
        $keyword = $request->has('keyword') ? $request->keyword : '%';

        $state = $request->state ? $user->state : "%" ;
        $city = $request->city ? $user->city : "%";

        $totalCount = User::where('role',1)->count();

        $result = User::where('role',1)->where('name','like',$keyword)->where('state','like',$state)->where('city','like',$city)
        ->skip(($page-1) * 20)->take(20)->get();

        $counselors = array();
        foreach($result as $user){
            $counselor = Counselor::where('id',$user->id)->first();
            $user['special'] = $counselor;
        }

        return response()->json(
            [
                'counselors' => $result,
                'totalCount' => $totalCount
            ]
            ,200);

    }    
}
