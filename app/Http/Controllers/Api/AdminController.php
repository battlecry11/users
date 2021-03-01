<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class AdminController extends Controller
{
    public function getUsers(){
    $users = User::all();
    

return ['status' => "success",
'users' => $users];

    }
}