<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function post_login(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password // fixed typo
        ];

        if (Auth::attempt($credentials, true)) {
            $json = [
                'status' => true,
                'message' => 'success'
            ];
        } else {
            $json = [
                'status' => false,
                'message' => 'Does not match credential!'
            ];
        }

        return response()->json($json);
    }
}
