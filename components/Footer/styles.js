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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const Cuenta = styled.p`
	font-size: 20px;
	font-weight: bold;
	color: #fbcf39;
`;

const LinkLogin = styled.a`
	color: darkcyan;
	font-size: 16px;
	cursor: pointer;
	text-decoration: underline;
	letter-spacing: 1px;
	&:hover {
		transform: scale(1.5);
		opacity: 1;
	}
`;

const ImageFooter = styled.img`
	height: auto;
	width: 100vw;
`;

export { Wrapper, WrapperLogin, Cuenta, LinkLogin, ImageFooter };
