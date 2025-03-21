<?php

namespace Database\Seeders;

use App\Models\CMS\Blog;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Blog::factory()->count(50)->create();
    }
}

