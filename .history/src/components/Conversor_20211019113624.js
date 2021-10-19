import React, { Component } from 'react'

export default class Conversor extends Component {
    render(){
        return (
            <div className="conversor">
                <h2>USD para BRL</h2>
                <input type="text"></input>
                <input type="button" value="Conversão"></input>
                <h2>valor final</h2>
            </div>
        )
    }
}