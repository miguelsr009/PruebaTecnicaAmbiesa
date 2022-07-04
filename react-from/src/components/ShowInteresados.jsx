import { useState, useEffect } from "react";
import  axios  from 'axios';
import {Link} from 'react-router-dom';


const ShowInteresados = () => {

    const [ interesados, setInteresados ] = useState([]);
    const ruta = 'http://localhost:8000/api';

    useEffect( () => {
        getAllInteresados();
    });

    const getAllInteresados = async () => {
        const respuesta = await axios.get(`${ruta}/interesados`);
        setInteresados(respuesta.data);
    }

    const deteInteresados = async (id) => {
        await axios.delete(`${ruta}/interesado/${id}`);
        getAllInteresados();
    }


    return (
        <div>

            <div className="d-grid gap-2">
                <Link to="/create" className="btn btn-success btn-lg mt-2 text-white" >&#43; Nuevo Interesado</Link>
            </div>

            <table className="table table-bordered  separar ">
                <thead className="bg-primary" >
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Identificacion</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>

                    { interesados.map( (interesado) => 

                        <tr key={interesado.id} >
                            <td> {interesado.nombre} </td>
                            <td> {interesado.apellido} </td>
                            <td> {interesado.identificacion} </td>
                            

                            <td> 
                                <Link to={`/edit/${interesado.id}`} className="btn btn-warning" >Editar</Link>
                                <button onClick={ () => deteInteresados(interesado.id) } className="btn btn-danger" >Eliminar</button>
                            </td>
                        </tr>

                      )}
                  
                </tbody>
            </table>

        
        </div>
    )
}

export default ShowInteresados;