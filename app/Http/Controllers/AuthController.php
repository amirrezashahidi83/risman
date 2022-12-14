<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Student;
use App\Models\Counselor;
use App\Models\SmsCode;
use Kavenegar\KavenegarApi;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use JWTAuth;

class AuthController extends Controller
{
	public function login(Request $request){
		
		$phoneNumber = $request->phoneNumber;
		$password = $request->password;

		$validator = Validator::make($request->all(),[
			'phoneNumber' => 'required',
			'password' => 'required',
		]);

		if($validator->fails()){
			return response()->json(['error' => 'Unauthorized']);
		}

		if(($token = JWTAuth::attempt(['phoneNumber' => $phoneNumber,'password' => $password]) )){
			$user = JWTAuth::user();
			if($user->role == 1)
				$user['special'] = Counselor::where('user_id',$user->id)->first();
			else{
				$user['special'] = Student::where('user_id',$user->id)->first();
			}

			return response()->json([
				'user' => $user,
				'token' => $token
			],200);

		}else{
			return response()->json(['error' => 'Unauthorized']);
		}
	}

	public function register(Request $request){

		$name = $request->name;
		$nationalCode = $request->nationalCode;
		$password = $request->password;
		$role = $request->role;
		$user_id = $request->user_id;

		$user = User::where('id',$user_id)->first();
		$user->name = $name;
		$user->role = $role;
		$user->nationalCode = $nationalCode;
		$user->password = Hash::make($password);

		$user->save();
		
		if($role == 2){
		
			$student = new Student();
			$student->user_id = $user->id;
			$student->status = 0;
			$student->major = $request->major;
			$student->grade = $request->grade;
			$student->school = $request->school;
			$student->save();
			$user['special'] = $student;
		}
		else{
			$counselor = new Counselor();
			$counselor->user_id = $user->id;
			$counselor->status = 0;
			$counselor->automatic_message = 0;
			$counselor->specialities = json_encode('');
			$counselor->save();
			$user['special'] = $counselor;
		}

		return response()->json([$user],200);

	}

	public function foregetpassword($phoneNumber){
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < 5; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }

	    $user = User::where('phoneNumber',$phoneNumber)->first()->
	    update(['password' => $randomString]);

	   	$api = new KavenegarApi($apiKey);
		$receptor = $phoneNumber;
		$message = $randomString;
		$result = $api->VerifyLookup($receptor, $message, '', '', 'verify');

		return response()->json($result,200);
	}

	public function logout(){
		JWTAuth::logout();
		return response()->json(1,200);
	}
		
		

}
