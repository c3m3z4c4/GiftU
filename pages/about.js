import React, { Fragment } from "react";
import styled from "styled-components";

import AboutLeft from "../components/AboutLeft";
import AboutRight from "../components/AboutRight";

const image = "images/footer.png";
const FooterImg = styled.img`
	height: auto;
	width: 100vw;
	z-index: -2;
`;

const Wrapper = styled.div`
	display: flex;
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
