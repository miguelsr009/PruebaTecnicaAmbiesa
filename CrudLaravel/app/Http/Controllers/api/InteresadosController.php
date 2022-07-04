<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Interesados;
use Illuminate\Http\Request;

class InteresadosController extends Controller
{

    public function index()
    {
        $interesados = Interesados::all();

        return $interesados;
    }

    public function store(Request $request)
    {
        $interesado = new Interesados();
        $interesado->identificacion = $request->identificacion;
        $interesado->nombre = $request->nombre;
        $interesado->apellido = $request->apellido;
        $interesado->celular = $request->celular;
        $interesado->telefono = $request->telefono;
        $interesado->correo = $request->correo;
        $interesado->estado_civil = $request->estado_civil;
        $interesado->genero = $request->genero;
        $interesado->direccion = $request->direccion;
        $interesado->ubicacion = $request->ubicacion;

        $interesado->save();
        
    }


    public function show($id)
    {
        $interesado = Interesados::find($id);
        
        return $interesado;
    }

    public function update(Request $request, $id)
    {
        $interesado = Interesados::findOrFail($request->id);
        $interesado->identificacion = $request->identificacion;
        $interesado->nombre = $request->nombre;
        $interesado->apellido = $request->apellido;
        $interesado->celular = $request->celular;
        $interesado->telefono = $request->telefono;
        $interesado->correo = $request->correo;
        $interesado->estado_civil = $request->estado_civil;
        $interesado->genero = $request->genero;
        $interesado->direccion = $request->direccion;
        $interesado->ubicacion = $request->ubicacion;

        $interesado->save();
        return $interesado;
    }


    public function destroy($id)
    {

        $interesado = Interesados::destroy($id);

        return $interesado;
        
    }
}
