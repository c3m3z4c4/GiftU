import styled from 'styled-components';

export const HeroContainer = styled.div `
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 3fr;
`

export const Header = styled.div `
background-color: linear-gradient(to right, White 50% ,rgba(160, 221, 199, 0.1) 50%);
grid-column: 1;
grid-row: 1;
`

export const MainHero = styled.div `
grid-column: 1;
grid-row: 3;
display: flex;
justify-content: center;
align-items: center;
`
export const NormalText = styled.span `
line-height: 30px;
letter-spacing: 0.14em;
font-weight: bold;
font-size: 24px;
font-family: 'Quicksand', sans-serif;
margin: 30px 0;
`

export const StyledText = styled.span `
color: ${(props) => (props.primary ? "#87d3b8" : "#ffab07")};
line-height: 30px;
letter-spacing: 0.14em;
font-weight: bold;
font-size: 24px;
font-family: 'Quicksand', sans-serif;
margin: 30px 0;
`