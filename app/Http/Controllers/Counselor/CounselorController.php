<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Counselor;
use App\Models\User;

class CounselorController extends Controller
{
    public function update(Request $request){

    }
    
    public function index($id){
    	return Counselor::where('id',$id)->first();
    }

    public function getAll(){
        return Counselor::limit(100)->get();
    }

    public function destroy($counselor_id){
        Counselor::where('id',$counselor_id)->forceDelete();
    }

    public function accept($id){
    	Counselor::where('id',$id)->update(['status' => 1]);
    }

    public function search(Request $request){
        $state = $request->state;
        $city = $request->city;
        $search = $request->search;

        $users = User::where('role',1)->get();
        $counseolrs = array();
        foreach($users as $user){
            $Counselor = Counselor::where('user_id',$user->id)->first();
            $specialities = json_decode($Counselor->speciality);
            if(in_array($search,$specialities))

        }

    }
    public function searchByName($name){
        return response()->json(
            User::where('name',$name)
            ->where('role',1)
            ->get()
            ,200);
    }
    
}
