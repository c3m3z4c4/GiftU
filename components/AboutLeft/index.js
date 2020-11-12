import React, { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";
import { LogoName, AncorImg } from "../SearchLeft/styles";

import {
	Wrapper,
	WrapperLink,
	WrapperLeft,
	ImageAbout,
	WrapperDetails,
	TitleDetails,
	TitleRole,
	GitHub,
	LinkedIn,
} from "./styles";

const name = "../images/iconBack.png";

const fotoS = "../images/fotoSue.jpg";
const fotoF = "../images/fotoFrancisco.jpg";
const fotoCS = "../images/fotoCesarS.jpg";

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

const AboutLeft = () => {
	return (
		<Fragment>
			<WrapperLink>
				<Link href="/">
					<AncorImg>
						<LogoName src={name} />
					</AncorImg>
				</Link>
			</WrapperLink>
			<WrapperLeft>
				<Wrapper>
					<ImageAbout src={fotoS} alt="Foto de Sue" />
					<WrapperDetails>
						<TitleDetails>
							Sue H<Span primary>e</Span>rrera
						</TitleDetails>
						<TitleRole>Front-end Developer</TitleRole>
						<GitHub href="https://github.com/sueherrera30" target="_blank">
							Mis repositorios
						</GitHub>
						<LinkedIn
							href="https://www.linkedin.com/in/sue-herrera-443441146/"
							target="_blank"
						>
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
						<GitHub href="https://github.com/pmsorion" target="_blank">
							Mis repositorios
						</GitHub>
						<LinkedIn
							href="http://linkedin.com/in/francisco-garcia-983304122"
							target="_blank"
						>
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
						<GitHub href="https://github.com/cesarsalasmx" target="_blank">
							Mis repositorios
						</GitHub>
						<LinkedIn
							href="https://www.linkedin.com/in/cesarsalasmx/"
							target="_blank"
						>
							Más sobre mi
						</LinkedIn>
					</WrapperDetails>
				</Wrapper>
			</WrapperLeft>
		</Fragment>
	);
};

export default AboutLeft;
