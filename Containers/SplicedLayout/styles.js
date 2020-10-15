import styled from 'styled-components'

export const Main = styled.div `
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 20% auto 20%;
`

export const FormPlace = styled.div `
grid-column: 2;
grid-row: 2;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
background-color: rgba(160, 221, 199, 0.1);
`

/* 
export const FooterImg = styled.div`
  grid-column: 1;
  grid-row: 2;
  height: auto;
  width: 50vw;
` */