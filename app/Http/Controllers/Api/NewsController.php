<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsRequest;
use Illuminate\Http\Request;
use App\Models\News;

class NewsController extends Controller
{
    public function storeNews(NewsRequest $request)
    {
        $data=$request->validated();
        $data['image']=uploadFile('/upload/news',$request->file('image'));

          News::create($data);
         return ['status' => 'success'];
    }
}
