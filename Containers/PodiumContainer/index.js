import React from 'react';
import Link from "next/link";
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
                        <Link href="/details">
                            <PlusIcon />
                        </Link>
                    </NameComponent>
                    <ThirdPlace>3</ThirdPlace>
                </CompleteColumn>
                <CompleteColumn>
                    <ImagePodium src={giftImages.iwatch} />
                    <NameComponent>
                        Reloj inteligente
                        <Link href="/details">
                            <PlusIcon />
                        </Link>
                    </NameComponent>
                    <FirstPlace>
                        <FirstPlaceIcon />
                    </FirstPlace>
                </CompleteColumn>
                <CompleteColumn>
                    <ImagePodium src={giftImages.tennis} />
                    <NameComponent>
                        Calzado deportivo
                        <Link href="/details">
                            <PlusIcon />
                        </Link>
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
