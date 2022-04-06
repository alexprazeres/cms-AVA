<?php

namespace App\Http\Controllers\Admin\CMS;

use App\Actions\CMS\Blog\BlogQueryAction;
use App\Actions\CMS\Blog\CategoriesQueryAction;
use Illuminate\Http\Request;
use App\Http\Controllers\AdminCMSAdvancedController;
use App\Http\Requests\Admin\CMS\Blog\BlogIndexRequest;
use App\Interfaces\AppInterface;
use App\Models\CMS\Blog;
use App\Models\CMS\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class CategoriesController extends AdminCMSAdvancedController
{
    //
    public function __construct()
    {
        parent::__construct();
        $this->addMetaTitleSection('Categorias');
    }

    public function index(BlogIndexRequest $request) : Response
    {
        $search_options = $request->validated();

        $this->shareMeta();
        return Inertia::render('admin/cms/categories/Index', [
            'searchOptions' => $search_options,
            'categories' => function () use ($search_options) {
                return app(CategoriesQueryAction::class)->handle($search_options)
                    ->paginate(AppInterface::getSearchPaginationParam($search_options));
            }
        ]);
    }

    public function create() : Response
    {
        $this->addMetaTitleSection('Cadastrar')->shareMeta();
        return Inertia::render('admin/cms/categories/Create');
    }

    public function store(Request $request) : RedirectResponse
    {
        $request->validate([
                'title' => 'required'
        ]);
        $blog = new Category();
        $blog->title = $request->title;
        $blog->save();

        return Redirect::to(route('admin.cms.categories.edit', $blog->id))
            ->with('success', 'Categoria criada');
    }

    public function update(Request $request, Category $categories) : RedirectResponse
    {
        $request->validate([
            'title' => 'required'
        ]);
        $categories->update($request->all());

        return Redirect::to(route('admin.cms.categories.edit', $categories))
            ->with('success', 'Publicação atualizada');
    }

    public function destroy(Request $request, Category $categories) : RedirectResponse
    {
        $categories->delete();

        return Redirect::back(303)->with(
            'success',
            'Categoria excluída.'
        );
    }

    public function edit(Category $category) : Response
    {

        $this->addMetaTitleSection('Editar - ' . $category->title)->shareMeta();
        return Inertia::render('admin/cms/categories/Edit', [
            'category' => $category,
        ]);
    }
}
