import styled from "styled-components";

const WrapperLeft = styled.div`
	width: 50%;
	@media (max-width: 768px) {
		width: 100%;
		height: 30vh;
	}
`;

const LogoName = styled.img`
	padding: 10px;
	height: 37px;
	width: auto;
`;

const nameLogo = "../images/giftu.png";

const AncorImage = styled.a`
	cursor: pointer;
`;

const WrapperTextFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	height: 100%;
	justify-content: center;
	position: relative;
`;

const MainText = styled.h1`
	font-family: Quicksand, sans-serif;
	font-size: 40px;
	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

const BaseFooter = styled.img`
	height: auto;
	width: 33vw;
	position: absolute;
	bottom: 0;
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
