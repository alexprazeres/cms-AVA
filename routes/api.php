<?php

use App\Http\Controllers\Api\CMS\ApiBlogController;
use App\Http\Controllers\Api\CMS\ApiController;
use App\Http\Controllers\Api\CMS\PageController;
use App\Http\Controllers\Api\CRM\FormSubmissionController;
use App\Models\CMS\Blog;
use App\Models\CMS\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/form-submission/{form}', [FormSubmissionController::class, 'store'])->name('api.form-submission.store');

Route::get('/page', [PageController::class, 'show'])->name('api.page');

Route::get('/blogs', [ApiController::class, 'index']);
Route::get('/blogs/{id}', [ApiController::class, 'show']);
Route::get('/blogs-recents', [ApiController::class, 'recentBlogs']);
Route::post('/contato', [ApiController::class, 'contato']);
Route::get('/funcionarios', [ApiController::class, 'funcionarios']);
Route::get('/depoimentos', [ApiController::class, 'depoimentos']);

Route::get('/refresh', function () {
    // echo "Rodando migrations";
    // Artisan::call('config:clear');
    // echo "Sucesso!";
});
