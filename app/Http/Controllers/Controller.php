<?php

namespace App\Http\Controllers;

use App\Options;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    public $appname;
    public $VersionStu;
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function __construct(Request $request)
    {
        // نام اپ
        $option = Options::where('id',5)->first();
        $this->appname = $option->vlaue;
        // نسخه اپ دانش آموز
        $this->VersionStu = 8;
        $this->UrlVersionStu = 'https://rismanapp.ir/risman_student_8.apk';
        // نسخه اپ مشاور
        $this->VersionMosh = 8;
        $this->UrlVersionMosh = 'https://rismanapp.ir/risman_moshaver_8.apk';


        $this->loginError = 'عدم سطح دسترسی';

        $this->loginErrorArr = ['success' => false , 'errorMsg' => $this->loginError ];

        // $this->baseUrl = 'http://192.168.1.7:8080';
        $this->baseUrl = 'http://185.141.212.155';

    }

    public function myView($viewFile,$data=[]) {
        // error_log($data['TrAc']);
        // return $data['TrAc'];
        $data['test'] = 123;
        return view($viewFile,$data);

    }
}
