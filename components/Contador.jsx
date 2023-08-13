import { Component } from "react";

export default class Contador extends Component {


    state = {
        //Com os dois pontos de interrogacao, indica que caso o atributo numero não receba algum valor, será considerado o valor zero
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1
    }

    // pode criar uma função aqui da seguinte forma. Solução 1

    inc() {
        this.setState({
            //Dessa forma irá modificar o valor de numero
            numero: this.state.numero + 1
        })
    }

    //Solução Metodo 2 - Solucao mais facil e o this sempre apontará para o objeto atual
    inc2 = () => {
        this.setState({
            //Dessa forma irá modificar o valor de numero
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            //Dessa forma irá modificar o valor de numero
            numero: this.state.numero - this.state.passo
        })
    }

    alteararPasso = (ev) => {
        this.setState({ passo: +ev.target.value })
    }

    renderForm() {
        return (
            <>
                <input type="number" min={1} max={1000} value={this.state.passo} onChange={ev => this.alteararPasso()} />

                {/* Para que funcione o incremento com o this, esta é a solução 1 */}
                {/* <button onClick={() => this.inc()}>+</button> */}
                {/* Dessa forma não irá ter a arrow function aqui */}
                <button onClick={this.inc2}>+</button>
                <button onClick={this.dec}>-</button>
            </>
        )
    }

    // Com o metodo render, consigo rendenizar uma classe na tela

    render() {
        return (
            <div>
                <h1>Contador usando Classe</h1>
                {/* Quando se trata de um componente baseado em classe, nós acessanos o props via this nao precisando declarar o props acima. */}
                {/* <h2>Valor Inicial: {this.props.valorInicial}</h2> */}
                <h2>{this.state.numero}</h2>

                {this.renderForm()}


            </div>
        )
    }
}