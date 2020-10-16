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
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 50vw;
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
	width: 50vw;
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
	width: 30vw;
`;

const ButtonSignIn = styled.input`
	line-height: 30px;
	font-weight: bold;
	font-size: 18px;
	font-family: "Quicksand", sans-serif;
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

const ButtonSignUp = styled.input`
	line-height: 30px;
	font-weight: bold;
	font-size: 18px;
	font-family: "Quicksand", sans-serif;
	width: 10vw;
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

const WrapperInput = styled.div`
	display: flex;
	margin-top: 30px;
`;

const LabelText = styled.p`
	font-family: "Quicksand", sans-serif;
	color: #87d3b8;
`;

const LabelImg = styled.img`
	width: 20px;
	height: 20px;
	margin: 14px 0 0 10px;
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

const LabelTextPass = styled.p`
	font-family: "Quicksand", sans-serif;
	color: #87d3b8;
`;

const LabelImgPass = styled.img`
	width: 20px;
	height: 20px;
	margin: 12px 0 0 10px;
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
						<ButtonSignIn value="SingIn" />
						<ButtonSignUp value="SingUp" />
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
					<BaseButton value="SingIn" />
					<WrapperSingRD>
						<FBButton value="SingIn" />
						<GooButton />
					</WrapperSingRD>
				</WrapperRight>
			</WrapperSeccion>
		</Fragment>
	);
};

export default SignIn;
