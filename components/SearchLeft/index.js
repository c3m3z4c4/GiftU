import React, { Fragment } from "react";

import {
	WrapperLeft,
	name,
	LogoName,
	WrapperMainText,
	MainText,
	imgFooter,
	ImgSearch,
	Span,
} from "./styles";

const SearchLeft = () => {
	return (
		<Fragment>
			<WrapperLeft>
				<LogoName src={name} />
				<WrapperMainText>
					<MainText>
						CUEN<Span primary>T</Span>AME UN POCO M<Span>Á</Span>S:
					</MainText>
				</WrapperMainText>
				<ImgSearch src={imgFooter} />
			</WrapperLeft>
		</Fragment>
	);
};

export default SearchLeft;
