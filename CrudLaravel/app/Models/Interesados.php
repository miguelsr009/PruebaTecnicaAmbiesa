<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interesados extends Model
{
    use HasFactory;
    protected $filleable = ['identificacion','nombre','apellido','celular','telefono','correo','estado_civil','genero','direccion','ubicacion'];
}
