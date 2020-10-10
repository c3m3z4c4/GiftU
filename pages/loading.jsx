import React, { Fragment } from "react";

import { Logo, Container, Texto, ButLoading, Span } from "../styles/Loading";

const Loading = () => {
	return (
		<Fragment>
			<Container>
				<Logo>
					<img className="logo-image" src="/images/logo.png" />
				</Logo>
				<ButLoading />
				<Texto>
					Estamos <Span primary>buscando ...</Span>
					<br />
					espera un <Span>poco</Span> más <Span primary>Ü</Span>
				</Texto>
			</Container>
		</Fragment>
	);
};

export default Loading;
