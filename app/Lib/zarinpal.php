<?php

namespace App\lib;

use DB;
/*require_once 'nusoap.php';*/
use nusoap_client;

class zarinpal
{
    public $MerchantID;
    public function __construct()
    {
        // $this->MerchantID = "5e682ada-3b69-11e8-aaf3-005056a205be";
        $this->MerchantID = "4fc25c92-3382-478a-b4c8-4df428ef630a";

        $this->client = new nusoap_client('https://www.zarinpal.com/pg/services/WebGate/wsdl', 'wsdl');
        $this->client->soap_defencoding = 'UTF-8';

    }
    public function pay($Amount, $Email, $Mobile, $s = "")
    {
        $Description = 'فروش دفتر برنامه ریزی';  // Required
        if ($s == 1) {
            $CallbackURL = url('/api/payback'); // Required
        } else {
            $CallbackURL = url('/api/buyback'); // Required
        }


        // $client = new nusoap_client('https://sandbox.zarinpal.com/pg/services/WebGate/wsdl', 'wsdl');
        // $client->soap_defencoding = 'UTF-8';
        $result = $this->client->call('PaymentRequest', [
            [
                'MerchantID'     => $this->MerchantID,
                'Amount'         => $Amount,
                'Description'    => $Description,
                'Email'          => $Email,
                'Mobile'         => $Mobile,
                'CallbackURL'    => $CallbackURL,
                // 'sandBox'        => 1,
            ],
        ]);

        //Redirect to URL You can do it also by creating a form
        if ($result['Status'] == 100) {
            // $result['stu_id'] = $stu_id;
            return $result['Authority'];
        } else {
            // $result['stu_id'] = $stu_id;
            return false;
        }
    }

    public function verify($authority,$Amount){

        //در خط زیر یک درخواست به زرین پال ارسال می کنیم تا از صحت پرداخت کاربر مطمئن شویم
        $result = $this->client->call('PaymentVerification', [
            [
                //این مقادیر را به سایت زرین پال برای دریافت تاییدیه نهایی ارسال می کنیم
                'MerchantID'     => $this->MerchantID,
                'Authority'      => $authority,
                'Amount'         => $Amount,
            ],
        ]);

        return $result;
    }
}
