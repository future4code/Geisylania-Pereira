import React from "react"

export default class TelaCadastro extends React.Component{
    render() {
        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuarios</h2>
            </div>
        )
    }
}