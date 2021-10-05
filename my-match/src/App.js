import { render } from "@testing-library/react";
import React from "react";
import { HomePage } from "./pages/HomePages/HomePages";
import { MatchPages } from "./pages/MatchPages/MatchPages";


export default class App extends React.Component {
  state = {
    telaAtual: "home"
  }
}

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "home":
        return <HomePages />;
      case "matche":
        return <MatchPages />;
        default:
          return<HomePages/>;
    }
  };

  render() {
    return <div>{this.escolherTela()}</div>;
  }
}