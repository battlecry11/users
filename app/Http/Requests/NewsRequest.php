<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use App\Models\MulFile;

class NewsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $additional_rules = [];

        if($this->hasFile('image')) $additional_rules['image'] = 'required|image|mimes:jpeg,jpg,png|max:1000';
        $id=$this->segment(5)??0;
        $maxImage=5-MulFile::where("news_id",$id)->count();
        return [
            
            'title' => 'required|string|max:200',
            'description' => 'required',
            'lDescription'=>'required',
            // 'image' => 'required|image|max:1000',
            'images'=>"array|max:{$maxImage}",
            'images.*'=>'required'
        ] + $additional_rules;

    }
    protected function prepareForValidation()
    {
        $this->merge(decodedRequest($this->all()));
    }

    protected function failedValidation(Validator $validator)
    {
        return response()->json($validator->errors())->throwResponse();
    }
}
