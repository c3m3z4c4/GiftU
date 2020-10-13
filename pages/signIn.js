import React from "react";
import { UserForm } from '../components/UserForm'
import { NavBar } from '../components/NavBar'

import {
	MainContainer,
	Logo,
} from "../styles/SignIn";



const SignIn = () => {
	return (
		<MainContainer>
			<NavBar />
			<UserForm />
		</MainContainer>
	);
};


export default SignIn;