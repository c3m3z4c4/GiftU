import React from "react";
import {
	PodiumComponent,
} from "../Containers/PodiumContainer/index";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const PodiumPage = () => {
	return (
		<Wrapper>
			<PodiumComponent />
		</Wrapper>
	);
};

export default PodiumPage;
