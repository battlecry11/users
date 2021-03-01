<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'CorpUser@gmail.com',
            'password' => bcrypt('user555'),
            'is_admin'=>'1',
            'api_token' => Str::uuid(),
        ]);
    }
}
