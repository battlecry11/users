<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AdminController;

use App\http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\ChangeNewsController;


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
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class, 'login']);
Route::get('/admin/users',[AdminController::class,'getUsers']);
Route::delete('/admin/users/delete/{user}',[AdminController::class,'destroy']);
Route::get('/admin/users/edit/{user}',[AdminController::class,'edit']);
Route::put('/admin/users/update/{user}',[AdminController::class,'update']);
Route::post('/admin/addNews',[NewsController::class,'storeNews']);
Route::get('/admin/news',[ChangeNewsController::class,'getNews']);
Route::get('/admin/news/edit/{news}',[ChangeNewsController::class,'edit']);
Route::delete('/admin/news/delete/{news}',[ChangeNewsController::class,'destroy']);

 