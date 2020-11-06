import React from 'react';
import { gql, useQuery } from '@apollo/client'
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

 const PODIUM_QUERY = gql`
    query GetPodium($id:ID!){
    podium(id:$id){
        podium
     }
    }
`;
 const variables = { id: 124 };

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
      const podiumProducts = JSON.parse(products);
    return (
        <PodiumWrapper>
        <DecorativeContainer>
            <LittleDecorative />
        </DecorativeContainer>
        <PodiumContainer>
            {
             products === undefined 
             ? (<p>que tranza parce no encontramos nada, dale dinero mejor </p>) 
             :(
                <>
                <CompleteColumn>
                        {
                        podiumProducts[2].map(product => (
                            <>
                                <ImagePodium src={product.img} />
                                    <NameComponent>
                                        {product.name}
                                    <Link href="/gifts/3">
                                            <PlusIcon />
                                        </Link>
                                    </NameComponent>
                            </>
                        ))
                        }
                        <ThirdPlace>3</ThirdPlace>
                    </CompleteColumn>
                    <CompleteColumn>
                    {
                        podiumProducts[0].map(product => (
                            <>
                            <ImagePodium src={product.img} />
                                <NameComponent>
                                    {product.name}
                                    <Link href="/gifts/1">
                                        <PlusIcon />
                                    </Link>
                                </NameComponent>
                                </>
                        ))
                    }
                        <FirstPlace>
                            <FirstPlaceIcon />
                        </FirstPlace>
                    </CompleteColumn>
                    <CompleteColumn>
                        {
                            podiumProducts[1].map(product => (
                            <>
                                    <ImagePodium src={product.img} />
                                    <NameComponent>
                                        {product.name}
                                        <Link href="/gifts/2">
                                            <PlusIcon />
                                        </Link>
                                    </NameComponent>
                            </>
                            ))
                        }
                        <SecondPlace>2</SecondPlace>
            </CompleteColumn>
            </>
             )      
            }
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
