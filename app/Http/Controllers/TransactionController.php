<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Transaction;
use App\Models\Student;

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

    public function buyWallet(Request $request){
        
    }

    public function checkPaid($student_id){
        return (
            Student::where("id",$student_id)->first()->status == 1
            ,200);
    }
}
