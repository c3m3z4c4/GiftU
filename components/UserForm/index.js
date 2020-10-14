import React from 'react'
import styled from 'styled-components'
import { BaseButton } from '../Button'
import { GButton } from '../GButton'
import { FbButton } from '../FbButton'


const TitleText = styled.span `
  line-height: 30px;
  letter-spacing: 0.14em;
  font-weight: bold;
  font-size: 24px;
  font-family: 'Quicksand', sans-serif;
  margin: 30px 0;
`
const FormArea = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 30px;
    }
`

const LabelComp = styled.label `
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.14em;
  font-feature-settings: 'case';
  display:flex;
  align-items:center;
  width:100%;
  height:30px;
/*   .label-text {
  margin-right: 15px
  }
  .label-image {
    width: 16px;
    height: 16px;
    margin-left: 8px;
    }
    .label-image__mail {
    transform: rotate(25deg);
    } */
  
`

const InputField = styled.input `
  
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

/* const Button = styled.button `
    width: 124.16px;
    height: 34.58px;
    background: #87D3B8;
    background: rgba(21,152,105,0.2);
    border: none;
    box-sizing: border-box;
    border-radius: 12px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    font-weight: bold;
    font-size: 11px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: 0.11em;
    font-family: 'Quicksand', sans-serif;
    display: flex;
    justify-content: center;
    color: rgba(20, 180, 122, 0.49);
    margin-top: 50px;
` */

export const UserForm = () => {

    const FbLogo = '/images/facebook.png'
    const GLogo = '/images/google.png'
    return (
    <div>
        <TitleText>SIGN IN</TitleText>
        <FormArea>
            <div className="input-container">
                <LabelComp>
                    <span >Email</span>
                    <img  src="/images/mail.png" />
                </LabelComp>
                <InputField />
            </div>
            <div className="input-container">
                <LabelComp>
                    <span >Password</span>
                    <img src="/images/key.png" />
                </LabelComp>
                <InputField />
            </div>
            <BaseButton title="Sign In"></BaseButton>
            <FbButton title="SIgn In With " src={FbLogo}></FbButton>
            <GButton title="SIgn In With " src={GLogo}></GButton>
        </FormArea>
    </div>
    )
}

