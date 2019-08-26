import React from 'react'

const HolaMundo = () => {
  const Hello = 'Hola Mundo'
  const isTrue = true

  return (
    <div className="HolaMundo">
      <h1>{ Hello }</h1>
        <h2>Curso Esencial de React</h2>
        <img src="https://arepa.s3.amazonaws.com/react.png" alt="arepa"/>
        {isTrue ? <h3>Esto es verdadero</h3> : <h3>Es falso</h3>}
        {isTrue && <h4>Soy verdadero</h4>}
    </div>
  )
}

export default HolaMundo