import React from "react"
import TelaCadastro from "./components/TelaCadastro"
import TelaListaUser from "./components/TelaListaUser"

export default class App extends React.Component {
  state = {
    telaAtual: "Cadastro"
  }

  escolherTela = () => {
    switch (this.state.telaAtual){
      case "Cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "Lista":
        return <TelaListaUser irParaCadast={this.irParaCadast}/>
      default:
      return <div>Erro! Pagina não encontrada:</div>
    }
  }

  irParaCadast = () => {
    this.setState({telaAtual: "Cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "Lista"})
  }

  render() {
    return (
      <div>
        {this.escolherTela()}
      </div>
    )
  }
}
