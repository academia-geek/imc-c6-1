import React from 'react'
import { Image } from 'react-bootstrap'

const BasculaIMC = ({bascula}) => {
    return (
        <article>
            <Image src={bascula}  alt = "logo" fluid style = {{width : "60%"}}/>
        </article>
    )
}

export default BasculaIMC

