import React, { Fragment } from "react";
import styled from "styled-components";
import Menu from "../components/menu";

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
`;

const LogoName = styled.img`
	padding: 10px;
	height: 37px;
	width: auto;
`;

const name = "../images/giftu.png";

const Header = () => {
	return (
		<Fragment>
			<Wrapper>
				<LogoName src={name} />
				<Menu />
			</Wrapper>
		</Fragment>
	);
};

export default Header;
