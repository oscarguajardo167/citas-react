
import React from 'react'

function Paciente({paciente, setPaciente, eliminarPaciente}) {


    //DESTRUCTURING DEL OBJETO PACIENTE
    const {nombre, propietario, email, fecha, sintomas, id} = paciente;

    // TE PREGUNTA SI QUIERES ELIMINARLO
    const handleEliminar = () => {
      const respuesta = confirm('Estas seguro que deseas eliminar a ese paciente');

      if(respuesta){
        eliminarPaciente(id)
      }
    }
  return (
    <div className="mx-5 mb-10 bg-white shadow-md px-5 py-10 rounded-xl ">
        <p className="font-bold mb-3 uppercase">
        Nombre: 
        <span className="font-normal normal-case"> {nombre} </span>
        </p>

        <p className="font-bold mb-3 uppercase">
        Propietario: 
        <span className="font-normal normal-case"> {propietario}</span>
        </p>

        <p className="font-bold mb-3 uppercase">
        Email: 
        <span className="font-normal normal-case"> {email}</span>
        </p>
        
        <p className="font-bold mb-3 uppercase">
        Fecha alta: 
        <span className="font-normal normal-case"> {fecha}</span>
        </p>

        <p className="font-bold mb-3 uppercase">
        Sintomas: 
        <span className="font-normal normal-case"> {sintomas} </span>
        </p>

        <div className='flex justify-between mt-5'>
          <button
            type="button"
            className="bg-sky-600 w-5/12 p-3 mx-3  text-white uppercase font-bold 
            hover:bg-sky-700 cursor-pointer transition-all rounded-lg"
            onClick={() => setPaciente(paciente)}
          >Editar
          </button>
          <button
            type="button"
            className="bg-red-600 w-5/12 p-3 mx-3 text-white uppercase font-bold 
            hover:bg-red-700 cursor-pointer transition-all rounded-lg"
            onClick={handleEliminar}
          >Eliminar
          </button>
        </div>

  </div>
  )
}

export default Paciente