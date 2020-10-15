import React, { Fragment } from 'react'
import { Wrapper, LogoName } from './styles'

const image = "../images/logo.png";
const name = "../images/giftu.png";

export const NavBar = () => {
	return (
		<Fragment>
			<Wrapper>
				<LogoName src={name} />
			</Wrapper>
		</Fragment>
	);
};