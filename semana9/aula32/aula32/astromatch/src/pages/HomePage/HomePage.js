import React from "react"
import { HomeContainer, Profile, ProfileImage } from './styled'


export const HomePage = () => {
    return (
        <HomeContainer>
            <h1>Astromatches</h1>
            <Profile>
                <ProfileImage src={"https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"}/>
                    <h1> Geisy</h1>
                <div>
                    <button>X</button>
                    <button>♥</button>
                </div>
            </Profile>
        </HomeContainer>
    )
}
            
