<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Test;
use App\TestAnswer;
use App\helper\TestMethod;
use Verta;
use App\helper\Tools;
use App\Stu;
use DB;


class TestController extends Controller
{
    public function __construct(){
        $this->baseUrl = 'http://185.141.212.155';
        $this->testList = [
            'ghardner' => [
                'title'=> 'آزمون گاردنر',
                'price' => 15000,
                'count'=> 80,
                'type'=> 'select',
                'name'=> 'ghardner',
                'time' => null,
                'description' => 'آزمون گاردنر',
                'answer_count'=> 5,
            ],
            'mbti' => [
                'title'=> 'آزمون mbit',
                'price' => 15000,
                'count'=> 87,
                'type'=> 'select',
                'name'=> 'mbti',
                'time' => null,
                'description' => 'آزمون mbti',
                'answer_count'=> 2,
            ],
            'lsi'=>[
                'title'=> 'آزمون lsi',
                'price' => 15000,
                'count'=> 12,
                'type'=> 'input',
                'name'=> 'lsi',
                'time' => null,
                'description' => 'آزمون lsi',
                'answer_count'=> 4,
            ]
        ];
    }

    public function list(Request $request){
        // token 
        $user = $request->user;

        return response()->json([
            'success' => true,
            'list' => [
                [
                    'title'=> 'آزمون گاردنر',
                    'price' => 15000,
                    'count'=> 80,
                    'type'=> 'select',
                    'name'=> 'ghardner',
                    'time' => null,
                    'description' => 'آزمون گاردنر',
                    'answer_count'=> 5,
                ],
                [
                    'title'=> 'آزمون mbit',
                    'price' => 15000,
                    'count'=> 87,
                    'type'=> 'select',
                    'name'=> 'mbti',
                    'time' => null,
                    'description' => 'آزمون mbti',
                    'answer_count'=> 2,
                ],
                [
                    'title'=> 'آزمون lsi',
                    'price' => 15000,
                    'count'=> 12,
                    'type'=> 'input',
                    'name'=> 'lsi',
                    'time' => null,
                    'description' => 'آزمون lsi',
                    'answer_count'=> 4,
                ]
            ],
        ]);
        
    }

    public function get(Request $request){
        // token testName
        $testName = $request->testName;
        $user = $request->user;

        if ($user->rest < $this->testList[$testName]['price']) {
            return response()->json([
                'success' => false,
                'message' => 'موجودی کیف پول برای خرید این آزمون کافی نیست',
            ]);
        }

        DB::table('stu')->where('id',$user->id)->update([
            'rest' => $user->rest - $this->testList[$testName]['price']
        ]);
        // $user->update();
        
        $tests = Test::where('type',$testName)
            ->orderBy('number')
            ->get();

        foreach ($tests as $key => $value) {
            $json_temp = json_decode($value->aswers, true);
            if($testName == 'ghardner')
                $tests[$key]->aswers = array($json_temp[1],$json_temp[2],$json_temp[3],$json_temp[4],$json_temp[5]);
            else if($testName == 'mbti')
                $tests[$key]->aswers = array($json_temp[1],$json_temp[2]);
            else if($testName == 'lsi')
                $tests[$key]->aswers = array($json_temp[1],$json_temp[2],$json_temp[3],$json_temp[4]);
                

        }
        
        return response()->json([
            'success' => true,
            'tests' => $tests,

        ]);
    }

    public function send(Request $request){
        
        // token testName
        $testName = $request->testName;
        $user = $request->user;
        // $answer = json_decode($request->answer);
        $answer = $request->answer;

        // return $answer;

        switch ($testName) {
            case 'ghardner':
                $result = TestMethod::ghardner($answer);
                break;
            case 'mbti':
                $testMbti = new TestMethod();
                $result = $testMbti->mbti($answer);
                break;
            case 'lsi':
                $result = TestMethod::lsi($answer);
                break;
        }

        $testAnswer = new TestAnswer();
        $testAnswer->stu_id = $user->id;
        $testAnswer->mosh_code = $user->mosh_id;
        $testAnswer->result = json_encode($result);
        $testAnswer->time_added = time();
        $randomKey = str_random(8);
        $testAnswer->code = $randomKey;
        $testAnswer->test_name = $testName;
        
        if($testAnswer->save()){
            $link = $this->baseUrl.'/api/test/'. $randomKey;
            return response()->json([
                'success' => true,
                'link' => $link,
    
            ]);
        }
        
    }

    public function testView(Request $request)
    {
        $testKey = $request->route('testKey');
        $testAnswer = TestAnswer::where('code',$testKey)->first();

        if(!$testAnswer)
            return false;

        $resultGhardner = json_decode($testAnswer->result);

        $n = Verta::createTimestamp((int)$testAnswer->time_added);
        $time_added = $n->format('Y-n-j');

        $data = $resultGhardner;
        // dd($data);
        
        switch ($testAnswer->test_name) {
            case 'ghardner':
                return view('ghardner', compact(['resultGhardner','time_added']));
                break;
            case 'mbti':
                return view('mbti', compact(['data','time_added']));
                break;
            case 'lsi':
                return view('lsi', compact(['data','time_added']));
                break;
        }

    }

    public function testApi(Request $request)
    {
        $testKey = $request->route('testKey');
        $testAnswer = TestAnswer::where('code',$testKey)->first();

        if(!$testAnswer)
            return false;

        $resultGhardner = json_decode($testAnswer->result);
        // dd($resultGhardner);
        if($testAnswer->test_name == 'lsi'){
            
            $thingking = $resultGhardner->shiveYadgiri[2]->score;
            $feeling = $resultGhardner->shiveYadgiri[0]->score;
            $doing = $resultGhardner->shiveYadgiri[3]->score;
            $watching = $resultGhardner->shiveYadgiri[1]->score;

            $x = $thingking - $feeling;
            $y = $doing - $watching;

            $d = ['x' => $x, 'y' => $y];

            return response()->json($d);
        }

        return response()->json($resultGhardner); 

    }

    public function history(Request $request){
        $token = $request->token;
        if($request->stu_id){
            // get moshaver and get stu wthd stu_id
            $checkLogin = Tools::checkTokenMosh($token);
            if (!$checkLogin['success'])  // check Login user 
                return response()->json(['success' => false ]);
            $mosh = $checkLogin['user'];
            $stu = stu::where('id',$request->stu_id)->first();

            if($stu->mosh_id != $mosh->code)
                return response()->json(['success' => false ]);

        }else{

            $checkLogin = Tools::checkTokenStudent($token);

            if (!$checkLogin['success'])  // check Login user 
                return response()->json(['success' => false ]);

            $stu = $checkLogin['user'];
        }

        $tests = TestAnswer::where('stu_id',$stu->id)
        ->select('id','stu_id','time_added','code','test_name')
        ->orderBy('id','desc')
        ->get();

        foreach ($tests as $key => $value) {
            $tests[$key]->link = $this->baseUrl.'/api/test/'. $value->code;
            $n = Verta::createTimestamp((int)$value->time_added);
            $tests[$key]->time_added = $n->format('Y-n-j');
            switch ($value->test_name) {
                case 'ghardner':
                    $tests[$key]->test_name = 'آزمون گاردنر';
                    break;
                case 'mbti':
                    $tests[$key]->test_name = 'تست شخصیت شناسی mbti';
                    break; 
                case 'lsi':
                    $tests[$key]->test_name = 'آزمون سبک یادگیری lsi';
                    break;
            }
        }


        
        if($tests){
            return response()->json([
                'success' => true,
                'tests' => $tests,
            ]);
        }
        
    }

}
