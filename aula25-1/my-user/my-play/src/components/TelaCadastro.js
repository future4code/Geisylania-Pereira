import React from "react"

export default class TelaCadastro extends React.Component{
    render() {
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para Lista</button>
                <h2>Cadastro</h2>
            </div>
        )
    }
}