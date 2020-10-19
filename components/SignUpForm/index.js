import React from 'react'
import {
    WrappersmallerInput,
	LabelText,
	LabelInput,
	LabelTextPass,
	LabelInputPass,
    FlexInputWrapper,
	BaseButton,
	WrapperSingRD,
	FBLogo,
	FbLogo,
	FBButton,
	GoLogo,
	GLogo,
	GooButton,
} from "../AccessRight/styles";
import FormComponent from '../FormComponent/index';


const SignUpForm = () => {
    return (
        <FormComponent>
            {/* inputs */}
            <WrappersmallerInput>
                <LabelText>Nombre</LabelText>
                <LabelInput></LabelInput>
            </WrappersmallerInput>
            <WrappersmallerInput>
                <LabelText>Email</LabelText>
                <LabelInput></LabelInput>
            </WrappersmallerInput>
            {/* contraseñas */}
            <FlexInputWrapper>
                <WrappersmallerInput>
                    <LabelTextPass>Contraseña</LabelTextPass>
                    <LabelInputPass></LabelInputPass>
                </WrappersmallerInput>
                <WrappersmallerInput>
                    <LabelTextPass> Repite Contraseña</LabelTextPass>
                    <LabelInputPass></LabelInputPass>
                </WrappersmallerInput>
            </FlexInputWrapper>
            {/* contraseñas */}
            {/* terminan inputs */}
            {/* Botones */}
            <BaseButton>Registrarse</BaseButton>
            <WrapperSingRD>
                <FBButton>
                Registrarse con 
                    <FbLogo src={FBLogo}></FbLogo>
                </FBButton>
                <GooButton>
                Registrarse con 
                    <GLogo src={GoLogo}></GLogo>
                </GooButton>
            </WrapperSingRD>
            {/* terminan botones */}
		</FormComponent>    
    )
}
export default SignUpForm;

