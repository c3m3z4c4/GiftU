import React, { Fragment } from "react";

import {
	WrapperRight,
	LogoImage,
	imgLogo,
	WrapperSign,
	ButtonSignIn,
	ButtonSignUp,
	WrapperInput,
	LabelText,
	LabelImg,
	email,
	LabelInput,
	LabelTextPass,
	LabelImgPass,
	LabelInputPass,
	pass,
	BaseButton,
	WrapperSingRD,
	FBLogo,
	FbLogo,
	FBButton,
	GoLogo,
	GLogo,
	GooButton,
	Span,
} from "./styles";

const AccessRight = () => {
  function signinClick(e) {
    e.preventDefault();
    console.log('Enablink signIn.');
	}
	
	function signupClick(e) {
    e.preventDefault();
    console.log('Enablink signUp.');
  }



	return (
		<Fragment>
			<WrapperRight>
				<LogoImage src={imgLogo} />
				<WrapperSign>
					<ButtonSignIn onClick={signinClick}>
						Iniciar <Span primary>Sesión</Span>
					</ButtonSignIn>
					<ButtonSignUp onClick={signupClick}>
					<Span disabled>Registrarse</Span>
					</ButtonSignUp>
				</WrapperSign>
				<WrapperInput>
					<LabelText>Email <LabelImg src={email} /></LabelText>
					<LabelInput></LabelInput>
				</WrapperInput>
				<WrapperInput>
					<LabelTextPass>Contraseña <LabelImgPass src={pass} /></LabelTextPass>
					<LabelInputPass></LabelInputPass>
				</WrapperInput>
				
				<BaseButton>Entrar</BaseButton>
				<WrapperSingRD>
					<FBButton>
						Entrar con 
						<FbLogo src={FBLogo}></FbLogo>
					</FBButton>
					<GooButton>
						Entrar con 
						<GLogo src={GoLogo}></GLogo>
					</GooButton>
				</WrapperSingRD>
			</WrapperRight>
		</Fragment>
	);
};

export default AccessRight;
