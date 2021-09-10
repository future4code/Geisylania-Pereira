import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="App">
            <h2>Dados Pessoais</h2>
            <BigCardContainer>
            <CardGrand
            nome="Geisylania Lopes"
            descricao="Segue minhas informações, traballho atualmente com marketing digital, porem estou me dedicando o maximo no curso.
            Para obter os melhores resultado, com meu desempenho."/>
            
            <div>
                <h4>Geisylania Lopes</h4>
                <p>Tenho 26 anos, aprendendo do zero a programar, a desenvovler <br> tornando tudo possivl.</br> }</p>
            </div>
        </div>
    )
}

export default CardPequeno function App() {
    return (
        <CardPequeno>
        <div></div>
        <h4 className="Textoazul">Geisylania Lopes</h4>
    
}
