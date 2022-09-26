
import Formulario from '../components/Formulario'
import User from '../components/User'

function NuevoCliente() {
  return (
    <>
    <User/>
      <h1 className='font-black text-4xl text-blue-900'>NuevoCliente</h1>
      <p className='mt-3'>Llena los siguientes campos para registrar un cliente </p>
      <Formulario/>
    </>
  )
}

export default NuevoCliente
