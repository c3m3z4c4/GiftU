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
	return (
		<Fragment>
			<WrapperRight>
				<LogoImage src={imgLogo} />
				<WrapperSign>
					<ButtonSignIn>
						Sign <Span primary>In</Span>
					</ButtonSignIn>
					<ButtonSignUp>
						Sign <Span primary>Up</Span>
					</ButtonSignUp>
				</WrapperSign>
				<WrapperInput>
					<LabelText>Email</LabelText>
					<LabelImg src={email} />
				</WrapperInput>
				<LabelInput></LabelInput>
				<WrapperInput>
					<LabelTextPass>Password</LabelTextPass>
					<LabelImgPass src={pass} />
				</WrapperInput>
				<LabelInputPass></LabelInputPass>
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
