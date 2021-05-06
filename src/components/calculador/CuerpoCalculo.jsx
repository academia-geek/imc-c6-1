import React, { Component } from 'react'
import Formulario from './FormularioCalculo'
import VerIMC from './VerCalculoIMC'
import Bascula from './BasculaIMC'
import { Card, Col, Row } from 'react-bootstrap'
class CuerpoCalculo extends Component {
  render () {
    return (
      <>
        <Card.Body>
          <Row>
            <Col>
              <Formulario />
            </Col>
            <Col>
              <VerIMC estatura={1.6} peso={50} />
            </Col>
            <Col>
              <Bascula bascula={this.props.bascula} />
            </Col>
          </Row>
        </Card.Body>
      </>
    )
  }
}

export default CuerpoCalculo
