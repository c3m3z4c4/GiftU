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
						Sign <Span primary>In</Span>
					</ButtonSignIn>
					<ButtonSignUp onClick={signupClick}>
					<Span disabled>Sign Up</Span>
					</ButtonSignUp>
				</WrapperSign>
				<WrapperInput>
					<LabelText>Email <LabelImg src={email} /></LabelText>
					<LabelInput></LabelInput>
				</WrapperInput>
				<WrapperInput>
					<LabelTextPass>Password <LabelImgPass src={pass} /></LabelTextPass>
					<LabelInputPass></LabelInputPass>
				</WrapperInput>
				
				<BaseButton>Sing In</BaseButton>
				<WrapperSingRD>
					<FBButton>
						Sing in with
						<FbLogo src={FBLogo}></FbLogo>
					</FBButton>
					<GooButton>
						Sing in with
						<GLogo src={GoLogo}></GLogo>
					</GooButton>
				</WrapperSingRD>
			</WrapperRight>
		</Fragment>
	);
};

export default AccessRight;
