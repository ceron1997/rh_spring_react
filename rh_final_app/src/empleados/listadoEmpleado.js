
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'



export default function ListadoEmpleado() {
    const url = "http://localhost:8080/rh/empleados";
    const url_eliminar = "http://localhost:8080/rh/empleado/";
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, [])

    const cargarEmpleados = async () => {

        const resultado = await fetch(url, { method: "GET" });

        setEmpleados(await resultado.json())
    }
    const eliminarEmpleado = async (id) => {
    
        const confirmacion = await Swal.fire({
            title: "Desea eliminar el empleado",
            icon: "question",
            confirmButtonText: "Si",
            cancelButtonText: "Cancelarا",
            showCancelButton: true,
            showCloseButton: true
        });

        if(confirmacion.isConfirmed){
            await fetch(url_eliminar+id,{method:"DELETE"})
          cargarEmpleados();
           Swal.fire({
            title: "Registro Eliminado?",
            icon: "success",
            confirmButtonText:'ok',
          })
        }
    }
    return (
        <div>
            <div className='container text-center'>
                <h1>Gestion de Recursos Humanos  </h1></div>

            <div className="container">
                <table class="table table-middle table-hover table-striped">
                    <thead className=''>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">EMPLEADO</th>
                            <th scope="col">DEPARTAMENTO</th>
                            <th scope="col">SUELDO</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empleados.map((empleado, indice) => (
                                <tr key={indice}>
                                    <th scope="row">{empleado.idEmpleado}</th>
                                    <td>{empleado.nombre}</td>
                                    <td>{empleado.departamento}</td>
                                    <td>{empleado.sueldo}</td>
                                    <td className="text-center">
                                        <div>
                                            <Link to={`/editar/${empleado.idEmpleado}`}
                                                className="btn btn-primary btn-sm me-3"> Editar </Link>
                                            <button onClick={() => eliminarEmpleado(empleado.idEmpleado)} className="btn btn-danger btn-sm me-3">Eliminar</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                            )


                        }



                    </tbody>
                </table>
            </div>
        </div>




    );
}
