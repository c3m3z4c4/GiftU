import React, { Fragment } from "react";
import styled from "styled-components";

const LogoName = styled.img`
	padding: 10px;
	height: 5vh;
	width: auto;
`;

const nameLogo = "../images/giftu.png";

const WrapperSeccion = styled.section`
	width: 100vw;
	display: flex;
	justify-content: space-around;
`;

const WrapperLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const MainText = styled.h1`
	font-family: "Quicksand", sans-serif;
	font-size: 40px;
	margin: 29vh 0px;
`;

const BaseFooter = styled.img`
	padding: 10px;
	height: auto;
	width: 33vw;
`;

const imgFooter = "../images/footer.png";

const WrapperRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
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
	border-bottom: 2px solid rgba(135, 211, 184, 0.6);
	font-family: "Quicksand", sans-serif;
	font-size: 25px;
`;

const WrapperInput = styled.div`
	display: flex;
	margin-top: 40px;
`;

const LabelText = styled.label`
	font-family: "Quicksand", sans-serif;
	color: #87d3b8;
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
	width: 30vw;
`;

const FbLogo = "../images/facebook.png";

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
`;

const SignIn = () => {
	return (
		<Fragment>
			<LogoName src={nameLogo} />
			<WrapperSeccion>
				<WrapperLeft>
					<MainText>
						Tu eliges <Span primary>a quién,</Span>
						<br />
						nosotros encontramos <br />
						<Span>el regalo perfecto.</Span>
					</MainText>
					<BaseFooter src={imgFooter} />
				</WrapperLeft>
				<WrapperRight>
					<LogoImage src={imgLogo} />
					<WrapperSign>
						<ButtonSignIn>
							Sign <Span primary>In</Span>
						</ButtonSignIn>
						<ButtonSignUp>
							Sign <Span primary>Up</Span>
						</ButtonSignUp>
					</WrapperSign>
					<WrapperInput>
						<LabelText>Email</LabelText>
						<LabelImg src={email} />
					</WrapperInput>
					<LabelInput></LabelInput>
					<WrapperInput>
						<LabelTextPass>Password</LabelTextPass>
						<LabelImgPass src={pass} />
					</WrapperInput>
					<LabelInputPass></LabelInputPass>
					<BaseButton>Sing In</BaseButton>
					<WrapperSingRD>
						<FBButton src={FbLogo}>Sing in with</FBButton>
						<GooButton>Sing in with</GooButton>
					</WrapperSingRD>
				</WrapperRight>
			</WrapperSeccion>
		</Fragment>
	);
};

export default SignIn;
