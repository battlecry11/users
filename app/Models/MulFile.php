<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MulFile extends Model
{
    use HasFactory;
    protected $fillable = ['news_id','images'];
    protected $table='files';
}
