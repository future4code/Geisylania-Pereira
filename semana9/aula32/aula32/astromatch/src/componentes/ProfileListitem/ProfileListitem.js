import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { ListItemContainer, RoundImage, Profile, ProfileImage} from './styled'


export const ProfileListitem = () => { 

    const [profile, setProfile] = useState ({})
    const getProfileToChoose = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/geisy-lopes-maryam/person')
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            alert(err)
        })
    }
    useEffect(() => {
    getProfileToChoose()
    },[])

    return (
        // <ListItemContainer>
                <Profile> 
                <h1>{profile.name}
                Idade , {profile.age}</h1>
                <ProfileImage src={profile.photo}/>
                    <h1>{profile.bio}</h1>
                <div>
                    <button onclick={ProfileListitem}> {profile.id, false} X</button>
                    <button onclick={ProfileListitem}> {profile.choice, true} ♥</button>
                </div>
            </Profile> 
        // </ListItemContainer>
    )
}
