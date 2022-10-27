<?php

namespace App\Http\Middleware;

use App\Models\User;
use App\Models\Student;
use App\Models\Counselor;
use Illuminate\Http\Request as MiddlewareRequest;
use JWTAuth;
use Closure;

class CheckUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */



    public function handle(MiddlewareRequest $request, Closure $next)
    {
        $token = $request->token;
        $user = null;
        if($request->has("student_id")){
            $user = Student::where('user_id',$request->student_id)->first();
        }
        else if($request->has("counselor_id")){
            $user = Counselor::where('user_id',$request->counselor_id)->first();
        }
        else if($request->has("user_id")){
            $user = User::where('id',$request->user_id)->first();
        }
        
        if($user != null)
        if ($user->id != JWTAuth::toUser($token)->id)
            return redirect('login');

        return $next($request);

    }
}
