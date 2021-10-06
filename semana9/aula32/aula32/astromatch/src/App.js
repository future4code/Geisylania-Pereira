import React, { useState }  from "react"
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
  
  
  
  
 

//   const [currentPage, setCurrentPage] = useState ("home")

//   const changePage = () => {
//     if (currentPage === "home"){
//       setCurrentPage("matches")
//     } else {
//       setCurrentPage("home")
//     }
//   }
//   const cleanMatches = () => {
//     console.log("Esse botão vai limpar")

//   }
//   return (
//     <div>
//       {currentPage === "home" ? <HomePage/> : <MatchePage/>}
//       <button onClick = {changePage}>{currentPage === "home" ? " Ir pra Home"}</button>
//       <button onClick = {cleanMatches}>Limpar Matches</button>
//     </div>
//   )
// }

export default App