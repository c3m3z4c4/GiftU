import React, { Fragment } from "react";

import Menu from "../Menu";
import { Wrapper, LogoName } from "./styles";

const name = "../images/giftu.png";

const Header = () => {
	return (
		<Fragment>
			<Wrapper>
				<LogoName src={name} />
				<Menu />
			</Wrapper>
		</Fragment>
	);
};

export default Header;
