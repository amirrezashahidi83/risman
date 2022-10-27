<?php

use Illuminate\Http\Request;

use App\Http\Controllers\DailyController;
use App\Http\Controllers\Chat\ChatController;
use App\Http\Controllers\Chat\MessageController;
use App\Http\Controllers\Counselor\RequestController;
use App\Http\Controllers\Counselor\CommentController;
use App\Http\Controllers\Exam\PlanController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login','AuthController@login')->name('login');
Route::get('/sendCode/{phoneNumber}','AuthController@sendCode');
Route::get('/acceptCode/{phoneNumber}','AuthController@acceptCode');
Route::get('/forgetpassword/{phoneNumber}','AuthController@forgetPassword');

Route::get('/checkphone/{phoneNumber}','ValidationController@phoneExists');
Route::get('/checknational/{nationalCode}','ValidationController@nationalExists');
Route::get('/checkcode/{counselorCode}','ValidationController@counselorExists');


Route::group(['prefix' => 'admin'],function(){
    Route::get("/students","StudentController@getAll");
    Route::get("/counselors","StudentController@getAll");

    Route::get("/lessons/{grade}/{major}","LessonController@getAll");
    Route::get("/lessons/{lesson_id}/delete","LessonController@destroy");
    Route::post("/lessons/update","LessonController@update");
    Route::post("/lessons/new","LessonController@store");

    Route::get("/dailies/{counselor_id}","DailyController@getAll");

    Route::post("/dailies/newPicture","DailyController@addPicture");
    Route::post("/dailies/newMessage","DailyController@addMessage");

    Route::get("/student/{student_id}/analysises/{exam_id}","Exam\ExamController@getAnalysises");
    Route::get("/plans",[PlanController::class,'getAll']);
    Route::post("/plans/new",[PlanController::class,'store']);
});

Route::middleware('auth:api')->group(function(){
    Route::post('/register','AuthController@register');


    Route::get('/lessons/{grade}/{major}','LessonController@getAll');
    Route::get('/topics/{lesson_id}','LessonController@getTopics');

    Route::post("/message/new",[MessageController::class,'store']);
    Route::post("/message/forward",[MessageController::class,'forward']);
    Route::post("/message/delete",[MessageController::class,'destroy']);
    Route::post("/message/see",[MessageController::class,'setSeen']);

    Route::get("/chat/",[ChatController::class,'index']);
    Route::get("/chat/messages",[ChatController::class,'getMessages']);
    Route::post("/chat/new",[ChatController::class,'store']);
    Route::get("/chat/delete",[ChatController::class,'destroy']);
    Route::post("/chat/search",[ChatController::class,'search']);

    Route::group(['prefix' => 'user'],function (){
        Route::get('/transactions','TransactionController@getAll');
        Route::post('/wallet/buy','TransactionController@buywallet');

    });
    Route::group(['prefix' => 'student'],function (){

        Route::get('/{id}','StudentController@index');
        Route::get('/getAll/{page}','StudentController@getAll');

        Route::get("/{student_id}/checkpaid","TransactionController@checkPaid");
        Route::get("/{student_id}/requestAccept","StudentController@requestAccept");
        
        Route::post("/{student_id}/request/{counselor_id}",[RequestController::class,"store"]);
        Route::get("/{student_id}/analysises","ExamController@getAnalysises");
        Route::post('/analysises/add',"ExamController@addAnalysis");

        Route::get("/{student_id}/exams","ExamController@getAll");
        
        Route::get('/daily/{counselor_id}/getAll','DailyController@getAll');
        Route::get('/daily/{counselor_id}/time/{time}','DailyController@getByTime');
        
        Route::get('/studyplans/{student_id}/{start_week}','StudyController@index');
        Route::post('/studyplans/new','StudyController@store');

        Route::get('/schedule/{student_id}','ScheduleController@index');
        Route::post('/schedule/new','ScheduleController@store');

        Route::get('/plan/requests','Plan\RequestController@getByStudent');
    });

    Route::group(['prefix' => 'counselor'],function() {

        Route::post('/search',"Counselor\CounselorController@search");
        Route::get('/{counselor_id}',"Counselor\CounselorController@index");
        Route::get('/{counselor_id}/students',"StudentController@getByCounselor");
        Route::post('/counselor/{counselor_id}/accept',"Counselor\CounselorController@accept");
        
        Route::get('/{counselor_id}/students',"StudentController@getByCounselor");
        Route::get('{counselor_id}/dailies/',"DailyController@getAll");
        Route::post('/dailies/newMessage',"DailyController@addMessage");
        Route::post('/dailies/newPicture',"DailyController@addPicture");

        Route::get('/analysises/{student_id}',"StudyController@getAnalysises");

        Route::get('/compare2weeks/{counselor_id}',"StudyController@compareweeks");
        Route::post('/compareperiods',"StudyController@comparePeriods");


        Route::get("/{counselor_id}/comments",[CommentController::class,'getAll']);
        Route::post("/comments/add",[CommentController::class,'store']);
    });

});

Route::middleware('auth:api')->get('/user', function (Request $request) {

});

    Route::post('/mobile', 'ApiController@mobile');
    Route::post('/ok_code', 'ApiController@ok_code');
    Route::post('/get_home', 'ApiController@get_home');
    Route::post('/edu_plan', 'ApiController@edu_plan');
    Route::post('/send_edu', 'ApiController@send_edu');
    Route::post('/get_edu', 'ApiController@get_edu');
    Route::post('/get_planing', 'ApiController@get_planing');
    Route::post('/get_plan_stu', 'ApiController@get_plan_stu');
    Route::post('/check_pass', 'ApiController@check_pass');
    Route::get('/test', 'ApiController@test');
    Route::post('/all_week', 'ApiController@all_week');
    Route::post('/get_day_week', 'ApiController@get_day_week');
    Route::post('/get_day_week_mosh', 'ApiController@get_day_week_mosh');
    Route::post('/get_status', 'ApiController@get_status');
    Route::post('/send_plan_stu', 'ApiController@send_plan_stu');
    Route::post('/get_profile', 'ApiController@get_profile');
    Route::post('/show_planing', 'ApiController@show_planing');
    Route::post('/report_time_study', 'ApiController@report_time_study');
    Route::post('/report_time_study_mosh', 'ApiController@report_time_study_mosh');
    Route::post('/all_day_between', 'ApiController@all_day_between');
    Route::post('/all_day_between_mosh', 'ApiController@all_day_between_mosh');
    Route::post('/show_price', 'ApiController@show_price');
    Route::post('/get_chat', 'ApiController@get_chat');
    Route::post('/send_chat', 'ApiController@send_chat');
    Route::post('/transaction', 'ApiController@transaction');
    Route::get('/pay/{token}/{price}', 'ApiController@pay');
    // Route::get('/pay/{token}/{price}','AdminController@pay');
    Route::get('/buyback','ApiController@buyback');
    Route::get('/backapp','ApiController@backapp');
    Route::post('/get_plannig_list','ApiController@get_plannig_list');
    Route::post('/forgetPassword','ApiController@forgetPassword');
    Route::post('/checkDisposablePassword','ApiController@checkDisposablePassword');
    Route::post('/chengePassword','ApiController@chengePassword');
    // -------------------------------------- moshaver ----------------
    Route::post('/get_stu_mosh','ApiController@get_stu_mosh');
    Route::post('/show_all_message','ApiController@show_all_message');
    Route::post('/show_pv','ApiController@show_pv');
    Route::post('/send_pv','ApiController@send_pv');
    Route::post('/request_planning','ApiController@request_planning');
    Route::post('/reject_request','ApiController@reject_request');
    Route::post('/accept_request','ApiController@accept_request');
    Route::post('/get_data_planing','ApiController@get_data_planing');

    Route::post('/create_plan','ApiController@create_plan');
    
    Route::post('/student_mosh','ApiController@student_mosh');
    Route::post('/add_groups','ApiController@add_groups');
    Route::post('/show_groups','ApiController@show_groups');
    Route::post('/stu_group','ApiController@stu_group');
    Route::post('/del_group','ApiController@del_group');
    Route::post('/edit_group','ApiController@edit_group');
    Route::post('/edit_stu_group','ApiController@edit_stu_group');
    Route::get('/VersionStu','ApiController@VersionStu');
    Route::get('/VersionMOsh','ApiController@VersionMOsh');
    Route::post('/sendPushNotification','ApiController@sendPushNotification');
    Route::post('/spn','ApiController@spn');
    Route::post('/GetNumChatStu','ApiController@GetNumChatStu');
    Route::post('/GetNumChatMosh','ApiController@GetNumChatMosh');
    Route::post('/detail_report','ApiController@detail_report')->middleware(CheckUser::class);
    Route::get('/chart_report/{stu_id}/{week_id}','ApiController@chart_report');
    Route::post('/detail_report_mosh','ApiController@detail_report_mosh');
    // ----------MoshController
    Route::post('/get_ms_mosh','MoshController@get_ms_mosh');
    Route::post('/get_automati_message','MoshController@get_automati_message');
    Route::post('/send_automati_message','MoshController@send_automati_message');
    Route::post('/switch_auto','MoshController@switch_auto');
    Route::post('/mobile_mosh','MoshController@mobile_mosh');
    Route::post('/ok_code_mosh','MoshController@ok_code_mosh');
    Route::post('/register_mosh','MoshController@register_mosh');
    Route::post('/check_pass_mosh','MoshController@check_pass_mosh');
    Route::post('/all_users_mosh','MoshController@all_users_mosh');
    Route::post('/ms_edit','MoshController@ms_edit');
    Route::post('/upload_image_slider','MoshController@UploadImageSlider');
    Route::post('/RemoveImageSlider','MoshController@RemoveImageSlider');
    Route::post('/moshTransaction','MoshController@moshTransaction');
    Route::post('/getlesson','MoshController@getlesson');
    // ----------CodeController
    Route::get('/payCode/{mobile}/{PriceSymbol}','CodeController@payCode');
    Route::get('/payback','CodeController@payback');
    Route::get('/paybit/{mobile}/{PriceSymbol}','CodeController@payCode');
    // Route::get('/paybit/{mobile}/{PriceSymbol}','AdminController@paybit');
    Route::get('/backbit','CodeController@payback');
    // ----------FirebaseController
    Route::post('/SetTokenFirebaseStu','FirebaseController@SetTokenFirebaseStu');
    Route::post('/SetTokenFirebaseMosh','FirebaseController@SetTokenFirebaseMosh');
    // ----------ChatController
    Route::post('/GroupChat','ChatController@GroupChat');
    Route::post('/deleteChat','ChatController@deleteChat');

    // test controller
    Route::middleware([CheckUser::class])->group(function(){
        Route::post('/test/list','TestController@list');
        Route::post('/test/get','TestController@get');
        Route::post('/test/send','TestController@send');
        
    });
    Route::post('/test/history','TestController@history');

    Route::get('/test/{testKey}','TestController@testView');
    Route::get('/test_api/{testKey}','TestController@testApi');

    // reportApiController
    Route::post('/report2weekly','reportApiController@report2weekly');
    Route::post('/excelReport2weekly','reportApiController@excelReport2weekly');
    Route::post('/compare_students','reportApiController@compare_students');

