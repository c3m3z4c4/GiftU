import React, { Fragment } from "react";
import styled from "styled-components";

import {
	Wrapper,
	WrapperLeft,
	ImageAbout,
	WrapperDetails,
	TitleDetails,
	TitleRole,
	GitHub,
	LinkedIn,
} from "./styles";

const fotoS = "../images/fotoSue.jpg";
const fotoF = "../images/fotoFrancisco.jpg";
const fotoCS = "../images/fotoCesarS.jpg";

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

const AboutLeft = () => {
	return (
		<Fragment>
			<WrapperLeft>
				<Wrapper>
					<ImageAbout src={fotoS} alt="Foto de Sue" />
					<WrapperDetails>
						<TitleDetails>
							Sue H<Span primary>e</Span>rrera
						</TitleDetails>
						<TitleRole>Front-end Developer</TitleRole>
						<GitHub href="https://github.com/sueherrera30">
							Mis repositorios
						</GitHub>
						<LinkedIn href="https://www.linkedin.com/in/sue-herrera-443441146/">
							Más sobre mi
						</LinkedIn>
					</WrapperDetails>
				</Wrapper>
				<Wrapper>
					<ImageAbout src={fotoF} alt="Foto de Francisco" />
					<WrapperDetails>
						<TitleDetails>
							Francisco Garc<Span>i</Span>a
						</TitleDetails>
						<TitleRole>Data Scientist</TitleRole>
						<GitHub href="https://github.com/pmsorion">Mis repositorios</GitHub>
						<LinkedIn href="http://linkedin.com/in/francisco-garcia-983304122">
							Más sobre mi
						</LinkedIn>
					</WrapperDetails>
				</Wrapper>
				<Wrapper>
					<ImageAbout src={fotoCS} alt="Foto de César Salas" />
					<WrapperDetails>
						<TitleDetails>
							César S<Span primary>a</Span>las
						</TitleDetails>
						<TitleRole>Back-end Developer</TitleRole>
						<GitHub href="https://github.com/cesarsalasmx">
							Mis repositorios
						</GitHub>
						<LinkedIn href="https://www.linkedin.com/in/cesarsalasmx/">
							Más sobre mi
						</LinkedIn>
					</WrapperDetails>
				</Wrapper>
			</WrapperLeft>
		</Fragment>
	);
};

export default AboutLeft;
