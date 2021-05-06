import React, { Component } from 'react'

export default class FormularioCalculo extends Component {
    render() {
        return (
            <article>
                <form>
                    <div>
                        <label>Peso <small>(kilos)</small></label>
                        <input type="number" name = "peso" id = "peso"/>
                    </div>
                    <div>
                        <label>Altura <small>(m2)</small></label>
                        <input type="number" name="altura" id = "altura"/>
                    </div>
                    <button type = "submit" name = "enviar">Enviar</button>
                </form>
            </article>
        )
    }
}
