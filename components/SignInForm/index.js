import React from 'react'

import { TitleText, InputContainer, FormArea, LabelComp, InputField  } from './styles'
import { BaseButton } from '../Button'
import { GButton } from '../GButton'
import { FbButton } from '../FbButton'


export const SignInForm = () => {

    const FbLogo = '/images/facebook.png'
    const GLogo = '/images/google.png'
    return (
    <div>
        <TitleText>Inicio de Sesión</TitleText>
        <FormArea>
            <InputContainer>
                <LabelComp>
                    <span >Email</span>
                    <img  src="/images/mail.png" />
                </LabelComp>
                <InputField />
            </InputContainer>
            <InputContainer>
                <LabelComp>
                    <span >Contraseña</span>
                    <img src="/images/key.png" />
                </LabelComp>
                <InputField />
            </InputContainer>
            <div>
              <BaseButton title="Entrar"></BaseButton>
            </div>
            <div>
              <FbButton title="Entrar con " src={FbLogo}></FbButton>
              <GButton title="Entrar con " src={GLogo}></GButton>
            </div>

        </FormArea>
    </div>
    )
}

