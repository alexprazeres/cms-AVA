<?php

namespace App\Http\Requests\Admin\CMS\Blog;

use App\Http\Requests\BaseIndexRequest;

class BlogIndexRequest extends BaseIndexRequest
{
    public function rules() : array
    {
        return array_merge(parent::rules(), [
            'title' => 'nullable|string',
            'description' => 'nullable|string',
            'category_id' => 'nullable|int'
        ]);
    }
}
