import React from "react";
import { Name, Title, TitleWrapper } from "./styles";

const TitleComponent = (props) => (
	<TitleWrapper>
		<Title>
			A <Name> {props.name} </Name> LE PUEDE GUSTAR:
		</Title>
	</TitleWrapper>
);

export default TitleComponent;
