<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('interesados', function (Blueprint $table) {
            $table->id();
            $table->string('identificacion');
            $table->string('nombre');
            $table->string('apellido');
            $table->char('celular', 10);
            $table->char('telefono', 7);
            $table->string('correo');
            $table->string('estado_civil');
            $table->char('genero', 10 );
            $table->string('direccion');
            $table->string('ubicacion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('interesados');
    }
};
