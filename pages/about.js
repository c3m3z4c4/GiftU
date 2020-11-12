import React, { Fragment } from "react";
import styled from "styled-components";

import AboutLeft from "../components/AboutLeft";
import AboutRight from "../components/AboutRight";

const image = "images/footer.png";
const FooterImg = styled.img`
	height: auto;
	width: 100%;
	z-index: -2;
`;

const Wrapper = styled.div`
	display: flex;
	@media (max-width:425px){
	flex-direction:column;
	align-items: center;
    justify-content: center;
	}
`;

const About = () => {
	return (
		<Fragment>
			<Wrapper>
				<AboutLeft />
				<AboutRight />
			</Wrapper>
			<FooterImg src={image} />
		</Fragment>
	);
};

export default About;
