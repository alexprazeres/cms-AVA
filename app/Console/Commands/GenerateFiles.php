<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Str;

class GenerateFiles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:Files';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $destino = $this->ask('Qual destino? Digite "Site" ou "Admin".');
        if ($destino == "Admin"){
            $tipo = $this->ask('Qual o tipo? Digite "CMS" ou "CRM".');
        }
        $nome = $this->ask('Nome? Ex: servicos,funcionarios,usuarios,cadastros...etc');

        $controllerName = Str::ucfirst($nome);
        Artisan::call(sprintf("make:controller %sController --resource", $controllerName));

        return Command::SUCCESS;
    }
}
