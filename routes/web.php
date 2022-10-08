<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use App\Http\Middleware\CheckUser;
use App\Http\Middleware\Admin;



Route::group(['prefix' => 'admin'], function () {

	Route::view('/', 'login');
	Route::view('/dashboard', 'admin.dashbord');
	Route::view('/stu', 'admin.stu');
	Route::view('/create-stu', 'admin.create_stu');
	Route::view('/mosh', 'admin.mosh');
	Route::view('/lesson', 'admin.lesson');
	Route::view('/plan', 'admin.plan');
	Route::view('/slider', 'admin.slider');
	Route::view('/transactions','admin.transactions');

	Route::post('/login', 'AdminController@login_admin');
	Route::get('/getuser', 'AdminController@getuser');
	Route::get('/exit_admin', 'AdminController@exit_admin');
	Route::post('/formSubmit', 'AdminController@formSubmit');
	Route::post('/formimgplan', 'AdminController@formimgplan');
	Route::get('/get_imag_slide', 'AdminController@get_imag_slide');
	Route::post('slider_img', 'AdminController@slider_img');
	Route::post('/add_stu', 'AdminController@add_stu');
	Route::post('/delete_stu', 'AdminController@delete_stu');
	Route::post('/get_stu', 'AdminController@get_stu');
	Route::post('/search_stu', 'AdminController@search_stu');
	Route::post('/add_lesson', 'AdminController@add_lesson');
	Route::post('/get_lesson', 'AdminController@get_lesson');
	Route::get('/get_mosh', 'AdminController@get_mosh');
	Route::post('/search_mosh', 'AdminController@search_mosh');
	Route::post('/unactive_mosh', 'AdminController@unactive_mosh');
	Route::get('/get_message', 'AdminController@get_message');
	Route::post('/edit_message', 'AdminController@edit_message');
	Route::post('/add_plan', 'AdminController@add_plan');
	Route::get('/get_plan', 'AdminController@get_plan');
	Route::post('/delete_plan', 'AdminController@delete_plan');
	Route::post('/get_paln_stu', 'AdminController@get_paln_stu');
	Route::get('/weeks', 'AdminController@weeks');
	Route::post('/add_week', 'AdminController@add_week');

});

Route::view("/{path?}/{path2?}/{path3?}",'user');

Route::middleware([Admin::class])->group(function(){
        
    // transactions
    Route::get('/transactions', 'admin\TransactionController@transactions');

});



Route::middleware([CheckUser::class])->group(function(){
    
});
