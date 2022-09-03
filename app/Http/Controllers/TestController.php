<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Test;
use App\Imports\TestsImport;
use Maatwebsite\Excel\Facades\Excel;

class TestController extends Controller
{

    public function index($test_id){

    }


    public function getQuestions($test_id){
        $test = Test::where('id',$test_id)->first();

        $questions_file = Storage::disk('local')->get($test->questions);

        $data = Excel::toArray(new TestsImport(),$questions_file);

        $rows = array();
        $questions = array();

        foreach($rows as $row){
            array_push($questions,$row);
        }

        return response()->json($questions,200);

    }

    public function confirm(Request $request){

    }

    public function list(){
        return response()->json(
            Test::all()->get()
            ,200);
    }


}
