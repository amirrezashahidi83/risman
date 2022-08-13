<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lib\zarinpal;
use App\Lib\bitpay;
use App\Sms;
use App\Stu;
use DB;
use nusoap_client;
use Session;

class CodeController extends Controller
{
    public $price = 100000;
    protected $status_pay = 0;

    public function index()
    {
        return 'ss';
    }
    public function payCode($mobile, $PriceSymbol)
    {
        if ($PriceSymbol == 213) {

            $stu = Stu::where('mobile', $mobile)->first();
            if(!$stu)
                return 'student not found';

            $price = $this->price;
            $mail = 'www.dasaeid.a123@gmail.com';
            
            // ارسال کاربر به درگاه
            $zaring = new zarinpal();
            $res = $zaring->pay($price, $mail, $mobile, 1);
            
            // log in transaction
            DB::table('transaction')->insert([
                'stu_id' => $stu->id,
                'price' => $price,
                'status' => 50,
                'code' => 0,
                'kind' => 1,
                'date_time' => time(),
                'authority' => $res,
            ]);

            return redirect('https://www.zarinpal.com/pg/StartPay/' . $res);
        }
        return 'no pay';
    }

    public function payback(Request $request)
    {

        $Authority = $request->get('Authority');

        $trasAction = DB::table('transaction')
            ->where('authority',$Authority)
            ->where('status',50)
            ->first();
        
        if(!$trasAction)
            return 'trans action is done';

        $stu = Stu::where('id', $trasAction->stu_id)->first();

        $Amount = $trasAction->price;

        if ($request->get('Status') == 'OK') {

            // verify gateway
            $zaring = new zarinpal();
            $result = $zaring->verify($Authority,$Amount);

            if ($result['Status'] == 100 || $result['Status'] == 101) {
                
                $mobile = $stu->mobile;

                // delete befor codes
                Sms::where('stu_id',$stu->id)->delete();

                $new_random = new Sms;
                $new_random->stu_id = $stu->id;
                $new_random->mobile = $mobile;
                $new_random->code = rand(99999, 1000000);
                $new_random->err = 0;
                $new_random->time_added = time();

                if ($new_random->save()) {
                    DB::table('transaction')->where('id',$trasAction->id)
                    ->update([
                        'status' => 1,
                        'code' => $result['RefID'],
                        'time_update' => time()
                    ]);
                    
                    // ارسال پیامک به شماره دانش آموز
                    try {
                        $api = new \Kavenegar\KavenegarApi("7A71544551417865657250637655412F616E4D54617146454159347A59672F33");
                        $sender = "10008663";
                        $message = $new_random->code;
                        $receptor = $mobile;
                        $result2 = $api->VerifyLookup($receptor, $message, '', '', 'verify');
                        // $result = $api->Send($sender, $receptor, $message);

                    } catch (\Kavenegar\Exceptions\ApiException $e) {
                        echo $e->errorMessage();
                    } catch (\Kavenegar\Exceptions\HttpException $e) {
                        echo $e->errorMessage();
                    }
                    return view('pay',['mes'=>'در صورت وجود هرگونه مشکل با شماره ی 09122245852 در پیامرسان واتساپ در ارتباط باشید','result' => $result,'mes2' => 'پرداخت با موفقیت انجام شد']);
                    // return response(['mes' => 'پرداخت با موفقیت انجام شد', 'result' => $result]);
                }
            } else {
                DB::table('transaction')->where('id',$trasAction->id)
                ->update([
                    'status' => -2,
                ]);
                // return response()->json(['mes' => 'خطا در انجام عملیات1', 'result' => $result]);
                return view('pay',['mes'=>'در صورت وجود هرگونه مشکل با شماره ی 09122245852 در پیامرسان واتساپ در ارتباط باشید','result' => $result,'mes2' => 'خطا در انجام عملیات']);
            }
        } else {
            DB::table('transaction')->where('id',$trasAction->id)
            ->update([
                'status' => -1,
            ]);
            $result = array("Status"=>121);
            return view('pay', ['mes' => 'در صورت وجود هرگونه مشکل با شماره ی 09122245852 در پیامرسان واتساپ در ارتباط باشید', 'result' => $result, 'mes2' => 'پرداخت لغو شده است']);
        }
    }

    public function transaction_send($mobile, $id_get, $price, $kind)
    {
        $stu = Stu::where('mobile', $mobile)->first();

        if ($stu) {
            $trans = DB::table('transaction')->insert([
                'stu_id' => $stu->id,
                'price' => $price,
                'status' => $this->status_pay,
                'code' => $id_get,
                'kind' => $kind,
                'date_time' => time(),
            ]);
        }
    }









    public function paybit($mobile, $PriceSymbol)
    {
        if ($PriceSymbol == 213) {
            Session::put('mobile', $mobile);
            $url = 'https://bitpay.ir/payment-test/gateway-send';
            $api = 'adxcv-zzadq-polkjsad-opp13opoz-1sdf455aadzmck1244567';
            $amount = $this->price;
            $redirect = url('/api/backbit');
            $name = 'ورود به اپلیکیشن';
            $email = 'www.dasaeid.a123@gmail.com';
            $description = 'خرید اشتراک ورود به اپلیکیشن';
            $factorId = time() . uniqid();
            $result = bitpay::send($url, $api, $amount, $redirect, $factorId, $name, $email, $description);

            if ($result > 0 && is_numeric($result)) {
                $go = 'http://bitpay.ir/payment-test/gateway-' . $result;
                return redirect($go);
            }
            return 'no';
        }
    }

    public function backbit(Request $request)
    {
        $url = 'http://bitpay.ir/payment-test/gateway-result-second';
        $api = 'adxcv-zzadq-polkjsad-opp13opoz-1sdf455aadzmck1244567';
        $trans_id = $request->trans_id;
        $id_get = $request->id_get;

        $result = bitpay::get($url, $api, $trans_id, $id_get);

        $mobile = Session::get('mobile');
        if ($result == 1) {
            $this->status_pay = 1;
            $this->transaction_send($mobile, $id_get, $this->price, 0);
            $stu = Stu::where('mobile', $mobile)->first();
            $new_random = new Sms;
            $new_random->stu_id = $stu->id;
            $new_random->mobile = $mobile;
            $new_random->code = rand(99999, 1000000);
            $new_random->err = 0;
            $new_random->time_added = time();
            if ($new_random->save()) {
                Session::forget('mobile');
                // ارسال پیامک به شماره دانش آموز
                try {
                    $api = new \Kavenegar\KavenegarApi("7A71544551417865657250637655412F616E4D54617146454159347A59672F33");
                    $sender = "10008663";
                    $message = " کد ورود اپلیکیشن " . $this->appname . " : " .
                        $new_random->code;
                    $receptor = $mobile;
                    $result = $api->Send($sender, $receptor, $message);

                    return response()->json([
                        'success' => 'yes',
                        'trans_id' => $trans_id,
                        'id_get' => $id_get,
                    ]);
                } catch (\Kavenegar\Exceptions\ApiException $e) {
                    echo $e->errorMessage();
                } catch (\Kavenegar\Exceptions\HttpException $e) {
                    echo $e->errorMessage();
                }
            }
        } else {
            $this->status_pay = 0;
            $this->transaction_send($mobile, $id_get, $this->price, 0);
            return response()->json([
                'success' => 'no',
                'trans_id' => $trans_id,
                'id_get' => $id_get,
                'mobile' => Session::get('mobile')
            ]);
        }
    }
}
