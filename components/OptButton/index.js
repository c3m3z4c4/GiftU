import React from "react";
import styled from "styled-components";
import { Button } from "./styles";

const GenderIcon = styled.img`
	width: 40px;
	height: auto;
`;

export const OptButton = (props) => (
	<Button>
		<GenderIcon src={props.src} />
	</Button>
);
