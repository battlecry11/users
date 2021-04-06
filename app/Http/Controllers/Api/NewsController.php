<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsRequest;
use Illuminate\Http\Request;
use App\Models\MulFile;
use App\Models\News;


class NewsController extends Controller
{
    public function storeNews(NewsRequest $request)
    {
        $data = $request->validated();

        $data['image'] = uploadFile('/upload/news', $request->file('image'));
        $news = News::create($data);

        if (isset($data['images'])) {
            foreach ($data['images'] as $image) {
                $news->images()->create([
                    'images' => uploadFile("/upload/news/{$news->id}", $image)
                ]);
            }
        }
        return ['status' => 'success'];
    }
}
