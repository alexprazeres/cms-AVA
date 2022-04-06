<?php

namespace App\Http\Controllers\Admin\CMS;

use App\Actions\CMS\Blog\BlogQueryAction;
use Illuminate\Http\Request;
use App\Http\Controllers\AdminCMSAdvancedController;
use App\Http\Requests\Admin\CMS\Blog\BlogIndexRequest;
use App\Interfaces\AppInterface;
use App\Models\CMS\Blog;
use App\Models\CMS\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends AdminCMSAdvancedController
{
    //
    public function __construct()
    {
        parent::__construct();
        $this->addMetaTitleSection('Blogs');
    }

    public function index(BlogIndexRequest $request) : Response
    {
        $search_options = $request->validated();

        $this->shareMeta();
        return Inertia::render('admin/cms/blog/Index', [
            'searchOptions' => $search_options,
            'blogs' => function () use ($search_options) {
                return app(BlogQueryAction::class)->handle($search_options)
                    ->paginate(AppInterface::getSearchPaginationParam($search_options));
            },
            'categories' => function () {
                return Category::where('title','<>','')
                    ->orderBy('title', 'asc')
                    ->get()
                    ->keyBy('id');
            },
        ]);
    }

    public function create() : Response
    {
        $this->addMetaTitleSection('Cadastrar')->shareMeta();
        return Inertia::render('admin/cms/blog/Create', [
            'categories' => function () {
                return Category::where('title','<>','')
                    ->orderBy('title', 'asc')
                    ->get()
                    ->keyBy('id');
            },
        ]);
    }

    public function store(Request $request) : RedirectResponse
    {
        $request->validate([
                'title' => 'required',
                'description' => 'required',
                'text' => 'required',
                'category_id' => 'required'
        ]);

        $upload = $request->image_preview->store('public/blog_previews');

        $blog = new Blog();
        $blog->title = $request->title;
        $blog->description = $request->description;
        $blog->text = $request->text;
        $blog->user_id = Auth::user()->id;
        $blog->category_id = 1;
        $blog->image_preview = $upload;
        $blog->save();

        return Redirect::to(route('admin.cms.blogs.edit', $blog->id))
            ->with('success', 'Publicação criada');
    }

    public function update(Request $request, Blog $blog) : RedirectResponse
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'text' => 'required',
            'category_id' => 'required'
        ]);

        if ($request->hasFile('image_preview')){
            $imagePreview = $request->image_preview->store('public/blog_previews');
            $blog->image_preview = $imagePreview;
        }

        $blog->update($request->all());

        return Redirect::to(route('admin.cms.blogs.edit', $blog))
            ->with('success', 'Publicação atualizada');
    }

    public function destroy(Request $request, Blog $blog) : RedirectResponse
    {
        $blog->delete();

        return Redirect::back(303)->with(
            'success',
            'Publicação excluída.'
        );
    }

    public function edit(Blog $blog) : Response
    {
        $this->addMetaTitleSection('Editar - ' . $blog->title)->shareMeta();

        $contents = Storage::url($blog->image_preview);
        $blog->image_preview = $contents;

        return Inertia::render('admin/cms/blog/Edit', [
            'blog' => $blog,
            'categories' => function () {
                return Category::where('title','<>','')
                    ->orderBy('title', 'asc')
                    ->get()
                    ->keyBy('id');
            },
        ]);
    }
}
