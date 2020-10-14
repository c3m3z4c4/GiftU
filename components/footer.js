import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: "Quicksand";
`;

const WrapperLogin = styled.div`
	margin-top: 60px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const Cuenta = styled.p`
	font-size: 15px;
`;

const LinkLogin = styled.a`
	color: blue;
	font-size: 16px;
`;

const ImageFooter = styled.img`
	height: auto;
	width: 100vw;
`;

const image = "images/footer.png";

const Footer = () => {
	return (
		<Fragment>
			<Wrapper>
				<WrapperLogin>
					<Cuenta>¿Ya tienes cuenta?</Cuenta>
					<LinkLogin href="/signIn">Log in</LinkLogin>
				</WrapperLogin>
				<ImageFooter src={image} alt="footer`s image" />
			</Wrapper>
		</Fragment>
	);
};

export default Footer;
