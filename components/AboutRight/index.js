import React, { Fragment } from "react";
import styled from "styled-components";

import {
	Wrapper,
	WrapperRight,
	ImageAbout,
	WrapperDetails,
	TitleDetails,
	TitleRole,
	GitHub,
	LinkedIn,
} from "./styles";

const fotoCM = "../images/fotoCesarM.jpg";
const fotoJ = "../images/fotoJorge.jpg";
const fotoR = "../images/fotoRafael.jpg";

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

const AboutRight = () => {
	return (
		<Fragment>
			<WrapperRight>
				<Wrapper>
					<ImageAbout src={fotoCM} alt="Foto de César Meza" />
					<WrapperDetails>
						<TitleDetails>
							César M<Span>e</Span>za
						</TitleDetails>
						<TitleRole>Fullstack Developer</TitleRole>
						<GitHub href="https://github.com/c3m3z4" target="_blank">
							Mis repositorios
						</GitHub>
						<LinkedIn
							href="https://www.linkedin.com/in/cesarmeza80/"
							target="_blank"
						>
							Más sobre mi
						</LinkedIn>
					</WrapperDetails>
				</Wrapper>
				<Wrapper>
					<ImageAbout src={fotoJ} alt="Foto de Jorge Argüelles" />
					<WrapperDetails>
						<TitleDetails>
							Jorge Arg<Span primary>ü</Span>elles
						</TitleDetails>
						<TitleRole>Fullstack Developer</TitleRole>
						<GitHub href="https://github.com/jorgearguellles" target="_blank">
							Mis repositorios
						</GitHub>
						<LinkedIn
							href="https://www.linkedin.com/in/jorge-argüelles-a8303056/"
							target="_blank"
						>
							Más sobre mi
						</LinkedIn>
					</WrapperDetails>
				</Wrapper>
				<Wrapper>
					<ImageAbout src={fotoR} alt="Foto de Rafael lagunas" />
					<WrapperDetails>
						<TitleDetails>
							Rafael Lagun<Span>a</Span>s
						</TitleDetails>
						<TitleRole>Master Coach</TitleRole>
						<GitHub href="https://github.com/rafalagunas" target="_blank">
							Mis repositorios
						</GitHub>
						<LinkedIn
							href="https://www.linkedin.com/in/rafaellagunas/"
							target="_blank"
						>
							Más sobre mi
						</LinkedIn>
					</WrapperDetails>
				</Wrapper>
			</WrapperRight>
		</Fragment>
	);
};
export default AboutRight;
