import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class FormularioCalculo extends Component {
  constructor () {
    super()
    this.state = {
      estatura: 1.6,
      peso: 50
    }
    this.eventoClik = this.eventoClik.bind(this)
  }

  eventoClik(e) {
    e.preventDefault()
    this.setState({estatura : 1.8})
  }

  UNSAFE_componentWillMount () {
    console.log('No se a montado el componente')
  }

  render () {
    console.log('Esta renderizando el componente')
    return (
      <article>
        <Form>
          <p>IMC = {this.state.peso / this.state.estatura}</p>
          <Form.Group controlId='peso'>
            <Form.Label>
              Peso <small>(kilos)</small>
            </Form.Label>
            <Form.Control
              type='number'
              placeholder='Peso'
              onKeyUp = {(e) => {
                this.setState({peso : e.target.value})
              }}
              defaultValue={this.state.peso}
            />
          </Form.Group>
          <Form.Group controlId='estatura' className='mb-2'>
            <Form.Label>
              Estatura <small>(m2)</small>
            </Form.Label>
            <Form.Control
              type='number'
              placeholder='Estatura'
              defaultValue={this.state.estatura}
            />
          </Form.Group>
          <Button
            variant='primary'
            type='submit'
            onClick={this.eventoClik}
          >
            Enviar
          </Button>
        </Form>
      </article>
    )
  }

  componentDidMount () {
    console.log('Ya se monto el componente en el DOM')
  }
}
