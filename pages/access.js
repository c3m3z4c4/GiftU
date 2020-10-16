import React, { Fragment } from "react";
import { SignInForm } from "../components/SignInForm/index";

import { Hero } from "../components/Hero";

const Signin = () => {
	return (
		<Fragment>
			<Hero />
			<SignInForm />
		</Fragment>
	);
};

export default Signin;
