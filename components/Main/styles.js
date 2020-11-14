import styled from "styled-components";

const HomeWrapper = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;
const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: Quicksand;
`;

const WrapperTitle = styled.div`
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const Title = styled.h1`
	text-align: center;
	color: black;
	font-size: 50px;
	font-family: Quicksand;
	@media (max-width: 425px) {
		font-size: 35px;
		font-weight: 400;
	}
`;

const WrapperGifts = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100vw;
	@media (max-width: 425px) {
		flex-direction: column;
	}
`;

const Wrappergift = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: Quicksand;
`;

const GiftTitle = styled.a`
	text-align: center;
	font-size: 15px;
	color: black;
	font-family: Quicksand;
	cursor: pointer;
	margin: 0;
	margin-bottom: 15px;
	transition: transform 0.2s ease;
	&:hover {
		transform: scale(1.3);
		opacity: 1;
	}
	&:active {
		transform: scale(0.8);
	}
	@media (max-width: 425px) {
		margin-top: 20px;
	}
`;

const ColorLine = styled.button`
	width: 230px;
	height: 6px;
	background: white;
	background: linear-gradient(90deg, #ffab07 60%, white 60%);
	background: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
	border: ${(props) =>
		props.primary ? "1px solid #ffab07" : "1px solid #87d3b8"};
	cursor: pointer;
	transition: transform 0.2s ease;
	&:hover {
		transform: scale(1.2);
		opacity: 1;
	}
	&:active {
		transform: scale(0.8);
	}
`;

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

const LinkButton = styled.button`
	background: transparent;
	box-shadow: none;
	font-size: 15px;
	border: 0;
	outline: none;
	text-align: center;
	color: black;
	font-family: Quicksand;
	cursor: pointer;
	margin: 0;
	transition: transform 0.2s ease;
	&:hover {
		transform: scale(1.3);
		opacity: 1;
	}
	&:active {
		transform: scale(0.8);
	}
	@media (max-width: 425px) {
		margin-top: 0px;
		padding: 0px;
	}
`;

const LinkLineButton = styled.button`
	background: transparent;
	box-shadow: none;
	font-size: 15px;
	border: 0;
	outline: none;
	text-align: center;
	color: black;
	font-family: Quicksand;
	cursor: pointer;
	margin: 0;
	transition: transform 0.2s ease;
	&:hover {
		transform: scale(1);
		opacity: 1;
	}
	&:active {
		transform: scale(0.95);
	}
`;

export {
	Wrapper,
	WrapperTitle,
	Title,
	WrapperGifts,
	Wrappergift,
	GiftTitle,
	ColorLine,
	Span,
	HomeWrapper,
	LinkButton,
	LinkLineButton,
};
