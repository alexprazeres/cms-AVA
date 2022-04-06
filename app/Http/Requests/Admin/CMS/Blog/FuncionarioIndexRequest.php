<?php

namespace App\Http\Requests\Admin\CMS\Blog;

use App\Http\Requests\BaseIndexRequest;

class FuncionarioIndexRequest extends BaseIndexRequest
{
    public function rules() : array
    {
        return array_merge(parent::rules(), [
            'name' => 'nullable|string'
        ]);
    }
}
