<?php

namespace App\Http\Controllers\Admin\CMS;

use App\Actions\CMS\Blog\FuncionariosQueryAction;
use Illuminate\Http\Request;
use App\Http\Controllers\AdminCMSAdvancedController;
use App\Http\Requests\Admin\CMS\Blog\FuncionarioIndexRequest;
use App\Interfaces\AppInterface;
use App\Models\CMS\Funcionario;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class FuncionariosController extends AdminCMSAdvancedController
{
    //
    public function __construct()
    {
        parent::__construct();
        $this->addMetaTitleSection('Funcionários');
    }

    public function index(FuncionarioIndexRequest $request) : Response
    {
        $search_options = $request->validated();

        $this->shareMeta();
        return Inertia::render('admin/cms/funcionario/Index', [
            'searchOptions' => $search_options,
            'funcionarios' => function () use ($search_options) {
                return app(FuncionariosQueryAction::class)->handle($search_options)
                    ->paginate(AppInterface::getSearchPaginationParam($search_options));
            }
        ]);
    }

    public function create() : Response
    {
        $this->addMetaTitleSection('Cadastrar')->shareMeta();
        return Inertia::render('admin/cms/funcionario/Create');
    }

    public function store(Request $request) : RedirectResponse
    {
        $request->validate([
                'title' => 'required',
                'description' => 'required',
                'name' => 'required'
        ]);

        $upload = $request->image->store('public/funcionarios');

        $funcionario = new funcionario();
        $funcionario->title = $request->title;
        $funcionario->description = $request->description;
        $funcionario->name = $request->name;
        $funcionario->image = $upload;
        $funcionario->save();

        return Redirect::to(route('admin.cms.funcionarios.edit', $funcionario->id))
            ->with('success', 'Funcionário cadastrado');
    }

    public function update(Request $request, Funcionario $funcionario) : RedirectResponse
    {
        unset($request['_method']);
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'name' => 'required'
        ]);

        if ($request->hasFile('image')){
            $imagePreview = $request->image->store('public/funcionarios');
            $funcionario->image = $imagePreview;
        }

        $funcionario->update($request->all());

        return Redirect::to(route('admin.cms.funcionarios.edit', $funcionario))
            ->with('success', 'Funcionário atualizado');
    }

    public function destroy(Request $request, Funcionario $funcionario) : RedirectResponse
    {
        $funcionario->delete();

        return Redirect::back(303)->with(
            'success',
            'Funcionário excluído.'
        );
    }

    public function edit(Funcionario $funcionario) : Response
    {
        $this->addMetaTitleSection('Editar - ' . $funcionario->name)->shareMeta();

        $contents = Storage::url($funcionario->image);
        $funcionario->image = $contents;

        return Inertia::render('admin/cms/funcionario/Edit', [
            'funcionario' => $funcionario
        ]);
    }
}
