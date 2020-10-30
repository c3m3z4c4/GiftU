import React, { Fragment } from "react";
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

const AboutRight = () => {
	return (
		<Fragment>
			<WrapperRight>
				<Wrapper>
					<ImageAbout src={fotoCM} alt="Foto de César Meza" />
					<WrapperDetails>
						<TitleDetails>César Meza</TitleDetails>
						<TitleRole>Fullstack Developer</TitleRole>
						<GitHub href="https://github.com/cemeza">Mis repositorios</GitHub>
						<LinkedIn href="https://www.linkedin.com/in/cesarmeza80/">
							Más sobre mi
						</LinkedIn>
					</WrapperDetails>
				</Wrapper>
				<Wrapper>
					<ImageAbout src={fotoJ} alt="Foto de Jorge Argüelles" />
					<WrapperDetails>
						<TitleDetails>Jorge Argüelles</TitleDetails>
						<TitleRole>Fullstack Developer</TitleRole>
						<GitHub href="https://github.com/jorgearguellles">
							Mis repositorios
						</GitHub>
						<LinkedIn href="https://www.linkedin.com/in/jorge-argüelles-a8303056/">
							Más sobre mi
						</LinkedIn>
					</WrapperDetails>
				</Wrapper>
				<Wrapper>
					<ImageAbout src={fotoR} alt="Foto de Rafael lagunas" />
					<WrapperDetails>
						<TitleDetails>Rafael Lagunas</TitleDetails>
						<TitleRole>Back-end Developer</TitleRole>
						<GitHub href="https://www.linkedin.com/in/rafaellagunas/">
							Mis repositorios
						</GitHub>
						<LinkedIn href="https://github.com/rafastaria">
							Más sobre mi
						</LinkedIn>
					</WrapperDetails>
				</Wrapper>
			</WrapperRight>
		</Fragment>
	);
};
export default AboutRight;
