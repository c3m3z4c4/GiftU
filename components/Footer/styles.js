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
	cursor: pointer;
`;

const ImageFooter = styled.img`
	height: auto;
	width: 100vw;
	margin-top: 3em;
`;

export { Wrapper, WrapperLogin, Cuenta, LinkLogin, ImageFooter };
