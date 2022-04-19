import {useEffect, useState} from 'react'
import React from 'react'
import Error from './Error';

function Formulario({setPacientes, pacientes, paciente, setPaciente}) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  //CHECA SI HAY CAMBIOS EN PACIENTE CUANDO SE EDITA Y LOS PONE EN SUS RESPECTIVAS CASILLAS
  useEffect(() => {
    if( Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])
  

  

  // FUNCION CUANDO SE APRIETE EL BOTÓN
  const handleSubmit = (e)  =>{
      e.preventDefault();
    
    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha
    }

    // VALIDACION FORMULARIO
    if( [nombre, propietario, email, fecha, sintomas ].includes('') ){
        setError(true);
    } else {
        //OBJETO PACIENTE
        const objetoPaciente = {
          nombre,
          propietario,
          email,
          fecha,
          sintomas
          }

    //VERIFICANDO SI ESTAMOS EDITANDO
      if(paciente.id){
        //EDITANDO
        objetoPaciente.id = paciente.id;
        // ITERAR PARA VER QUE PACIENTE QUE REGISTRO ESTAMOS EDITANDO, SI LO ENCUENTRA ENTONCES RETORNA EL MODIFICADO
        // SINO ENTONCES LO RETORNA TAL CUAL COMO ESTÁ
        const pacientesActualizados = pacientes.map(pacienteState => 
          pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
        // LO DEFINE
        setPacientes(pacientesActualizados)
        // VUELVE EL PACIENTE A UN OBJETO VACÍO
        setPaciente({})
      } else {
        // AGREGO EL OBJETO PACIENTES
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);
      }
      

        // REINICIO DE TODO
        setError(false);
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    } 


    


    
  
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">

      <h2 className="font-black text-3xl text-center ">Seguimiento Pacientes</h2>

      <p className=" text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}
        <span className="text-sky-600  font-bold"> Administralos</span>
      </p>

      <form
        onSubmit = {handleSubmit} 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >

        { error && <Error mensaje = 'Todos los campos son obligatorios' />}

        <div className='mb-5'>
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
             Nombre Mascota: 
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 rounded-md mt-2"
            value = {nombre}
            onChange = { (e) => setNombre(e.target.value) }
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
            value = {propietario}
            onChange = { (e) => setPropietario(e.target.value) }
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
            value = {email}
            onChange = { (e) => setEmail(e.target.value) }
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
            value = {fecha}
            onChange = { (e) => setFecha(e.target.value) }
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
            value = {sintomas}
            onChange = { (e) => setSintomas(e.target.value) }
          />
        </div>

        <input
          type="submit"
          value={ paciente.id ? "Editar Paciente" : "Agregar Paciente"} 
          className={paciente.id ?
            "bg-yellow-500 w-full hover:bg-yellow-600  p-3 text-white uppercase font-bold cursor-pointer transition-all" 
             : "bg-sky-600 w-full hover:bg-sky-700  p-3 text-white uppercase font-bold cursor-pointer transition-all" }  
        />
      </form>

    </div>
  )
}

export default Formulario