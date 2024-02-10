import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AgregarEmpleado() {

    let Navegacion = useNavigate();
    const [empleado, setEmpleado] = useState({
        nombre: "",
        departamento: "",
        sueldo: "",

    })
    const { nombre, departamento, sueldo } = empleado;
    const onImputChange = (e) => {
        //...empleado para expandir 
        setEmpleado({ ...empleado, [e.target.name]: e.target.value })

    }
    const onSubmit = async (e) => {
        e.preventDefault(); 
        const url = "http://localhost:8080/rh/empleados";
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Puedes agregar más encabezados según sea necesario
                },
                body: JSON.stringify(empleado)
            });
    
            if (response.ok) {
                // La solicitud fue exitosa (código de estado en el rango 200-299)
                console.log("Empleado enviado con éxito");
                Navegacion('/');
            } else {
                // La solicitud no fue exitosa
                console.error(`Error al enviar empleado. Código de estado: ${response.status}`);
            }
        } catch (error) {
            console.error("Error al enviar empleado:", error);
        }


    }

    return (
        <div className="container">

            <div className="container text-center" style={{ margin: "30px" }}>
                <h1>Agregar Empleado</h1>
            </div>
            <div className="container">
                <form onSubmit={(e) => onSubmit(e)} >
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" required={true} name='nombre'
                            value={nombre} onChange={(e) => onImputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="departamento" className="form-label">Departamento</label>
                        <input type="text" className="form-control" id="departamento" name='departamento'
                            value={departamento} onChange={(e) => onImputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sueldo" className="form-label">Sueldo</label>
                        <input type="number" step='any' className="form-control" id="sueldo" name='sueldo'
                            value={sueldo} onChange={(e) => onImputChange(e)} />
                    </div>

                    <div className="container text-center">
                        <button type="submit" className="btn btn-primary btn-sm me-3">Agregar Empleado</button>
                        <a href="/" className='btn btn-danger btn-sm '>Volver</a>
                    </div>

                </form>
            </div>

        </div>


    )
}
