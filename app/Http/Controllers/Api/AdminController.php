<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function getUsers(){
    $users = User::all();
    return ['status' => "success",
    'users' => $users];

    }
     public function destroy($id){
         $user=User::find($id);
         $user->delete();
         return response()->json('user deleted successfully');
     }
     public function update($id){
        $user=User::find($id);
      
        
}}