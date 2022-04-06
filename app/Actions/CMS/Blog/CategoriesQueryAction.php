<?php

namespace App\Actions\CMS\Blog;

use App\Actions\AbstractQueryAction;
use App\Models\CMS\Category;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class CategoriesQueryAction extends AbstractQueryAction
{
    protected array $searchable_fields_likes = [
        'title'         => 'title'
    ];

    protected string $order_by = 'title';


    protected function addOrderOptions()
    {
        $order_by = Arr::get($this->search_options, 'order_by', $this->order_by);
        $order_direction = Arr::get($this->search_options, 'order_direction', $this->order_direction);

        if ($order_by === 'title') {
            $this->query->orderBy('title', $order_direction);
        } else {
            $this->query->orderBy($order_by, $order_direction);
        }
    }

    protected function getQueryBuilder(): Builder
    {
        return Category::query();
    }
}
