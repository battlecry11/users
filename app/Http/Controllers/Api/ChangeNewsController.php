<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\News;
use App\Http\Requests\UpdateNewsRequest;
use App\Http\Requests\NewsRequest;
use App\Models\MulFile;

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
    public function destroyImage($id)
    {
        $news = MulFile::find($id);
        deleteFile($news->images);
        $news->delete();
        return response(["status"=>"success"]);
        
    }

    public function destroy($id)
    {
        $news = News::find($id);
        deleteFile($news->image);
        $news->delete();
        return response()->json('News deleted successfully');
    }

    public function edit(News $news)
    {
        $news->load("images");
        return response(["status" => "success", "news" => $news]);
    }
    // public function update(UpdateNewsRequest $request, News $news)
    // {
    //     $data = $request->validated();
    //     $news->update($data);
    //     return response(["status" => "success"]);
    // }
    public function update(NewsRequest $request,News $news){
        
    
        $data=$request->validated();
        if($request->hasFile('image')) {
            $data['image'] = uploadFile('/upload/news',$request->file('image'));
            deleteFile($news->image);
        } 
        if (isset($data['images'])) {
            foreach ($data['images'] as $image) {
                $news->images()->create([
                    'images' => uploadFile("/upload/news/{$news->id}", $image)
                ]);
            }
        }
    

        $news->update($data);
        
        return response(["status"=>"success"]);

    }
}
