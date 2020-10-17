import React, { Fragment } from "react";
import styled from "styled-components";

import SearchLeft from "../components/SearchLeft";
import SearchRight from "../components/SearchRight";

import { OptButton } from "../components/OptButton";
import Menu from "../components/Menu";
import Link from "next/link";

const Wrapper = styled.div`
	width: 100vw;
	display: flex;
`;

<<<<<<< HEAD
const WrapperLeft = styled.div`
	width: 50vw;
`;



const name = "../images/giftu.png";
const LogoName = styled.img`
	padding: 10px;
	height: 37px;
	width: auto;
`;

const WrapperMainText = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 80vh;
`;

const MainText = styled.h1`
	text-align: center;
	color: black;
	font-size: 40px;
	font-family: "Quicksand";
`;

const imgFooter = "../images/footer.png";
const ImgSearch = styled.img`
	height: auto;
	width: 33vw;
`;

const WrapperRight = styled.div`
	width: 50vw;
	background-color: #f7fff4;
	height: 100vh;
`;

const WrappperMenu = styled.div`
	display: flex;
	justify-content: flex-end;
	height: 15vh;
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
	width: 30vh;
	display: flex;
	justify-content: space-around;
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
	width: 18vw;
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
	// margin-right: -70px;
`;

const WrapperLabels = styled.div`
	display: flex;
	flex-direction: column;
`;

const WrapperLabel = styled.div`
	display: flex;
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

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;
const AncorImg = styled.a`
	cursor:pointer;
`

=======
>>>>>>> 4aa4deeac24a466d5b48b975f9612cfeccf218fd
const Search = () => {
	return (
		<Fragment>
			<Wrapper>
<<<<<<< HEAD
				<WrapperLeft>
					<Link href="/">
						<AncorImg> <LogoName src={name} /> </AncorImg>
					</Link>
					<WrapperMainText>
						<MainText>
							CUEN<Span primary>T</Span>AME UN POCO M<Span>Á</Span>S:
						</MainText>
					</WrapperMainText>
					<ImgSearch src={imgFooter} />
				</WrapperLeft>
				<WrapperRight>
					<WrappperMenu>
						<Menu />
					</WrappperMenu>
					<WrapperForm>
						<WrapperGender>
							<TextGender>
								<Span primary>G</Span>énero:
							</TextGender>
							<WrapperImg>
								<OptButton src="/images/she-opt.png" />
								<OptButton src="/images/he-opt.png" />
							</WrapperImg>
						</WrapperGender>
						<WrapperOccacion>
							<TextOccacion>
								O<Span>c</Span>ación:
							</TextOccacion>
							<SelectOccacion>
								<option value="Bautizo">Bautizo</option>
								<option value="Boda">Boda</option>
								<option value="Navidad">Navidad</option>
								<option value="Aniversario" selected>
									Aniversario
								</option>
							</SelectOccacion>
						</WrapperOccacion>
						<WrapperPerfiles>
							<TextPerfiles>
								Pe<Span primary>r</Span>files:
							</TextPerfiles>
							<WrapperLabels>
								<WrapperLabel>
									<LabelRS src={imgFB} />
									<InputRS></InputRS>
								</WrapperLabel>
								<WrapperLabel>
									<LabelRS src={imgInt} />
									<InputRS></InputRS>
								</WrapperLabel>
							</WrapperLabels>
						</WrapperPerfiles>
						<WrapperButtom>
							<BaseButton>
								EN<Span primary>V</Span>IAR
							</BaseButton>
						</WrapperButtom>
					</WrapperForm>
				</WrapperRight>
=======
				<SearchLeft />
				<SearchRight />
>>>>>>> 4aa4deeac24a466d5b48b975f9612cfeccf218fd
			</Wrapper>
		</Fragment>
	);
};

export default Search;
