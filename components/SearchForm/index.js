import React from 'react'

import { TitleText, InputContainer, LandscapeContainer, ColContainer, FormArea, LabelComp, InputField, SelectField  } from './styles'
import { BaseButton } from '../Button'
import { OptButton } from '../OptButton'
import { FbButton } from '../FbButton'


export const SearchForm = () => {


    return (
    <div>
        <TitleText>SignIn</TitleText>
        <FormArea>
            <InputContainer>
                <LabelComp>
                    <span >Género:</span>
                </LabelComp>
                <LandscapeContainer>

                    <OptButton src="/images/she-opt.png"></OptButton>
                    <OptButton src="/images/he-opt.png"></OptButton>
                </LandscapeContainer>
            </InputContainer>
            <InputContainer>
                <LabelComp>
                    <span >Ocasión:</span>
                    
                </LabelComp>
                <SelectField>
                    <option value="Bautizo">Bautizo</option>
                    <option value="Boda">Boda</option>
                    <option value="Navidad">Navidad</option>
                    <option value="Aniversario" selected>Aniversario</option>
                </SelectField>
            </InputContainer>
            <LandscapeContainer>
                <LabelComp>
                    <span >Perfiles:</span>
                </LabelComp>
                <ColContainer>
                    <LabelComp>
                        <img src="/images/fb-search.png" /> 
                    </LabelComp> 
                    <InputField />
                    <LabelComp>
                        <img src="/images/instagram-search.png" /> 
                    </LabelComp> 
                    <InputField />
                </ColContainer>

            </LandscapeContainer>
            <div>
              <BaseButton title="Buscar"></BaseButton>
            </div>

        </FormArea>
    </div>
    )
}

