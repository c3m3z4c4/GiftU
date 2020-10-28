import styled from "styled-components";

const WrapperRight = styled.div`
	width: 50%;
	background: rgba(160, 221, 199, 0.25);
	height: 100vh;
	@media (max-width: 425px) {
		width: 100%;
	}
`;

const WrappperMenu = styled.div`
	display: flex;
	justify-content: flex-end;
	height: 15vh;
	@media (max-width: 425px) {
		height: 0;
	}
`;

const WrapperForm = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const WrapperGender = styled.div`
	height: 20vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const TextGender = styled.p`
	text-align: center;
	font-size: 23px;
	font-family: "Quicksand";
`;

const WrapperImg = styled.div`
	display: flex;
	justify-content: space-around;
	width: 50%;
    justify-content: space-around;
    align-items: center;
`;

const WrapperOccacion = styled.div`
	height: 20vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const TextOccacion = styled.p`
	text-align: center;
	font-size: 23px;
	font-family: "Quicksand";
	align-items: center;
`;

const SelectOccacion = styled.select`
	width: 50%;
	background: transparent;
	border: none;
	border-bottom: 2px solid rgba(135, 211, 184, 0.6);
	font-family: "Quicksand", sans-serif;
	font-size: 14px;
	line-height: 17px;
	color: #ffab07;
	padding: 10px 0;

	&:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}
`;

const WrapperPerfiles = styled.div`
	height: 18vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const TextPerfiles = styled.p`
	justify-content: center;
	text-align: center;
	font-size: 23px;
	font-family: "Quicksand";
	margin-right: 61px;
`;

const WrapperLabels = styled.div`
	display: flex;
	flex-direction: column;
`;

const WrapperLabel = styled.div`
	display: flex;
	margin-bottom: 40px;
`;

const imgInt = "../images/instagram-search.png";
const imgFB = "../images/fb-search.png";
const LabelRS = styled.img`
	width: 35px;
	height: 35px;
	margin-right: 30px;
	margin-left: -70px;
`;

const InputRS = styled.input`
	width: 18vw;
	background: transparent;
	border: none;
	border-bottom: 2px solid rgba(135, 211, 184, 0.6);
	font-family: "Quicksand", sans-serif;
	font-size: 20px;
	color: #ffab07;
	margin: 10px 0;

	&:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}
`;

const WrapperButtom = styled.div`
	display: flex;
	justify-content: center;
`;

const BaseButton = styled.button`
	width: 124.16px;
	height: 34.58px;
	background: #87d3b8;
	border: none;
	box-sizing: border-box;
	border-radius: 12px;
	transform: matrix(1, 0, 0, 1, 0, 0);
	font-size: 18px;
	line-height: 14px;
	display: flex;
	align-items: center;
	letter-spacing: 0.11em;
	font-family: "Quicksand", sans-serif;
	display: flex;
	justify-content: center;
	color: white;
	margin-top: 50px;
	box-shadow: 3px 8px 5px -2px rgba(0, 0, 0, 0.07);
`;

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

export {
	WrapperRight,
	WrappperMenu,
	WrapperForm,
	WrapperGender,
	TextGender,
	WrapperImg,
	WrapperOccacion,
	TextOccacion,
	SelectOccacion,
	WrapperPerfiles,
	TextPerfiles,
	WrapperLabels,
	WrapperLabel,
	imgInt,
	imgFB,
	LabelRS,
	InputRS,
	WrapperButtom,
	BaseButton,
	Span,
};
