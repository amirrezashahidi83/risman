<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ValidationController extends Controller
{
    public function phoneExists($phoneNumber){
    	return response(
    		User::where('phoneNumber',$phoneNumber)->get()->count() > 0
    	,200);
    }

    public function nationalExists($nationalCode){
    	return response(
    		User::where('nationalCode',$nationalCode)->get()->count() > 0
    	,200);
    }

    public function counselorExists($counselorCode){
    	return response(
    		User::where('counselorCode',$counselorCode)->get()->count() == 1
    	,200);
    }
}
