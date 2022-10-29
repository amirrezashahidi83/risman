<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class CodeController extends Controller
{
    
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
}
