<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;

class ScheduleController extends Controller
{
    public function index($student_id){
    	return Schedule::where('student_id',$student_id)->get();
    }

    public function store(Request $request){

    }

}
