<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

function decodedRequest(array $data)
{
    array_walk($data, function (&$value, $key) {
        if ($value === '""') $value = null;
        if ((strpos($key, 'image') === false && !is_array($value)) || strpos($key,'decode')!==false) {
            if(is_array($value)) {
                array_walk($value, function(&$value2) {
                    if(is_array($value2)) {
                        array_walk($value2,function (&$value3, $key2){
                            if(strpos($key2, 'file') === false && strpos($key2, 'file') === false) {
                                $value3=json_decode($value3,true);
                            }
                        });
                    } else {
                        $value2=json_decode($value2,true);

                    }
                });
            } else {
                $value = json_decode($value, true);
            }
        }
    });

    return $data;
}

function uploadFile(string $path,$file) : string
{
    $file_name=md5(uniqid(rand(), true)).'.'.$file->getClientOriginalExtension();
    $file->move(public_path($path), $file_name);
    return "$path/" . $file_name;
}

function deleteFile(?string $path = null)
{
    if( $path && file_exists(public_path($path))) {
        @unlink(public_path($path));
    }
}