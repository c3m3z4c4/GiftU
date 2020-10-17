import styled from "styled-components";

const WrapperRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 50vw;
	height: 100vh;
	background-color: #f7fff4;
	margin: -8px -19px;
`;

const LogoImage = styled.img`
	width: 120px;
	margin: -60px 0 30px 0;
`;

const imgLogo = "../images/logo.png";

const WrapperSign = styled.div`
	display: flex;
	justify-content: space-between;
	width: 20vw;
`;

const ButtonSignIn = styled.button`
	width: 9vw;
	height: 50px;
	font-weight: bold;
	background: transparent;
	border: none;
	border-bottom: 2px solid rgba(135, 211, 184, 0.6);
	font-family: "Quicksand", sans-serif;
	font-size: 25px;
`;

const ButtonSignUp = styled.button`
	width: 9vw;
	font-weight: bold;
	font-family: "Quicksand", sans-serif;
	background: transparent;
	border: none;
	border-bottom: 2px solid rgba(114, 102, 102, 0.45);
	font-family: "Quicksand", sans-serif;
	font-size: 25px;
	color: #726666;
`;

const WrapperInput = styled.div`
	display: flex;
	margin-top: 80px;
	flex-direction: column;
	align-items: flex-start
`;

const LabelText = styled.label`
	font-family: "Quicksand", sans-serif;
	color: #87d3b8;
	margin-bottom: 1em;
	margin-left: 1em;

`;

const LabelImg = styled.img`
	width: 20px;
	height: 20px;
	margin-left: 10px;
`;

const email = "../images/mail.png";

const LabelInput = styled.input`
	width: 20vw;
	height: 3vh;
	background: transparent;
	border: none;
	border-bottom: 2px solid rgba(135, 211, 184, 0.6);
	font-family: "Quicksand", sans-serif;
	font-size: 14px;
	line-height: 15px;
	color: #ffab07;

	&:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}
`;

const LabelTextPass = styled.label`
	font-family: "Quicksand", sans-serif;
	color: #87d3b8;
	margin-bottom: 1em;
	margin-left: 1em;
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
	font-family: "Quicksand", sans-serif;
	font-size: 14px;
	line-height: 15px;
	color: #ffab07;

	&:focus,
	textarea:focus,
	select:focus {
		outline: none;
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
	font-weight: bold;
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
	box-shadow: 3px 8px 5px -2px rgba(0, 0, 0, 0.47);
`;

const WrapperSingRD = styled.div`
	display: flex;
	justify-content: space-between;
	width: 20vw;
`;

const FBLogo = "../images/facebook.png";
const FbLogo = styled.img`
	margin-left: 5px;
`;

const FBButton = styled.button`
	width: 186px;
	height: 40px;
	background: #4d62af;
	border: none;
	box-sizing: border-box;
	border-radius: 12px;
	transform: matrix(1, 0, 0, 1, 0, 0);
	font-weight: bold;
	font-size: 18px;
	line-height: 14px;
	display: flex;
	align-items: center;
	letter-spacing: 0.11em;
	font-family: "Quicksand", sans-serif;
	display: flex;
	justify-content: center;
	color: white;
	margin-top: 30px;
	box-shadow: 3px 8px 5px -2px rgba(0, 0, 0, 0.47);
`;

const GoLogo = "../images/google.png";
const GLogo = styled.img`
	margin-left: 5px;
`;
const GooButton = styled.button`
	width: 182px;
	height: 40px;
	background: #f6f6f6;
	border: none;
	box-sizing: border-box;
	border-radius: 12px;
	transform: matrix(1, 0, 0, 1, 0, 0);
	font-weight: bold;
	font-size: 18px;
	line-height: 14px;
	display: flex;
	align-items: center;
	letter-spacing: 0.11em;
	font-family: "Quicksand", sans-serif;
	display: flex;
	justify-content: center;
	color: #726666;
	margin-top: 30px;
	box-shadow: 3px 8px 5px -2px rgba(0, 0, 0, 0.47);
`;

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
	color: ${(props) => (props.disabled ? "#726666": "")};
`;

export {
	WrapperRight,
	LogoImage,
	imgLogo,
	WrapperSign,
	ButtonSignIn,
	ButtonSignUp,
	WrapperInput,
	LabelText,
	LabelImg,
	email,
	LabelInput,
	LabelTextPass,
	LabelImgPass,
	LabelInputPass,
	pass,
	BaseButton,
	WrapperSingRD,
	FBLogo,
	FbLogo,
	FBButton,
	GoLogo,
	GLogo,
	GooButton,
	Span,
};
