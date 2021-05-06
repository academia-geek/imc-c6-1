import React, { Component } from 'react';
import Formulario from './FormularioCalculo'
import VerIMC from './VerCalculoIMC'
import Bascula from './BasculaIMC'
class CuerpoCalculo extends Component {
    render() {
        return (
            <>
                <Formulario/>
                <VerIMC estatura = {1.60} peso = {50}/>
                <Bascula bascula = {this.props.bascula} />
            </>
        );
    }
}

export default CuerpoCalculo;