import React from "react";
import {
    DetailsWrapper,
    LeftDetails,
    RightDetails,
    MainImageContainer,
    MainImage,
    DecorativeImage,
    InformationContainer,
    TitleDetails,
    LineImage,
    DetailsInformation,
    DetailItem,
    DetailItemTitle,
    DetailItemContent,
    ColorLetter,
    DetailButton,
} from './styles';

const DetailsContainer = () => (
    <DetailsWrapper>
        <LeftDetails>
            <MainImageContainer>
                <MainImage src="/images/tennis_1.jpg" />
                <DecorativeImage src="/images/decataveDetails.png" />
            </MainImageContainer>
        </LeftDetails> 
        <RightDetails>
            <InformationContainer>
                <TitleDetails>calzado deportivo</TitleDetails>
                <LineImage src="/images/lines.png" />
                <DetailsInformation>
                    <DetailItem>
                      <DetailItemTitle>
                          DESCR<ColorLetter blue>I</ColorLetter>PCIÓN
                    </DetailItemTitle>
                      <DetailItemContent>
                      Tenis deportivos colores oscuros, Simillares a marca Nike, Adidas  o puma.
                     </DetailItemContent> 
                    </DetailItem>
                    <DetailItem>
                      <DetailItemTitle>RAT<ColorLetter orange>I</ColorLetter>NG</DetailItemTitle>
                      <DetailItemContent>esstrellas</DetailItemContent>        
                    </DetailItem>
                    <DetailItem>
                      <DetailItemTitle>POPUL<ColorLetter blue>A</ColorLetter>RIDAD</DetailItemTitle>
                      <DetailItemContent>Lorem ipsum sit amet</DetailItemContent>   
                    </DetailItem>
                </DetailsInformation>
                <DetailButton>Compralo Fácil y rápido</DetailButton>
            </InformationContainer>
        </RightDetails>
    </DetailsWrapper>
);

export default DetailsContainer;

