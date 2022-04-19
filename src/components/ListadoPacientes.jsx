import React from 'react'
import { useEffect } from 'react'
import Paciente from './Paciente'


function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

  useEffect(() => {
    if(pacientes.length > 0){
      console.log("NUEVO PACIENTE")
    }
  }, [pacientes])
  
  

  return (
    <div className="md:w-1/2 lg:w-3/5  ">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          
          <p className=" text-lg mt-5 text-center mb-10">
          Administra tus {''}
          <span className="text-sky-600  font-bold"> Pacientes y Citas</span>
          </p>
          <div className='md:overflow-y-scroll h-screen'>
            {
              pacientes.map( paciente => (
                <Paciente
                  key = {paciente.id}

                  paciente = {paciente}
                  setPaciente = {setPaciente}

                  eliminarPaciente = {eliminarPaciente}
                /> 
              ))
            }
            
          </div>

        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          
          <p className=" text-lg mt-5 text-center mb-10">
          Comienza a {''}
          <span className="text-sky-600  font-bold"> Registrar y aparecerán aquí</span>
          </p>

        </>
      )}
        
        
               

    </div>
  )
}

export default ListadoPacientes