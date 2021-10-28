import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddRecPages from "../Pages/AddRecPages";
import LoginPages from "../Pages/LoginPages";
import RecDetailPage from "../Pages/RecDetailPage";
import RecListPages from "../Pages/RecListPages";
import SignListPages from "../Pages/SignListPages";
import ErroPage from "../ErroPages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPages />
        </Route>

        <Route exact path="/cadastro">
          <SignListPages />
        </Route>

        <Route exact path="/">
          <RecListPages />
        </Route>

        <Route exact path="/adc-receitas">
          <AddRecPages />
        </Route>

        <Route exact path="/detalhes/:id">
          <RecDetailPage />
        </Route>

        <Route>
          <ErroPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
