import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



function EdictarCliente() {

  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const url = `http://localhost:3000/clientes/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado)

      } catch (error) {
        console.log(error)
      }
   
      setCargando(!cargando)
   
    }
    obtenerClientesApi()
  }, [])
  return (
    
    <>
    <h1 className='font-black text-4xl text-blue-900'>Edicta CLiente</h1>
    <p className='mt-3'>Utiliza este Formulario para edictar datos de un cliente</p>

 {cliente?.nombre ? (
  <Formulario
      cliente={cliente}
      cargando={cargando}
    />
 ):<p>Cliente ID no valido</p>}
  </>
  )
}

export default EdictarCliente
