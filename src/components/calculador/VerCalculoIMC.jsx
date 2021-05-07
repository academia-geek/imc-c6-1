import React from 'react'

const VerCalculoIMC = ({ estatura, peso }) => {
  return (
    <article className = "text-center">
      <h1>IMC</h1>
      <h3>
      <span>
        <b id="valor_calculo_imc">{isNaN(parseFloat(peso / estatura)) ? 0 : parseFloat(peso / estatura).toFixed(2)}</b>
      </span>
      </h3>
    </article>
  )
}

export default VerCalculoIMC
