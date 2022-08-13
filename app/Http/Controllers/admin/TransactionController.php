<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Transaction;
use Verta;

class TransactionController extends Controller
{
    public function transactions(){

        $TrAc = Transaction::
        leftJoin('stu', 'transaction.stu_id', '=', 'stu.id')
        ->orderBy('transaction.date_time','desc')
        ->select('transaction.*','stu.name')
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
