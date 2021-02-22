<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator=validator($request->all(),[
            'name'=> 'required',
            'email'=> 'required|email|unique:users',
            'password'=>'required|min:6',
        ]);
        if($validator->fails()) return $validator->errors()->toJson();
        $data=$validator->validated();
        $data['password']=bcrypt($data['password']);
        $data['api_token']=\Str::uuid();
        $user=User::create($data);
        return ['status'=>'success','api_token'=>$user->api_token];
    }
   
    
   

    
}
