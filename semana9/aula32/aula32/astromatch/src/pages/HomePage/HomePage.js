import React from "react"
import { HomeContainer, Profile, ProfileImage } from './styled'
import { ProfileListitem } from "../../componentes/ProfileListitem/ProfileListitem"
import { MatchePage } from "../MatchePage/MatchePage"
import { useEffect, useState } from "react/cjs/react.development"
import axios from "axios"

export const HomePage = () => {

    const [home, setHome] = useState ({})
    const getHomeToChoose = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/geisy-lopes-maryan/choose-person')
        .then((res) => {
            setHome(res.data.home)
        })
        .catch((err) => {
            alert(err)
        })
    }
    useEffect(() => {
    getHomeToChoose()
    },[])
    return (
        
        <HomeContainer>
            <h1>Astromatches</h1>
            <ProfileListitem/>
        </HomeContainer>
    )
}
            
