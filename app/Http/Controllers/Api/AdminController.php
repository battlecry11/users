<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function getUsers()
    {
        $users = User::where("is_admin",0)->get();
        return [
            'status' => "success",
            'users' => $users
        ];
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return response()->json('user deleted successfully');
    }

    public function edit(User $user)
    {
        return response(["status" => "success", "user" => $user]);
    }
    
    public function update(Request $request,User $user){
        $validator=validator($request->all(),[
            'name'=> 'required',
            'email'=> "required|email|unique:users,email,$user->id"
        ]);
        if($validator->fails()) return $validator->errors()->toJson();
        $data=$validator->validated();
        $user->update($data);
        return response(["status"=>"success"]);

    }

}
