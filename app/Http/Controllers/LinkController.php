<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Link;

class LinkController extends Controller
{
    public function getAll(){
        return response()->json(
            Link::all()
            ,200);
    }

    public function store(Request $request){
    	$value = $request->value;
    	$link = new Link();
    	$link->value = $value;
    	return response()->json(
    		$link->save()
    		,200);
    }

    public function destroy(){

    }
}
