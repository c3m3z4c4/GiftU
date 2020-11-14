import React, { Fragment } from "react";

import Menu from "../Menu";
import { Wrapper, LogoName } from "./styles";

const name = "../images/giftu.png";

const Header = ({ main }) => {
	return (
		<Fragment>
			<Wrapper>
				{
					main ? null : (
						<Wrapper>
							<LogoName src={name} />
							<Menu />
						</ Wrapper>
					)
				}
			</Wrapper>
		</Fragment>
	);
};

export default Header;
