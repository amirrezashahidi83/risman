<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Transaction;

class TransactionController extends Controller
{
    public function getAll($user_id){
    	
    	return response()->json(
    		Transaction::where('user_id',$user_id)->get()
    		,200);
    }

    public function store(Request $request){
    	
    }

    public function verifyPayment(Request $request){

    }
}
