  import styled from 'styled-components'

  export const Main = styled.div `
  display: inline-grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 20% auto 20%;
`

  export const Header = styled.header `
  background-color: linear-gradient(to right, White 50% ,rgba(160, 221, 199, 0.1) 50%);
  grid-column: 1;
  grid-row: 1;
`

  export const Hero = styled.div `
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
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
  export const StyledText = styled.span `
	color: ${(props) => (props.primary ? "#87d3b8" : "#ffab07")};
  line-height: 30px;
  letter-spacing: 0.14em;
  font-weight: bold;
  font-size: 24px;
  font-family: 'Quicksand', sans-serif;
  margin: 30px 0;
`

  export const NormalText = styled.span `
	color: ${(props) => (props.primary ? "#87d3b8" : "#ffab07")};
  line-height: 30px;
  letter-spacing: 0.14em;
  font-weight: bold;
  font-size: 24px;
  font-family: 'Quicksand', sans-serif;
  margin: 30px 0;
`
      /* 
      export const FooterImg = styled.div`
        grid-column: 1;
        grid-row: 2;
        height: auto;
        width: 50vw;
      ` */