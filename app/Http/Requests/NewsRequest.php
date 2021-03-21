<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

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
        return [
            'title' => 'required|string|max:200',
            'description' => 'required',
            'lDescription'=>'required',
            'image' => 'required|image|max:1000',
            //'images'=>'array',
            //'images.*'=>required
        ];
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
