import React, { Fragment } from "react";
import {
	Wrapper,
	WrapperImageLine,
	LogoImage,
	ColorLine,
	Text,
	Span,
} from "./styles";

const image = "../images/logo.png";

const Loading = () => {
	return (
		<Fragment>
			<Wrapper>
				<WrapperImageLine>
					<LogoImage src={image} />
					<ColorLine />
				</WrapperImageLine>
				<Text>
					Estamos <Span primary>buscando ...</Span> <br />
					espera un <Span>poco</Span>más<Span primary> Ü</Span>
				</Text>
			</Wrapper>
		</Fragment>
	);
};

export default Loading;
