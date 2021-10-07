import React, { useState }  from "react"
import reactDom from "react-dom"
import styled from "styled-components"
import {HomePage} from "./pages/HomePage/HomePage" 
import { MatchePage } from "./pages/MatchePage/MatchePage"


const App = () => {
  const [currentPage, setCurrentPage] = useState("home")

  const changePage = () => {
    if (currentPage === "home"){
      setCurrentPage("matches")
    } else {
      setCurrentPage("home")
    }
  }
  const cleanMatches = () => {
    console.log("Esse botão limpa")
  }
 
  return (
    <div>
    {currentPage === "home" ? <HomePage/> : <MatchePage/>}
    <button onClick={changePage}>{currentPage === "home" ? "Ir para Matches" : "Ir para Home"} </button>
    <button onClick={changePage}> Limpar Matches</button>
    </div>
    )
  }
  
  
export default App