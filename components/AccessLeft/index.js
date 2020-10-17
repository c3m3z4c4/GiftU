import React, { Fragment } from "react";
import Link from "next/link"

import {
	WrapperLeft,
	LogoName,
	nameLogo,
	WrapperTextFooter,
	MainText,
	BaseFooter,
	imgFooter,
	Span,
} from "./styles";

const AccessLeft = () => {
	return (
		<Fragment>
			<WrapperLeft>
				<Link href="/">
				 	<a> <LogoName src={nameLogo} /></a>
				</Link>
				<WrapperTextFooter>
					<MainText>
						Tu eliges <Span primary>a quién,</Span>
						<br />
						nosotros encontramos <br />
						<Span>el regalo perfecto.</Span>
					</MainText>
					<BaseFooter src={imgFooter} />
				</WrapperTextFooter>
			</WrapperLeft>
		</Fragment>
	);
};

export default AccessLeft;
