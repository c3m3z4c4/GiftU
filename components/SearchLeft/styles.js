import styled from "styled-components";

const WrapperLeft = styled.div`
	width: 50%;
	@media (max-width: 425px) {
		display: none;
	}
`;

const WrapperMainImage = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	height: 60px;
	@media (max-width: 425px) {
		display: none;
	}
`;

const name = "../images/iconBack.png";
const LogoName = styled.img`
	padding: 10px;
	height: 37px;
	width: auto;
	transition: transform 0.2s ease-in-out;
	&:hover {
		transform: scale(1.4);
		opacity: 1;
	}
	&:active {
		transform: scale(0.8);
	}
`;
const AncorImg = styled.a`
	cursor: pointer;
`;
const WrapperMainText = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 85vh;
`;

const MainText = styled.h1`
	text-align: center;
	color: black;
	font-size: 40px;
	font-family: Quicksand;
	@media (max-width: 425px) {
		font-size: 20px;
	}
`;

const imgFooter = "../images/footer.png";
const ImgSearch = styled.img`
	height: auto;
	width: 33vw;
`;

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

export {
	WrapperLeft,
	name,
	LogoName,
	WrapperMainText,
	MainText,
	imgFooter,
	ImgSearch,
	Span,
	AncorImg,
	WrapperMainImage,
};
