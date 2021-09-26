import React from "react";
import styled from 'styled-components';

const HeaderContainer = styled.div`
    height: 100%;
    color: red;
    background-color: black;
`
const ButtonContainer = styled.div`
    width: 30px;
    height: 30px
    color: blue;
    justify-content: center;
`

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Labefy</h1>
            <b/>
            <hr/>
            <ButtonContainer>
                <button>Cadastrar Playlist</button>
                <button>Gerencial Playlist</button>
            </ButtonContainer>
        </HeaderContainer>
    )
}

export default Header