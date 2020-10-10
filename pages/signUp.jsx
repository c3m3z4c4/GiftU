import React from "react";
import {
	MainContainer,
	Logo,
	FormArea,
	Button,
	LabelComp,
	InputField,
	TitleText,
} from "../styles/SignIn";

const SignUp = () => {
	return (
		<MainContainer>
			<div className="container">
				<Logo>
					<img className="logo-image" src="/images/logo.png" />
					<img className="logo-name" src="/images/GiftÜ.png" />
				</Logo>
				<TitleText>SIGN UP</TitleText>
				<FormArea>
					<div className="input-container">
						<LabelComp>
							<span className="label-text">Email</span>
							<img className="label-image__mail" src="/images/mail2.png" />
						</LabelComp>
						<InputField />
					</div>
					<div className="input-container">
						<LabelComp>
							<span className="label-text">Password</span>
							<img className="label-image__key" src="/images/key.png" />
						</LabelComp>
						<InputField />
					</div>
					<Button>SIGN UP</Button>
				</FormArea>
			</div>
		</MainContainer>
	);
};

export default SignIn;
