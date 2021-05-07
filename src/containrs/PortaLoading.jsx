import React, { Component } from 'react';
import ReactDOM from 'react-dom'

const portLoading = document.querySelector("#loading")

class PortaLoading extends Component {

    constructor(){
        super()
        this.contentChilds = document.createElement("article")
    }

    componentDidMount(){
        portLoading.appendChild(this.contentChilds)
    }

    componentWillUnmount(){
        portLoading.removeChild(this.contentChilds)
    }

    render() {
        const {children} = this.props
        return ReactDOM.createPortal(
            children,
            this.contentChilds
        );
    }
}

export default PortaLoading;