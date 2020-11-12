import styled from "styled-components";

const WrapperRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 50%;
	height: 100vh;
	background: rgba(160, 221, 199, 0.25);
	@media (max-width: 768px) {
		width: 100%;
		height: 100vh;
	}
`;

const LogoImage = styled.img`
	width: 70px;
	margin: -60px 0 30px 0;
	@media (max-width: 768px) {
		margin: 0;
	}
`;

const imgLogo = "../images/logo.png";

const WrapperSign = styled.div`
	display: flex;
	justify-content: space-between;
	width: 20vw;
	@media (max-width: 768px) {
		width: 90%;
	}
`;

const WrapperLabel = styled.div`
	display: flex;
	justify-content: space-between;
	height: 20px;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const TabButton = styled.button`
	width: 9vw;
	height: 50px;
	font-weight: bolder;
	background: transparent;
	border: none;
	font-family: Quicksand, sans-serif;
	font-size: 16px;
	border-bottom: ${(props) =>
		props.tabDisabled
			? // ? "2px solid rgba(114, 102, 102, 0.15)"
			  "none"
			: "2px solid rgba(135, 211, 184, 0.6)"};
	color: ${(props) =>
		props.tabDisabled ? "rgba(114, 102, 102, 0.15)" : "#FFAB07"};
	outline: 0;
	@media (max-width: 768px) {
		width: 100%;
	}
	&:hover {
		transform: scale(1.3);
		opacity: 1;
	}
`;

const WrapperInput = styled.div`
	display: flex;
	margin-top: 80px;
	flex-direction: column;
	align-items: flex-start;
	@media (max-width: 768px) {
		width: 100%;
	}
`;
const WrappersmallerInput = styled.div`
	display: flex;
	margin-top: 40px;
	flex-direction: column;
	align-items: center;
	@media (max-width: 768px) {
		width: 100%;
	}
	input {
		width: 22vw;
		@media (max-width: 768px) {
			width: 100%;
		}
	}
	div {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
`;
const FlexInputWrapper = styled.div`
	margin-top: 16px;
	display: flex;
	width: 60%;
	justify-content: space-between;
	input {
		width: 11vw;
		@media (max-width: 768px) {
			width: 90%;
		}
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;
const LabelText = styled.label`
	font-family: Quicksand, sans-serif;
	color: #87d3b8;
	margin-bottom: 1em;
	margin-left: 1em;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const LabelImg = styled.img`
	width: 20px;
	height: auto;
	margin-left: 10px;
`;

const email = "../images/mail.png";

const LabelInput = styled.input`
	width: 20vw;
	height: 3vh;
	background: transparent;
	border: none;
	border-bottom: 2px solid rgba(135, 211, 184, 0.6);
	font-family: Quicksands, sans-serif;
	font-size: 14px;
	line-height: 15px;
	color: #ffab07;
	&:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}
	@media (max-width: 768px) {
		width: 80vw;
		text-align: center;
	}
`;

const LabelTextPass = styled.label`
	font-family: Quicksand, sans-serif;
	color: #87d3b8;
	margin-bottom: 1em;
	margin-left: 1em;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const LabelImgPass = styled.img`
	width: 20px;
	height: 20px;
	margin-left: 10px;
`;

const pass = "../images/key.png";

const LabelInputPass = styled.input`
	width: 20vw;
	height: 3vh;
	background: transparent;
	border: none;
	border-bottom: 2px solid rgba(135, 211, 184, 0.6);
	font-family: Quicksand, sans-serif;
	font-size: 14px;
	line-height: 15px;
	color: #ffab07;
	&:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}
	@media (max-width: 768px) {
		width: 80vw;
		text-align: center;
	}
`;

const BaseButton = styled.button`
	width: 124.16px;
	height: 34.58px;
	background: #87d3b8;
	border: none;
	box-sizing: border-box;
	border-radius: 12px;
	transform: matrix(1, 0, 0, 1, 0, 0);
	font-weight: 400;
	font-size: 14px;
	line-height: 14px;
	display: flex;
	align-items: center;
	letter-spacing: 0.11em;
	font-family: Quicksand, sans-serif;
	display: flex;
	justify-content: center;
	color: white;
	margin-top: 50px;
	box-shadow: 3px 8px 5px -2px rgba(0, 0, 0, 0.2);
	&:hover {
		background-color: #ffab07;
		transform: scale(1.3);
		opacity: 1;
	}
`;

const WrapperSingRD = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 65%;
	height: 100px;
`;

const FBLogo = "../images/facebook.png";
const FbLogo = styled.img`
	margin-left: 5px;
`;

const FBButton = styled.a`
	width: 170px;
	height: 40px;
	background: #4d62af;
	border: none;
	box-sizing: border-box;
	border-radius: 12px;
	transform: matrix(1, 0, 0, 1, 0, 0);
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	display: flex;
	align-items: center;
	letter-spacing: 0.11em;
	font-family: Quicksand, sans-serif;
	display: flex;
	justify-content: center;
	color: white;
	box-shadow: 3px 8px 5px -2px rgba(0, 0, 0, 0.2);
	&:hover {
		transform: scale(1.2);
		opacity: 1;
	}
`;

const GoLogo = "../images/google.png";
const GLogo = styled.img`
	margin-left: 5px;
`;
const GooButton = styled.a`
	width: 170px;
	height: 40px;
	background: #f6f6f6;
	border: none;
	box-sizing: border-box;
	border-radius: 12px;
	transform: matrix(1, 0, 0, 1, 0, 0);
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	display: flex;
	align-items: center;
	letter-spacing: 0.11em;
	font-family: Quicksand, sans-serif;
	display: flex;
	justify-content: center;
	color: #726666;
	box-shadow: 3px 8px 5px -2px rgba(0, 0, 0, 0.17);
	&:hover {
		transform: scale(1.2);
		opacity: 1;
	}
`;

export {
	WrapperRight,
	LogoImage,
	imgLogo,
	WrapperSign,
	TabButton,
	WrapperInput,
	LabelText,
	LabelImg,
	email,
	LabelInput,
	LabelTextPass,
	LabelImgPass,
	LabelInputPass,
	WrappersmallerInput,
	pass,
	BaseButton,
	WrapperSingRD,
	FBLogo,
	FbLogo,
	FBButton,
	GoLogo,
	GLogo,
	GooButton,
	FlexInputWrapper,
	WrapperLabel,
};
