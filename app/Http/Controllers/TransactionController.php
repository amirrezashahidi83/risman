<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Transaction;
use App\Models\Student;

class TransactionController extends Controller
{
    public function __construct(){
        $this->middleware('checkUser');
    }

    public function getAll($user_id){
    	
    	return response()->json(
    		Transaction::where('user_id',$user_id)->get()
    		,200);
    }

    public function verifyPayment(Request $request){
        $Authority = $request->Authority;
        $Status = $request->Status;
        
        if($Status == "NOK"){
            $transaction = Transaction::where('Authority',$Authority)->first()->softDelete();
        }
        
        return view('user');
    }

    public function checkPaid($student_id){
        $result = Student::where("id",$student_id)->first()->status == 1 ? 1 : 0;
        return response()->json($result,200);
    }
}
