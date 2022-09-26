import React, { useEffect, useState } from 'react'
import Cliente from '../components/Cliente'

import { useRef } from "react";

import User from '../components/User';


const Inicio = () => {
      // const [users,setUsers] =useState([])
      const [search, setSearch] =useState ("")
      const clickPoint = useRef();
      const handleFocus = () => {
          clickPoint.current.style.display = "none";
      };
  
      const handleBlur = () => {
          clickPoint.current.style.display = "block";
      };
  

  const [clientes, setClientes] = useState([])

  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const url = 'http://localhost:3000/clientes'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setClientes(resultado)
      } catch (error) {
        console.log(error)
      }
    }

    obtenerClientesApi()
  }, [])

  const handleEliminar = async id => {
    const confirmar = confirm('Deseas eliminar este cliente?')

    if(confirmar ){
      try {
        const url = `http://localhost:3000/clientes/${id}`
        const respuesta = await fetch(url, {
          method: 'DELETE'
        })

        await respuesta.json()

        const arrayClientes = clientes.filter(cliente => cliente.id !== id)
        setClientes(arrayClientes)
      } catch (error) {
        console.log(error)
        
      }
    }
  }

   


    //funcion de busqueda
    const searcher = (e) => {
      setSearch(e.target.value)
      console.log(e.target.value)
  }

   //metodo de filtrado
   let results = []
   if(!search)
   {
    results = clientes
   }else{
    results=clientes.filter((resultado)=>
    resultado.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    )
   }

  return (
    <>
    <p>hola amigo</p>
    <User/>
      <h1 className='font-black text-4xl text-blue-900'>Cliente</h1>
      <p className='mt-3'>Administra tu clientes cliente </p>


    
{/* <SearchBar cliente={clientes}/> */}

  <div className="items-center px-4 flex justify-center">
            <div className="relative mr-3">
                <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                    <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                    placeholder="Search "
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value= {search}
                    onChange={searcher}
                />
            </div>
        </div>

      <table className='w-full mt-5 table-auto shadow bg-white'> 
      <thead className='bg-blue-800 text-white'>
      
        <tr>
          <th className='p-2'>Nombre</th>
          <th  className='p-2' >Contacto</th>
          <th  className='p-2'>Empresa</th>
          <th className='p-2'>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {results.map(cliente =>(
          <Cliente
            key={cliente.id}
            cliente={cliente}
            handleEliminar={handleEliminar}
          />

        ))}
      </tbody>
      </table>
    </>
  )
}

export default Inicio

