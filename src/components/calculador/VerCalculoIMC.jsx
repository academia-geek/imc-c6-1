import React from 'react'

const VerCalculoIMC = ({ estatura, peso }) => {
  return (
    <article>
      <p>IMC</p>
      <span>
        <b>{peso / estatura}</b>
      </span>
    </article>
  )
}

export default VerCalculoIMC
