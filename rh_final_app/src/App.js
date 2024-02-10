import React from 'react';
import ListadoEmpleado from "./empleados/listadoEmpleado";
import AgregarEmpleado from "./empleados/agregarEmpleado";
import Navegacion from "./plantilla/navegacion";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditarEmpleado from './empleados/EditarEmpleado';
function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route exact path='/' element={<ListadoEmpleado />} />
        <Route exact path='/Agregar' element={<AgregarEmpleado />} />
        <Route exact path='/editar/:id' element={<EditarEmpleado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
