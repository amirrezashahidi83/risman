<?php

namespace App\lib;

/*require_once 'nusoap.php';*/
use nusoap_client;
use Admin;

class zarinpal
{
    public $MerchantID;
    public function __construct()
    {

        $this->MerchantID = Admin::where('id',1)->first()->merchant_id;

        $this->client = new nusoap_client('https://www.zarinpal.com/pg/services/WebGate/wsdl', 'wsdl');
        $this->client->soap_defencoding = 'UTF-8';

    }
    public function pay($Amount, $Email, $Mobile, $Description)
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
}
