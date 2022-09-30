<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Verta;

class TransactionController extends Controller
{
    public function getAll(){

        $TrAc = Transaction::
        leftJoin('users', 'transaction.user_id', '=', 'user.id')
        ->orderBy('transaction.created_at','desc')
        ->select('transaction.*','user.name')
        ->paginate(15);


        foreach ($TrAc as $key => $value) {
            if($value){
                if(!$value->name)
                    $TrAc[$key]->name = 'کاربر شناسه ' . $value->stu_id;

                if($value->kind == 0)
                    $TrAc[$key]->kind = 'حق اشتراک';
                else
                    $TrAc[$key]->kind = 'افزایش اعتبار';

                    
                $n = Verta::createTimestamp((int) $value->date_time);
                $TrAc[$key]->date_time = $n->formatDatetime();

                if($value->status == 1)
                    $TrAc[$key]->status = 'موفق';

            }
            
                
        }
        // return response()->json([
        //     ['TrAc'=>$TrAc],
        // ]);
        
        // return response()->json($TrAc);
        // return view('admin.transactions',['TrAc'=>$TrAc]);
        return $this->myView('admin.transactions',['TrAc'=>$TrAc]);
    }
    
}
