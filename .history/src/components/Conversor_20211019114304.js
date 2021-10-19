import React, { Component } from 'react'

export default class Conversor extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

        this.state = {
            moedaA_Valor:"",
            moedaB_Valor:0,

        }
    }
    render(){
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event)=>{this.setState({moedaA_Valor:event.target.value}}></input>
                <input type="button" value="Conversão"></input>
                <h2>valor final</h2>
            </div>
        )
    }
}