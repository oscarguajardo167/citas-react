import React from 'react'

function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5 ">

      <h2 className="font-black text-3xl text-center ">Seguimiento Pacientes</h2>

      <p className=" text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}
        <span className="text-sky-600  font-bold"> Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className='mb-5'>
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
             Nombre Completo: 
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 rounded-md mt-2"
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
             Nombre Propietario: 
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del dueño de la mascota"
            className="border-2 w-full p-2 rounded-md mt-2"
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
             Email: 
          </label>

          <input
            id="email"
            type="email"
            placeholder="Correo Electrónico"
            className="border-2 w-full p-2 rounded-md mt-2"
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
             Alta: 
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 rounded-md mt-2"
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
             Sintomas: 
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 rounded-md mt-2"
            placeholder='Describa los sintomas persistentes de la mascota..'
          />
        </div>

        <input
          type="submit"
          value="Agregar Paciente"
          className="bg-sky-600 w-full p-3 text-white uppercase font-bold 
          hover:bg-sky-700 cursor-pointer transition-all"
        />
      </form>

    </div>
  )
}

export default Formulario