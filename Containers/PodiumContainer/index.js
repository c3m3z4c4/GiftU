import React from 'react';
import {
    PodiumWrapper,
    PodiumContainer,
    CompleteColumn,
    FirstPlace,
    SecondPlace,
    ThirdPlace,
    NameComponent,
    FirstPlaceIcon,
    PlusIcon,
    ImagePodium,
    Decorative,
    LittleDecorative,
    DecorativeContainer,
} from './styles';

const giftImages = {
    tennis: '/images/tennis_1.jpg',
    iwatch: '/images/iwatch_1.jpg',
    earings: '/images/bisuteria_1.jpg',
};
const PodiumComponent = () => {
    return (
        <PodiumWrapper>
            <DecorativeContainer>
                <LittleDecorative />
            </DecorativeContainer>
            <PodiumContainer>
                <CompleteColumn>
                  <ImagePodium src={giftImages.earings} />
                    <NameComponent>
                        Bisuteria Dorada
                        <PlusIcon />
                    </NameComponent>
                    <ThirdPlace>3</ThirdPlace>
                </CompleteColumn>
                <CompleteColumn>
                    <ImagePodium src={giftImages.iwatch} />
                    <NameComponent>
                        Reloj inteligente
                        <PlusIcon />
                    </NameComponent>
                    <FirstPlace>
                        <FirstPlaceIcon />
                    </FirstPlace>
                </CompleteColumn>
                <CompleteColumn>
                    <ImagePodium src={giftImages.tennis} />
                    <NameComponent>
                        Calzado deportivo
                        <PlusIcon />
                    </NameComponent>
                    <SecondPlace>2</SecondPlace>
                </CompleteColumn>
            </PodiumContainer>
            <DecorativeContainer>
              <Decorative />
            </DecorativeContainer>
        </PodiumWrapper>
    );
};

export default PodiumComponent;
