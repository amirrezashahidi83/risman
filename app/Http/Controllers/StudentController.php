<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
class StudentController extends Controller
{
    public function index($id){
    	return Student::where('id',$id)->first();
    }
}
