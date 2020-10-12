import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
`;

const WrapperMenu = styled.div`
	display: flex;
	align-items: center;
`;

const Menu = styled.span`
	font-size: 30px;
	font-family: "Quicksand";
	color: #87d3b8;
`;

const LogoImage = styled.img`
	padding: 10px 25px;
	height: 60px;
	width: auto;
`;

const LogoName = styled.img`
	padding: 10px;
	height: 37px;
	width: auto;
`;
const image = "../images/logo.png";
const name = "../images/giftu.png";

const Header = () => {
	return (
		<Fragment>
			<Wrapper>
				<LogoName src={name} />
				<WrapperMenu>
					<Menu>MENU</Menu>
					<LogoImage src={image} />
				</WrapperMenu>
			</Wrapper>
		</Fragment>
	);
};

export default Header;
