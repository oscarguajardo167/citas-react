import React from 'react'

function Error({mensaje}) {
  return (
    <div className="bg-red-500 uppercase text-center text-1xl font-bold text-white mb-3 py-2 rounded-lg">
    <p> {mensaje} </p>
    </div>
  )
}

export default Error