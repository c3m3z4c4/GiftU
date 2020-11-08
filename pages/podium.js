import React from "react";
import { PodiumComponent, PODIUM_QUERY, variables } from '../Containers/PodiumContainer/index';
import Header from "../components/Header";
import TitleComponent from '../components/Title/index';
import styled from 'styled-components';
import { initializeApollo } from '../lib/apolloClient';

const Wrapper = styled.div`
width:100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const PodiumPage = () =>  {
    return (
    <Wrapper>
        <TitleComponent name="CESAR" /> 
        <PodiumComponent />
    </Wrapper>
    )
};

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query:PODIUM_QUERY,
    variables: variables,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}

export default PodiumPage;