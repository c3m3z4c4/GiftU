import React, { Fragment } from "react";

import {
	WrapperLeft,
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
