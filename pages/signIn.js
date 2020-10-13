import React from "react";
import { UserForm } from '../components/UserForm'

import {
	MainContainer,
	Logo,
} from "../styles/SignIn";



const SignIn = () => {
	return (
		<MainContainer>
			<div className="container">
				<Logo>
					<img className="logo-image" src="/images/logo.png" />
					<img className="logo-name" src="/images/GiftÜ.png" />
				</Logo>
			<UserForm />
			</div>
		</MainContainer>
	);
};


export default SignIn;