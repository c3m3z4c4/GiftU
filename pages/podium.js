import React from "react";
import PodiumComponent from '../Containers/PodiumContainer/index';
import TitleComponent from '../components/Title/index';
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client';
// import { useQuery } from '@apollo/react-hooks';

const Wrapper = styled.div`
width:100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const PodiumPage = () =>  {

     const TEST_QUERY = gql`
      query {
        items {
          id
          title
          image 
        }
      }
     `;

     const { loading, error, data } = useQuery(TEST_QUERY);
     if (loading) {console.log('loading....')};
     if (error) { console.log('erorrrrrrrr 3312 tenemos un 3312')};
     console.log('dataaaaaaa:' + data);

    return (
    <Wrapper>
        <TitleComponent name="CESAR" /> 
        <PodiumComponent />
    </Wrapper>
    )
};

export default PodiumPage;