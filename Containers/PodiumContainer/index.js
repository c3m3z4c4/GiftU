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

//  const TEST_QUERY = gql`
// {
//     social_network(id:22){
//     url_social_network
//     receiver_name
//     social_network_name
//     }
// }

 const PODIUM_QUERY = gql`
    query GetPodium($id:ID!){
    podium(id:$id){
        podium
     }
    }
`;
 const variables = { id: 34 };

const giftImages = {
    tennis: '/images/tennis_1.jpg',
    iwatch: '/images/iwatch_1.jpg',
    earings: '/images/bisuteria_1.jpg',
}; 
const PodiumComponent = () => {
    const { loading, error, data, fetchMore, networkStatus } = useQuery(
        PODIUM_QUERY,
        {
          variables: variables,
          notifyOnNetworkStatusChange: true,
        }
      )
      if (error){console.log("3312 3312 tenemos un 3312")};
      if (loading) return <div>Loading</div>
      const { products } = data.podium.podium
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
                    <ImagePodium src="https://http2.mlstatic.com/los-7-habitos-de-la-gente-altamente-efectiva-libro-D_NQ_NP_930644-MLM43174477910_082020-W.jpg" />
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
    PODIUM_QUERY,
    variables,
    PodiumComponent,
};
