import React from "react";
import axios from "axios";
import "./styles.css";

export default class App extends React.Component{
  state = {
    activity: {}
  }

  getActivity = () => {
    axios
    .get("http://www.boredapi.com/api/activity/")
    .then((resp) => {
      console.log(resp.data);
      this.setState({activity:resp.data})
    })
    .catch((err) => {
      console.log(err);
    });

  };
  render() {
    return (
      <div className="App">
        <h1>Está entendiado?</h1>
        <button onClick={this.getActivity}>Click aqui</button>
        <hr/>
        <h2>Atividade</h2>
        <p>Nome: {this.state.activity.activity}</p>
        <p>Tipo: {this.state.activity.type}</p>
        <p>Participantes: {this.state.activity.participants}</p>
        <p>Preço: ${this.state.activity.price}</p>
      </div>
    );
  }
}
