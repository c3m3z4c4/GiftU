import styled from "styled-components";

const WrapperLeft = styled.div`
	width: 50vw;
`;

const name = "../images/giftu.png";
const LogoName = styled.img`
	padding: 10px;
	height: 37px;
	width: auto;
`;
const AncorImg = styled.a`
	cursor:pointer;
`
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
	font-family: "Quicksand";
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
};
