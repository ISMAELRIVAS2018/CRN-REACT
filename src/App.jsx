import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'
import NuevoCliente from './paginas/NuevoCliente'
import EditarCLiente from './paginas/EdictarCliente'
import Vercliente from './paginas/Vercliente'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element= {<Layout/>}>
          <Route  index element= {<Inicio/>}/>
          <Route path="nuevo" element= {<NuevoCliente/>}/>
          <Route path="editar/:id" element= {<EditarCLiente/>}/>
          <Route path=":id" element= {<Vercliente/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
