import styled from "styled-components";

const WrapperLeft = styled.div`
	width: 50vw;
`;

const LogoName = styled.img`
	padding: 10px;
	height: 37px;
	width: auto;
`;



const nameLogo = "../images/giftu.png";

const AncorImage = styled.a`
	cursor: pointer;
`

const WrapperTextFooter = styled.div`
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
	height: auto;
	width: 33vw;
`;

const imgFooter = "../images/footerSign.png";

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

export {
	WrapperLeft,
	LogoName,
	nameLogo,
	WrapperTextFooter,
	MainText,
	BaseFooter,
	imgFooter,
	Span,
	AncorImage,
};
