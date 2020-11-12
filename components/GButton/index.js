import React from "react";
import { Button, ImageBtn } from "./styles";

export const GButton = (props) => (
	<Button>
		{props.title} <ImageBtn src={props.src} />
	</Button>
);
