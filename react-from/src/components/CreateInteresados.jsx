import React, { useState } from 'react'
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

const ruta = 'http://localhost:8000/api/interesado';
const CreateInteresado = () => {
    const [identificacion , setIdentificacion] = useState('')
    const [nombre , setNombre] = useState('')
    const [apellido , setApellido] = useState('')
    const [celular , setCelular] = useState('')
    const [telefono , setTelefono] = useState('')
    const [correo , setCorreo] = useState('')
    const [estado_civil , setEstadoCivil] = useState('')
    const [genero , setGenero] = useState('')
    const [direccion , setDireccion] = useState('')
    const [ubicacion , setUbicacion] = useState('')

    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
                identificacion:identificacion, 
                nombre:nombre, apellido:apellido, 
                celular:celular, telefono:telefono, 
                correo:correo,
                estado_civil:estado_civil,
                genero:genero, 
                direccion:direccion, 
                ubicacion:ubicacion })

        navigate("/")
    }


    return (
        <div>
            <h3 className='encabezadoCreate'>Create Interesado</h3>
            <hr />

            <main className='contenedor seccion'>
        <form className="formulario" onSubmit={store} >
        <fieldset>
            <legend className='legendTitulo'>Información Personal</legend>

            <label className='tituloC' for="identificacion">identificacion</label>
            <input className='disenioForm' type="text" placeholder="Tu identificacion" id="identificacion"  value={identificacion} onChange={ (e) => setIdentificacion(e.target.value) } />

            <label className='tituloC' for="nombre">Nombre</label>
            <input className='disenioForm' type="text" placeholder="Tu Nombre" id="nombre" value={nombre}  onChange={ (e) => setNombre(e.target.value)} />

            <label className='tituloC' for="apellido">Apellido</label>
            <input className='disenioForm' type="text" placeholder="Tu Apellido" id="apellido" value={apellido}  onChange={ (e) => setApellido(e.target.value)} />

            <label className='tituloC' for="telefono">Teléfono</label>
            <input className='disenioForm' type="tel" placeholder="Tu Teléfono" id="telefono" value={telefono}  onChange={ (e) => setTelefono(e.target.value)} />

            <label className='tituloC' for="celular">celular</label>
            <input className='disenioForm' type="tel" placeholder="Tu celular" id="celular" value={celular}  onChange={ (e) => setCelular(e.target.value)}  />

            <label className='tituloC' for="Correo">Correo:</label>
            <input className='disenioForm' type="text" placeholder="Tu Correo" id="Correo" value={correo}  onChange={ (e) => setCorreo(e.target.value)}  />
        </fieldset>

        <fieldset>
            <legend className='legendTitulo'>Información General</legend>

            <label className='tituloC' for="direccion">Direccion:</label>
            <input className='disenioForm' type="text" placeholder="Tu direccion" id="direccion" value={direccion} onChange={ (e) => setDireccion(e.target.value)}  />

            <label className='tituloC' for="ubicacion">Ubicacion:</label>
            <input className='disenioForm' type="text" placeholder="Tu ubicacion" id="ubicacion" value={ubicacion} onChange={ (e) => setUbicacion(e.target.value)}  />

            <label className='tituloC' for="opciones">Genero:</label>
            <input className='disenioForm' type="text" placeholder="Estado Civil" id="estado" value={genero} onChange={ (e) => setGenero(e.target.value)}  />

            <label className='tituloC' for="estado">Estado civil</label>
            <input className='disenioForm' type="text" placeholder="Estado Civil" id="estado" value={estado_civil} onChange={ (e) => setEstadoCivil(e.target.value)}  />

        </fieldset>

            <button type='submit' className='btnNuevo' >Crear</button>
       </form>
    </main>

    </div>
    )
}
export default CreateInteresado;
