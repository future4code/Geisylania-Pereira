import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import LoginPage from "../Pages/LoginPage/Login";
import CadastroPage from "../Pages/CadastroPage/Cadastro"
import FeedPage from "../Pages/FeedPages/Feed";
import PostPage from "../Pages/PostPage/Post";
import Header from "../Componentes/Header/Header";


const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>

            <Route exact path="/login">
                <LoginPage/>
            </Route>

            <Route exact path="/cadastro">
                <CadastroPage/>
            </Route>

            <Route exact path="/feed">
                <FeedPage/>
            </Route>

            <Route exact path="/post">
                <PostPage/>
            </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router