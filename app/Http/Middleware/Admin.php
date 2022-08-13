<?php

namespace App\Http\Middleware;

use App\helper\Tools;

use Closure;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */

    function __construct()
    {

        $this->loginError = 'عدم سطح دسترسی';

        $this->loginErrorArr = ['success' => false, 'errorMsg' => $this->loginError];
    }


    public function handle($request, Closure $next)
    {
        $request->user = 'sss';

        return $next($request);

    }
}
