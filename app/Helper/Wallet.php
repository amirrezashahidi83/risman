<?php

	namespace App\Helper;

	use App\Models\User;
	use App\Models\Admin;

	public function getMoney($user_id){
        return User::where('id',$user_id)->balance;
	}

	public function charge($amount,$user_id){
        

        $MerchantID = Admin::where('id',1)->first()->merchant_id;
        
        $client = new nusoap_client('https://www.zarinpal.com/pg/services/WebGate/wsdl', 'wsdl');
        
        $client->soap_defencoding = 'UTF-8';

        $result = $client->call('PaymentRequest', [
            [
                'MerchantID'     => $MerchantID,
                'Amount'         => $Amount,
                'Description'    => $Description,
                'Email'          => $Email,
                'Mobile'         => $Mobile,
                'CallbackURL'    => $CallbackURL,
                // 'sandBox'        => 1,
            ],
        ]);

        if ($result['Status'] == 100) {
            // $result['stu_id'] = $stu_id;
            return $result['Authority'];
        } else {
            // $result['stu_id'] = $stu_id;
            return false;
        }

	}

	public function buy($amount,$user_id){
        if( $amount > getMoney() )
            return;

        $user = User::where('id',$user_id)->first();

        $user->balance -= $amount;

        return $user->save() == 1;

	}


?>