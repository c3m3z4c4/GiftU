import React from 'react'
import { HeroContainer, Header, MainHero, NormalText, StyledText } from './styles'

export const Hero = () => {
    return (
        <HeroContainer>
            <Header>
                <img src="./images/giftu.png"/>
            </Header>
            <MainHero>
               <div>
                    <NormalText>Tu eliges</NormalText> <StyledText>a quien,</StyledText> <NormalText>nosotros encontramos</NormalText> <StyledText>el regalo perfecto</StyledText>
                </div>
                
            </MainHero>
        </HeroContainer>
    )
}
