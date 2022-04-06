<?php

namespace App\Http\Controllers\Admin\CMS;

use App\Actions\CMS\Blog\DepoimentoQueryAction;
use Illuminate\Http\Request;
use App\Http\Controllers\AdminCMSAdvancedController;
use App\Http\Requests\Admin\CMS\Blog\FuncionarioIndexRequest;
use App\Interfaces\AppInterface;
use App\Models\CMS\Funcionario;
use App\Models\CMS\Testimonial;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class DepoimentosController extends AdminCMSAdvancedController
{
    //
    public function __construct()
    {
        parent::__construct();
        $this->addMetaTitleSection('Depoimentos');
    }

    public function index(FuncionarioIndexRequest $request) : Response
    {
        $search_options = $request->validated();

        $this->shareMeta();
        return Inertia::render('admin/cms/depoimentos/Index', [
            'searchOptions' => $search_options,
            'depoimentos' => function () use ($search_options) {
                return app(DepoimentoQueryAction::class)->handle($search_options)
                    ->paginate(AppInterface::getSearchPaginationParam($search_options));
            }
        ]);
    }

    public function create() : Response
    {
        $this->addMetaTitleSection('Cadastrar')->shareMeta();
        return Inertia::render('admin/cms/depoimentos/Create');
    }

    public function store(Request $request) : RedirectResponse
    {
        $request->validate([
                'message' => 'required',
                'name' => 'required'
        ]);

        $depoimento = new Testimonial();
        $depoimento->name = $request->name;
        $depoimento->message = $request->message;
        $depoimento->priority = $request->priority;
        $depoimento->save();

        return Redirect::to(route('admin.cms.depoimentos.edit', $depoimento->id))
            ->with('success', 'Depoimento cadastrado');
    }

    public function update(Request $request, Testimonial $depoimento) : RedirectResponse
    {
        unset($request['_method']);
        $request->validate([
            'message' => 'required',
            'name' => 'required',
            'priority' => 'required'
        ]);

        $depoimento->update($request->all());

        return Redirect::to(route('admin.cms.depoimentos.edit', $depoimento))
            ->with('success', 'Depoimento atualizado');
    }

    public function destroy(Request $request, Testimonial $depoimento) : RedirectResponse
    {
        $depoimento->delete();

        return Redirect::back(303)->with(
            'success',
            'Depoimento excluído.'
        );
    }

    public function edit(Testimonial $depoimento) : Response
    {
        $this->addMetaTitleSection('Editar - ' . $depoimento->name)->shareMeta();


        return Inertia::render('admin/cms/depoimentos/Edit', [
            'depoimento' => $depoimento
        ]);
    }
}
