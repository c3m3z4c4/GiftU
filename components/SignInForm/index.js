import React from "react";
import Link from "next/link";
import Auth from "../../lib/Auth";
const auth = new Auth();

import FormComponent from "../FormComponent/index";

import {
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
} from "../AccessRight/styles";

export default class Nav extends React.Component {
	handleLogin() {
		auth.login();
	}

	render() {
		return (
			<FormComponent>
				<WrapperInput>
					<LabelText>
						Email <LabelImg src={email} />
					</LabelText>
					<LabelInput></LabelInput>
				</WrapperInput>
				<WrapperInput>
					<LabelTextPass>
						Contraseña <LabelImgPass src={pass} />
					</LabelTextPass>
					<LabelInputPass></LabelInputPass>
				</WrapperInput>
				<Link href="/">
					<BaseButton>Registrarse</BaseButton>
				</Link>
				<WrapperSingRD>
					<FBButton onClick={() => this.handleLogin()}>
						Registrarse con
						<FbLogo src={FBLogo}></FbLogo>
					</FBButton>
					<GooButton onClick={() => this.handleLogin()}>
						Registrarse con
						<GLogo src={GoLogo}></GLogo>
					</GooButton>
				</WrapperSingRD>
			</FormComponent>
		);
	}
}
