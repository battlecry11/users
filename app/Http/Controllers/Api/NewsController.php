<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News;

class NewsController extends Controller
{
    public function storeNews(Request $request)
    {
        $validator = validator($request->all(), [
            'title' => 'required',
            'description' => 'required',
            
        ]);
        if ($validator->fails()) return $validator->errors()->toJson();
        $data = $validator->validated();
         News::create($data);
        return ['status' => 'success'];
    }
}
