import React from 'react'

export default class HiMessage extends React.Component {
    render(){
        return <h1> Hi {this.props.nome}! </h1>
    }
}