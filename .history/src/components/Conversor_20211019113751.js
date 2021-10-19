import React, { Component } from 'react'

export default class Conversor extends Component {


    constructor(props){
        super(props);

    }
    render(){
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text"></input>
                <input type="button" value="Conversão"></input>
                <h2>valor final</h2>
            </div>
        )
    }
}