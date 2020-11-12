import styled from "styled-components";
import { keyframes } from "styled-components";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const WrapperRotate = styled.div`
	display: inline-block;
	animation: ${rotate} 2s linear infinite;
	padding: 2rem 1rem;
	font-size: 1.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LogoImage = styled.img`
	height: 150px;
	width: auto;
	margin: 50px;
`;

const Text = styled.p`
	text-align: center;
	font-size: 30px;
	font-family: Quicksand;
`;

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

export { Wrapper, WrapperRotate, LogoImage, Text, Span };
