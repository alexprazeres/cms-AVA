<?php

namespace App\Actions\CMS\Blog;

use App\Actions\AbstractQueryAction;
use App\Models\CMS\Testimonial;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class DepoimentoQueryAction extends AbstractQueryAction
{
    protected array $searchable_fields_likes = [
        'name'         => 'name'
    ];

    protected string $order_by = 'name';


    protected function addOrderOptions()
    {
        $order_by = Arr::get($this->search_options, 'order_by', $this->order_by);
        $order_direction = Arr::get($this->search_options, 'order_direction', $this->order_direction);

        if ($order_by === 'name') {
            $this->query->orderBy('name', $order_direction);
        } else {
            $this->query->orderBy($order_by, $order_direction);
        }
    }

    protected function getQueryBuilder(): Builder
    {
        return Testimonial::query();
    }
}
