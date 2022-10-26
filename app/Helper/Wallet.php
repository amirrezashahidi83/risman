<?php

	namespace App\Helper;

	use App\Models\User;
    use App\Models\Transaction;
	use App\Models\Admin;
    use nusoap_client;

    class Wallet{
    	public static function getMoney($user_id){
            return User::where('id',$user_id)->first()->balance;
    	}

    	public static function charge($amount,$user_id){
            

            $MerchantID = Admin::where('id',1)->first()->merchant_id;
            
            $client = new nusoap_client('https://www.zarinpal.com/pg/services/WebGate/wsdl', 'wsdl');
            
            $client->soap_defencoding = 'UTF-8';

            $result = $client->call('PaymentRequest', [
                [
                    'MerchantID'     => $MerchantID,
                    'Amount'         => $amount,
                    'Description'    => '',
                    'Email'          => '',
                    'Mobile'         => '',
                    'CallbackURL'    => 'http://127.0.0.1:8000/verifyPayment',
                    'sandBox'        => 1,
                ],
            ]);

            if ($result['Status'] == 100) {
                // $result['stu_id'] = $stu_id;
                User::where('id',$user_id)->first()->balance += $amount;
                $transaction = new Transaction();
                $transaction->amount = $amount;
                $transaction->expire = new Date();
                $transaction->code = $result['Authority'];
                $transaction->user_id = $user_id;
                $transaction->save();
                
                return $result['Authority'];
            } else {
                // $result['stu_id'] = $stu_id;
                return '';
            }

    	}

    	public static function buy($amount,$user_id){
            if( $amount > Wallet::getMoney($user_id) )
                return false;

            $user = User::where('id',$user_id)->first();

            $user->balance -= $amount;

            return $user->save() == 1;

    	}

    }
?>