<?php

namespace App\Exports;

use App\Models\StudyPlan;
use Maatwebsite\Excel\Concerns\FromArray;

class CompareExport implements FromArray
{
    /**
    * @return \Illuminate\Support\Collection
    */

    protected $data = array();

    public function __construct($data){
    	$this->data = $data;
    }

    public function array():array
    {
        return $data;
    }
}
