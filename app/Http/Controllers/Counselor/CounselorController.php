<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Counselor;

class CounselorController extends Controller
{
    public function update(Request $request){

    }
    
    public function index($id){
    	return Counselor::where('id',$id)->first();
    }

    public function acceptCounselor($id){
    	Counselor::where('id',$id)->update(['status' => 1]);
    }

    public function getComments($counselor_id){

    }

    public function addComment(Request $request){
    	
    }
    
}