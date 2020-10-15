import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
`;

const WrapperImageLine = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LogoImage = styled.img`
	height: 150px;
	width: auto;
	margin: 50px;
`;

const ColorLine = styled.button`
	border-radius: 50px;
	border: 1px solid #87d3b8;
	width: 230px;
	height: 10px;
	background: white;
	background: linear-gradient(90deg, #ffab07 60%, white 60%);
`;

const Text = styled.p`
	text-align: center;
	font-size: 30px;
	font-family: "Quicksand";
`;

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

export { Wrapper, WrapperImageLine, LogoImage, ColorLine, Text, Span };
