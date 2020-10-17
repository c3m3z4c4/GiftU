import React, { Fragment } from "react";
import Link from "next/link";

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
					<Link href="/access">
						<LinkLogin>{props.loginText}</LinkLogin>
					</Link>
				</WrapperLogin>
				<ImageFooter src={props.footerImage} alt={props.altImage} />
			</Wrapper>
		</Fragment>
	);
};

export default Footer;
