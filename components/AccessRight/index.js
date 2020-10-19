import React, { Fragment, useState } from "react";
import {
	WrapperRight,
	LogoImage,
	imgLogo,
	WrapperSign,
	TabButton,
} from "./styles";
 import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';

const AccessRight = () => {

  const [ tabDisabled, useTabState ] = useState(false);
  const [ formState, useForm ] = useState(false);
  
  function activeTab(e) {
	e.preventDefault();
	 useTabState(!tabDisabled)
	 useForm(!formState)
	}
	
	return (
		<Fragment>
			<WrapperRight>
				<LogoImage src={imgLogo} />
				{/* tabs */}
				<WrapperSign>
					<TabButton onClick={activeTab} tabDisabled={tabDisabled}>
					  Iniciar Sesión
					</TabButton>
					<TabButton onClick={activeTab} tabDisabled={!tabDisabled}>
					   Registrarse
					</TabButton>
				</WrapperSign>
				{
					formState ? (
						<SignUpForm />
					) : (
					<SignInForm />
					) 
				}
			</WrapperRight>
		</Fragment>
	);
};

export default AccessRight;
