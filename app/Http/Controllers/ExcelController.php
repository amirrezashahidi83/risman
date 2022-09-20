<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\CompareExport;
use Maatwebsite\Excel\Facades\Excel;

class ExcelController extends Controller
{
    public function export(Request $request){
    	$name = $request->name;
    	$data = $request->data;

		return Excel::download(new CompareExport($data),$name);    	
    }
}
