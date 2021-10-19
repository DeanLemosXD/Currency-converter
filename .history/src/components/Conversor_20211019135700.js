import React, { Component } from 'react'

export default class Conversor extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

        this.state = {
            moedaA_Valor:"",
            moedaB_Valor:0,

        }

        this.converter = this.converter.bind(this)
    }

    converter(){

        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `http://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=0d7e32903cad9cf7460c`
        //console.log(url)
        fetch(url).then(res=>{
            return res.json()
        }).then(json=>{

            let cotacao = json[de_para].val;
            let moedaB_Valor = (parseFloat(this.state.moedaA_Valor) * cotacao).toFixed(2)
            this.setState({moedaB_Valor})
        })
    }
    render(){
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event)=>{this.setState({moedaA_Valor:event.target.value})}}></input>
                <input type="button" value="Conversão" onClick={this.converter}></input>
                <h2>valor final</h2>
                <h3>{this.state.moedaB_Valor}</h3>
            </div>
        )
    }
}