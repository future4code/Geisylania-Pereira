import axios from "axios"
import React, { useState } from "react"
import { MatcheContainer } from "./styled"


export const MatchePage = () => {
    const [matcheList, setMatcheList] = useState ([])

        const getMatchesList = () => {
            const getMatchesLis = () => {
                axios
                .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/geisy-lopes-maryan/matches')
                .then((res) => {
                    setMatcheList(res.data.setMatcheList)
                })
                .catch((err) => {
                    alert(err)
                })
            }
    }

    return (
        <div>
        <MatcheContainer>
        </MatcheContainer>
        
        </div>
    )
}