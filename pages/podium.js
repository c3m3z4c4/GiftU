import React from "react";
import { PodiumComponent ,TEST_QUERY, variablesTest } from '../Containers/PodiumContainer/index';
import TitleComponent from '../components/Title/index';
import styled from 'styled-components'
import { initializeApollo } from '../lib/apolloClient'

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
    query: TEST_QUERY,
    variables: variablesTest,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}

export default PodiumPage;