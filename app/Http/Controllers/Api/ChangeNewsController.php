<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News;

class ChangeNewsController extends Controller
{
    public function getNews()
    {
        $news = News::all();
        return [
            'status' => "success",
            'news' => $news
        ];
    }
    public function destroy($id)
    {
        $news = News::find($id);
        $news->delete();
        return response()->json('News deleted successfully');
    }

    public function edit(News $news)
    {
        return response(["status" => "success", "user" => $news]);
    }
    
   
}
