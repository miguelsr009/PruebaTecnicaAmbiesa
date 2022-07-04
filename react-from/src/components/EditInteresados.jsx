import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/interesado/'

const EditInteresados = () => {
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
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            identificacion:identificacion, 
            nombre:nombre, apellido:apellido, 
            celular:celular, telefono:telefono, 
            correo:correo,
            estado_civil:estado_civil,
            genero:genero, 
            direccion:direccion, 
            ubicacion:ubicacion })
        navigate('/')
    }
    
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setIdentificacion(response.data.identificacion )
            setNombre(response.data.nombre)
            setApellido(response.data.apellido)
            setCelular(response.data.celular )
            setTelefono(response.data.telefono)
            setCorreo(response.data.correo)
            setEstadoCivil(response.data.estado_civil )
            setGenero(response.data.genero)
            setDireccion(response.data.direccion)
            setUbicacion(response.data.ubicacion)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <h3 className='encabezadoCreate'>Editar</h3>
        <hr />

    <main className='contenedor seccion'>
        <form className="formulario" onSubmit={update} >
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

            <button type='submit' className='btnNuevo' >Editar</button>
       </form>
    </main>


    </div>

    )
}

export default EditInteresados

