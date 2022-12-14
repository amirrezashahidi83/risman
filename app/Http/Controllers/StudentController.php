<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\User;
use App\Helper\Wallet;
use App\Models\Option;

class StudentController extends Controller
{

    public function __construct(){
        $this->middleware('checkUser');
    }

    public function index($id){
    	return Student::where('id',$id)->first();
    }

    public function getAll(){
        return Student::limit(100)->get();
    }

    public function update(Request $request){
    	$student_data = $request->studentData;
    	$user_data = $request->userData;
    	$student_id = $request->studentId;

    	$student = Student::where('id',$student_id)->first();
    	$user = User::where('id',$student->user_id)->first();

    	$result = $student->update($student_data) == 1 &&  $user->update($user_data) == 1;

    	return response()->json($result,200);
    }
    
    public function getByCounselor($counselor_id){
    	$students = Student::where('counselor_id',$counselor_id)->get();
        foreach($students as $student)
        {
            $name = User::where('id',$student->user_id)->first()->name;
            $student['name'] = $name;
        }
    	return response()->json($students,200);
    }

    public function accept($student_id){
        $result = Student::where('id',$student_id)->update(['status' => 1]) == 1;
        return response()->json($result,200);
    }

    public function requestAccept($student_id){
        
        $app_price = Option::where('key','app_price')->first()->value;
        $result = Wallet::buy($app_price,$student_id);
        if(!$result)
            $result = Wallet::charge($app_price,$student_id);
            if($result == '')
                return response()->json(0,500);


        return response()->json($result,200);
        
    }

    public function checkStatus($student_id){
        return response()->json(
            Student::where('id',$student_id)->first()->status
            ,200);
    }

    public function searchByName($name){
        return response()->json(
            User::where('name',$name)
            ->where('role',2)
            ->get()
            ,200);
    }


}
