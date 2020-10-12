import React, { Fragment } from "react";

import { Logo, Container, Text, ButLoading, Span } from "../styles/Loading";
import { GlobalStyle } from "../styles/GlobalStyle.jsx";

const Loading = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Container>
				<Logo>
					<img className="logo-image" src="/images/logo.png" />
				</Logo>
				<ButLoading />
				<Text>
					Estamos <Span primary>buscando ...</Span>
					<br />
					espera un <Span>poco</Span> más <Span primary>Ü</Span>
				</Text>
			</Container>
		</Fragment>
	);
};

export default Loading;
