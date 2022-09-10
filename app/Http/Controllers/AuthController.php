<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Student;
use App\Models\Counselor;
use Kavenegar\KavenegarApi;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
	public function login(Request $request){
		
		$phoneNumber = $request->phoneNumber;
		$password = $request->password;
		$role = $request->role;

		$validator = Validator::make($request->all(),[
			'phoneNumber' => 'required',
			'password' => 'required',
			'role' => 'required'
		]);

		if($validator->fails()){
			return response()->json(['error' => 'Unauthorized']);
		}

		if(Auth::attempt(['phoneNumber' => $phoneNumber,'password' => $password]) ){
			$token = auth()->user()->createToken('NewToken')->accessToken;
			return response()->json([
				'token' => $token,
				'code' => 200
			]);

		}else{
			return response()->json(['error' => 'Unauthorized']);
		}
	}

	public function sendCode($phoneNumber){

		$apiKey = "7A71544551417865657250637655412F616E4D54617146454159347A59672F33";
		
		$api = new KavenegarApi($apiKey);
        $message = $new_random->code;
        $receptor = $phoneNumber;
        $result = $api->VerifyLookup($receptor, $message, '', '', 'verify');

	}

	public function acceptCode($phoneNumber){

		$user = new User();
		$user->phoneNumber = $phoneNumber;
		$user_id = $user->save();

		return response()->json([
			'user_id' => $user_id
		],200);
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
		$user->password = $password;

		$user_id = $user->save();
		
		$token = $user->createToken('NewToken')->accessToken;

		if($role == 'student'){
		
			$student = new Student();
			$student->user_id = $user_id;
			$student->save();
		}
		else{
			$counselor = new Counselor();
			$counselor->user_id = $user_id;
			$counselor->save();
		}

		return response()->json([
			'token' => $token
		],200);

	}
		
		

}
