import React, { Fragment } from "react";
import { Wrapper, WrapperRotate, LogoImage, Text, Span } from "./styles";

const image = "../images/logo.png";

const Loading = () => {
	return (
		<Fragment>
			<Wrapper>
				<WrapperRotate>
					<LogoImage src={image} />
				</WrapperRotate>
				<Text>
					Estamos <Span primary>buscando ...</Span> <br />
					espera un <Span>poco</Span>más<Span primary> Ü</Span>
				</Text>
			</Wrapper>
		</Fragment>
	);
};

export default Loading;
