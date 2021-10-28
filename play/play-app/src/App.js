import React from 'react';
import './App.css';
import styled from "styled-components";
import Header from './components/Header/Header';
import PlaylistGerenciado from './components/PlaylistGerenciado';
import PlaylistCreat from './components/Header/PlaylistCreat';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: center;
`

class App extends React.Component{
  state = {

  }
  render () {
    return (
      <AppContainer>
      <Header/>
      <PlaylistGerenciado/>
      <PlaylistCreat/>
      </AppContainer>
    );
  }
}

export default App;
