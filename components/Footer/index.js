import React, { Fragment } from "react";

import {
	Wrapper,
	WrapperLogin,
	Cuenta,
	LinkLogin,
	ImageFooter,
} from "./styles";

const Footer = (props) => {
	return (
		<Fragment>
			<Wrapper>
				<WrapperLogin>
					<Cuenta>{props.text}</Cuenta>
				</WrapperLogin>
				<ImageFooter src={props.footerImage} alt={props.altImage} />
			</Wrapper>
		</Fragment>
	);
};

export default Footer;
