import styled from 'styled-components';


export const TitleText = styled.span `
  line-height: 30px;
  letter-spacing: 0.14em;
  font-weight: bold;
  font-size: 24px;
  font-family: 'Quicksand', sans-serif;
  margin: 30px 0;
`
export const FormArea = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`
export const InputContainer = styled.form `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 30px;
  padding-left: 15px;
`
export const LandscapeContainer = styled.form `
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  padding-left: 15px;
`
export const ColContainer = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-left: 15px;
`


export const LabelComp = styled.label `
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.14em;
  font-feature-settings: 'case';
  display:flex;
  align-items: flex-start;
  justify-content: left;
  width:100%;
  height:30px;
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

export const InputField = styled.input `
  
    width: 258px;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(135, 211, 184, 0.6);
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    line-height: 17px;
    color: #FFAB07;
    padding: 10px 0;
    margin-left: 60px;
    
    &:focus, textarea:focus, select:focus{
    outline: none;
    }
  
  `

export const SelectField = styled.select `
  
width: 258px;
background: transparent;
border: none;
border-bottom: 2px solid rgba(135, 211, 184, 0.6);
font-family: 'Quicksand', sans-serif;
font-size: 14px;
line-height: 17px;
color: #FFAB07;
padding: 10px 0;

&:focus, textarea:focus, select:focus{
outline: none;
}

`