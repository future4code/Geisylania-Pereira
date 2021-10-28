import React from 'react';
import Header from './componets/header';
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: colum;
`

class App extends React.Component {
  state = {

  }
  
  rende() {
    return (
    <AppContainer>
      <Header/>
      <div>Pages</div>
    </AppContainer>
    );
  }
}


export default App;
