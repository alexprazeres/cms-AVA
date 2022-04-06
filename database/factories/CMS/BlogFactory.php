<?php

namespace Database\Factories\CMS;

use App\Models\CMS\Blog;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class BlogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Blog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => 1,
            'category_id' => rand(1,2),
            'title' => $this->faker->jobTitle,
            'description' => $this->faker->sentence,
            'text'          => $this->faker->text(500),
            'image_preview' =>$this->faker->imageUrl(),
            'created_at' => $this->faker->time(),
        ];
    }
}
