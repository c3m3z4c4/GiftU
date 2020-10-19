import React from 'react'

import { TitleText, InputContainer, FormArea, LabelComp, InputField  } from './styles'
import { BaseButton } from '../Button'
import { GButton } from '../GButton'
import { FbButton } from '../FbButton'


export const SignUpForm = () => {

    const FbLogo = '/images/facebook.png'
    const GLogo = '/images/google.png'
    return (
    <div>
        <TitleText>Registrarse</TitleText>
        <FormArea>
            <InputContainer>
                <LabelComp>
                    <span >Nombre</span>
                    <img  src="/images/user.png" />
                </LabelComp>
                <InputField />
            </InputContainer>
            <InputContainer>
                <LabelComp>
                    <span >Email</span>
                    <img  src="/images/mail.png" />
                </LabelComp>
                <InputField />
            </InputContainer>
            <InputContainer>
                <LabelComp>
                    <span >Contrasena</span>
                    <img src="/images/key.png" />
                </LabelComp>
                <InputField />
            </InputContainer>
            <div>
              <BaseButton title="Registrarse"></BaseButton>
            </div>
            <div>
              <FbButton title="Registrarse con " src={FbLogo}></FbButton>
              <GButton title="Registrarse con " src={GLogo}></GButton>
            </div>

        </FormArea>
    </div>
    )
}

