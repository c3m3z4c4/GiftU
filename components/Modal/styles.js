import styled from "styled-components";

const WrapperView = styled.div`
	width: 100vw;
	heihgt: 100vh;
`;

const WrapperModal = styled.div`
	width: 40vw;
	heihgt: 30vh;
	margin: 25vh auto;
	box-shadow: 2px 10px 15px 0px rgba(0, 0, 0, 0.17);
`;

const WrapperBtnClose = styled.div`
	display: flex;
	justify-content: flex-end;
	color: #87d3b8;
`;

const BtnClose = styled.button`
	color: #87d3b8;
	font-family: "Quicksand", sans-serif;
	font-size: 20px;
	background-color: transparent;
	border: none;
`;

const WrapperInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TextQuestion = styled.p`
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
`;

const starts = "../images/decorative.png";
const Starts = styled.img`
	width: 4vw;
	heihgt: 4h;
`;

const TextComent = styled.p`
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
`;

const TextWrite = styled.input`
	width: 25vw;
	border: none;
	border-bottom: 2px solid #ffab07;
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
	padding: 10px 0;

	&:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}
`;

const BtnCompra = styled.button`
	width: 124.16px;
	height: 34.58px;
	background: #87d3b8;
	border: none;
	outline: none;
	box-sizing: border-box;
	border-radius: 12px;
	transform: matrix(1, 0, 0, 1, 0, 0);
	font-weight: 400;
	font-size: 18px;
	line-height: 14px;
	display: flex;
	align-items: center;
	letter-spacing: 0.11em;
	font-family: "Quicksand", sans-serif;
	display: flex;
	justify-content: center;
	color: white;
	margin: 50px;
	box-shadow: 3px 8px 5px -2px rgba(0, 0, 0, 0.47);
	transition: background 0.2s ease;
	&:hover {
		background-color: #ffab07;
		opacity: 1;
		span {
			color: #87d3b8;
		}
	}
`;

export {
	WrapperView,
	WrapperModal,
	WrapperBtnClose,
	BtnClose,
	WrapperInfo,
	TextQuestion,
	starts,
	Starts,
	TextComent,
	TextWrite,
	BtnCompra,
};
