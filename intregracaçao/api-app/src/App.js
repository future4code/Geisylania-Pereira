import React from "react";
import axios from "axios";

export default class App extends React.Component{
  getActivity = () => {
    axios
    .get("http://www.boredapi.com/api/activity/")
    .then((resp) => {
      console.log(resp.data);
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
      </div>
    );
  }
}


