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

#Route::get('/', function () {
#    return view('manager.index');
#});


Route::get('/sample/{id}', function ($id) {
    return 1;
});
Route::get('/sample', function() {
    return 1;
});
Route::get('/{any}', function () {
    return view('manager.index');
})->where('any', '.*');
