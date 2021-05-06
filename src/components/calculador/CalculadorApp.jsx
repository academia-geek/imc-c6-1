import React from 'react'
import { Card } from 'react-bootstrap'
import Cabecera from './CabeceraCalculo'
import Cuerpo from './CuerpoCalculo'
class CalculadorApp extends React.Component {
  
   constructor(){
       super()
       this.state = {
           paciente : "Pedro"
       }
   } 

  obtenerNombre () {
    return this.nombre
  }

  render () {
    //  console.log(this.state);
      
    return (
      <>
      <Card>
        <Cabecera/>
        <Cuerpo bascula = {this.props.bascula}/>
        </Card>
      </>
    )
  }
}

export default CalculadorApp
