<?php

namespace App\Http\Controllers\Api\CMS;

use App\Actions\CMS\Blog\BlogQueryAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CMS\Blog\BlogIndexRequest;
use App\Interfaces\AppInterface;
use App\Models\CMS\Blog;
use App\Models\CMS\Category;
use App\Models\CMS\Funcionario;
use App\Models\CMS\Testimonial;
use App\Models\CRM\Contact;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class ApiController extends Controller
{
    public function index(BlogIndexRequest $request)
    {
        $search_options = $request->validated();
        $blogs = app(BlogQueryAction::class)->handle($search_options)
        ->paginate(AppInterface::getSearchPaginationParam($search_options));

        $blogs->each(function (&$item) {
           $item = $this->rollBody($item);
        });
        $last = Blog::orderBy('id','asc')->first();
        $data = [
            'searchOptions' => $search_options,
            'last'  => $last == null?[]: $this->rollBody($last),
            'blogs' => $blogs,
            'categories' => Category::where('title','<>','')
                    ->orderBy('title', 'asc')
                    ->get()

        ];

        return new JsonResponse($data);
    }

    public function show($id)
    {
        $blog = Blog::find($id);
        return new JsonResponse($this->rollBody($blog));
    }

    public function recentBlogs(Request $request)
    {
        $blogs =  Blog::orderBy('id', 'DESC')->limit(3)->get();
        foreach($blogs as &$blog){
            $blog = $this->rollBody($blog);
        }

        return new JsonResponse($blogs);
    }

    public function rollBody(Blog $blog)
    {

        \Carbon\Carbon::setLocale('pt_BR');
        $category = Category::find($blog->category_id);
        $user     = User::find($blog->user_id);
        $blog['category'] = [
            "name"=> $category->title,
            "href"=> "/blogs?category_id={$category->id}"
        ];
        $blog['author'] = [
            "name" => $user->name,
            "imageUrl"=> config("app.asset_url").Storage::url('logo.jpg')
        ];
        $blog['href'] = "/blog/{$blog->id}";
        $blog["readingLength"] = "3 min";
        $blog['preview'] = $blog['description'];
        $blog['imageUrl'] = sprintf("%s%s",config("app.asset_url"), Storage::url($blog['image_preview']));
        $blog['date']       =   Carbon::parse($blog->created_at)->locale('pt-BR')->translatedFormat('d M, Y');
        $blog['datetime']       = $blog['created_at'];

        return $blog;
    }

    public function contato(Request $request)
    {
        $data = $request->all();

        $contato = new Contact();
        $contato->first_name = $data['nome'];
        $contato->email = $data['email'];
        $contato->last_name = $data['estado'];
        $contato->telephone = $data['phone'];
        $contato->message = $data['mensagem'];

        $contato->save();

        return new JsonResponse(['error'=>0]);
    }

    public function funcionarios(Request $request)
    {
        $data = Funcionario::orderBy('name','ASC')->get();
        foreach($data as &$funcionario){
            $funcionario['name'] = $funcionario['name'];
            $funcionario['role'] = $funcionario['title'];
            $funcionario['image'] = sprintf("%s%s",config("app.asset_url"), Storage::url($funcionario['image']));
            $funcionario['bio']   = $funcionario['description'];
        }

        return new JsonResponse($data);
    }

    public function depoimentos(Request $request)
    {
        $data = Testimonial::orderBy('priority','DESC')->orderBy('id','DESC')->get();
        foreach($data as &$funcionario){

            unset($funcionario['id']);
        }

        return new JsonResponse($data);
    }
}
