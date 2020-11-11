import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 200px;
`;

const Text = styled.h1`
	margin-bottom: 0;
	text-align: center;
	color: black;
	font-size: 30px;
	font-family: "Quicksand";
	@media (max-width: 425px) {
		font-size: 35px;
		font-weight: 400;
	}
`;

const AnchorHome = styled.a`
	font-size: 20px;
	color: black;
	text-decoration: none;
	font-family: Quicksand;
	cursor: pointer;
	margin: 10px;
	transition: transform 0.2s ease-in-out;
	&:hover {
		color: #ffab07;
		transform: scale(1.2);
		opacity: 1;
	}
`;

export default function Custom404() {
	return (
		<Fragment>
			<Wrapper>
				<Text>
					Hmmmm.....! <br />
					no encontramos la página que buscas
				</Text>
				<AnchorHome href="/">Regresa a la página principal</AnchorHome>
			</Wrapper>
		</Fragment>
	);
}
