<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/login',[AuthController::class, 'post_login'])->name('dealer.login');
Route::get('/{any?}', function () {
    return view('app');
});


