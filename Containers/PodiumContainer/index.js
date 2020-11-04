import React from 'react';
import { gql, useQuery, NetworkStatus } from '@apollo/client'
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

 const TEST_QUERY = gql`
{
    social_network(id:22){
    url_social_network
    receiver_name
    social_network_name
    }
}
`;
 const variablesTest = { id: 22 };

const giftImages = {
    tennis: '/images/tennis_1.jpg',
    iwatch: '/images/iwatch_1.jpg',
    earings: '/images/bisuteria_1.jpg',
}; 
const PodiumComponent = () => {
    const { loading, error, data, fetchMore, networkStatus } = useQuery(
        TEST_QUERY,
        {
          variables: variablesTest,
          notifyOnNetworkStatusChange: true,
        }
      )
      if (error){console.log("3312 3312 tenemos un 3312")};
      if (loading) return <div>Loading</div>
      if(data){console.log("dataaaa", data);};
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

export {
    TEST_QUERY,
    variablesTest,
    PodiumComponent,
};
