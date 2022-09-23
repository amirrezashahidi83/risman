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

	public function sendCode($phoneNumber){

		$apiKey = "7A71544551417865657250637655412F616E4D54617146454159347A59672F33";
		
		$api = new KavenegarApi($apiKey);
        $message = rand(10000,99999);
        $receptor = $phoneNumber;
        $result = $api->VerifyLookup($receptor, $message, '', '', 'verify');
       	/*$sms = new SmsCode();
       	$sms->code = $message;
       	$sms->phoneNumber = $phoneNumber;
       	$sms->save();*/
        return response()->json($message,200);

	}

	public function acceptCode($phoneNumber){

		$user = new User();
		$user->phoneNumber = $phoneNumber;
		$user->password = Hash::make('');
		$user->balance = 0;
		$user->city = 0;
		$user->score = 0;
		$user_id = $user->save();
		$token = JWTAuth::attempt(['phoneNumber' => $phoneNumber , 'password' => '']);

		return response()->json([
			'user' => $user,
			'token' => $token
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
		
		

}
