import styled from "styled-components";

const WrapperView = styled.div`
	display: flex;
	width: 100vw;
	background: rgba(196, 196, 196, 0.6);
	height: 100vh;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 99999999;
`;

const WrapperModal = styled.div`
	min-width: 40vw;
	min-height: 400px;
	box-shadow: 2px 10px 15px 0px rgba(0, 0, 0, 0.17);
	background: white;
	border-radius: 30px;
	@media (max-width: 768px) {
		min-width: 90%;
	}
`;

const WrapperBtnClose = styled.div`
	display: flex;
	justify-content: flex-end;
	min-height: 50px;
	align-items: center;
	padding: 5px 20px;
`;

const BtnClose = styled.button`
	background-color: transparent;
	border: none;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	padding: 8px;
`;

const WrapperInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 300px;
	justify-content: space-between;
`;

const TextQuestion = styled.p`
	font-family: Quicksand, sans-serif;
	font-size: 18px;
	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

const CloseIcon = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const TextComent = styled.p`
	font-family: Quicksand, sans-serif;
	font-size: 18px;
	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

const GoHome = styled.p`
	font-family: Quicksand, sans-serif;
	color: #fbcf39;
	font-weight: 600;
	font-size: 14px;
	cursor: pointer;
	letter-spacing: 1px;
	text-transform: uppercase;
	&:hover {
		text-decoration: underline;
		color: #87d3b8;
	}
	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

const TextWrite = styled.input`
	width: 80%;
	border: none;
	border-bottom: 2px solid #ffab07;
	font-family: Quicksand, sans-serif;
	font-size: 18px;
	color: #ffab07;
	padding: 10px 0;
	margin-bottom: 25px;
	&:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}
	@media (max-width: 425px) {
		width: 80%;
		height: 16%;
	}
`;

const DetailsWrapper = styled.div`
	font-family: Quicksand, sans-serif;
	width: 100%;
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;
	@media (max-width: 768px) {
		flex-wrap: wrap;
	}
`;
const LeftDetails = styled.div`
	width: 50%;
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background: rgba(160, 221, 199, 0.25);
	@media (max-width: 768px) {
		width: 100%;
		height: 40vh;
		padding: 50px;
	}
	@media (max-width: 425px) {
		padding: 0;
	}
`;
const RightDetails = styled(LeftDetails)`
	background: #ffffff;
	width: 50%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 768px) {
		width: 100%;
		height: 100%;
		padding: 0;
	}
`;

const MainImageContainer = styled.div`
	width: 480px;
	height: 400px;
	position: relative;
	border-radius: 10px;
	box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.09);
	display: flex;
	align-items: center;
	background: transparent;
	position: relative;
	margin-bottom: 40px;
	@media (max-width: 768px) {
		margin: 0 auto;
		width: 320px;
		height: 320px;
		position: relative;
		display: flex;
		border-radius: 10px;
		align-items: center;
		justify-content: center;
		margin-bottom: 0px;
	}
	@media (max-width: 425px) {
		width: 110px;
		height: auto;
		padding: 20px 0;
	}
`;
const MainImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const DecorativeImage = styled.img`
	width: 90px;
	height: 95px;
	position: absolute;
	bottom: -35px;
	right: -45px;
	@media (max-width: 768px) {
		width: 106.85px;
		height: 102.24px;
	}
	@media (max-width: 425px) {
		width: 62.85px;
		height: auto;
		bottom: -15px;
		right: -25px;
	}
`;

const InformationContainer = styled.div`
	height: auto;
	width: 80%;
	padding: 16px;
	background: rgba(255, 171, 7, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 768px) {
		width: 100%;
		padding: 0px;
		height: 100%;
	}
	@media (max-width: 425px) {
		width: 100%;
		height: 100%;
	}
`;

const CommentContainer = styled.div`
	width: 44%;
	height: 40%;
	background: rgba(255, 171, 7, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: 768px) {
		width: 100%;
		height: 40vh;
	}
`;
const TitleDetails = styled.p`
	font-family: Quicksand;
	font-style: normal;
	text-transform: uppercase;
	color: #87d3b8;
	text-align: center;
	margin: 0;
	height: auto;
	max-width: 80%;
	margin: 8px;
	font-size: 18px;
	font-weight: bold;
`;

const LineImage = styled.img`
	width: 50px !important;
	height: auto !important;
`;
const DetailsInformation = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: auto;
	margin: 20px;
	justify-content: center;
	@media Screen and (max-width: 768px) {
		width: 100%;
	}
	@media Screen and (max-width: 425px) {
		width: 100%;
	}
`;
const DetailItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: calc(100% - 60px);
	@media Screen and (max-width: 768px) {
		width: 100%;
		min-height: 50px;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;

const DetailItemTitle = styled.p`
	font-family: Quicksand;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	letter-spacing: 1px;
	color: #726666;
	width: calc(100% / 2);
	text-align: center;
	@media Screen and (max-width: 425px) {
		font-weight: 300;
		margin: 0;
		width: 100%;
		font-size: 12px;
	}
`;
const DetailItemContent = styled.p`
	font-family: Quicksand;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	color: #726666;
	width: calc(100% / 2);
	text-align: center;
	@media Screen and (max-width: 425px) {
		margin: 0;
		width: 100%;
		font-size: 10px;
	}
`;
const DetailButton = styled.button`
	font-family: Quicksand;
	font-style: normal;
	outline: none;
	max-width: 280px;
	max-height: 80px;
	font-weight: 500;
	font-size: 14px;
	line-height: 19px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.15em;
	color: #f6f6f6;
	padding: 24px;
	background: #87d3b8;
	border-radius: 10px;
	border: none;
	cursor: pointer;
	transition: transform 0.2s ease;
	outline: none;
	&:hover {
		background-color: #ffab07;
		transform: scale(1.1);
		opacity: 1;
		&:active {
			transform: scale(0.9);
		}
	}
	@media Screen and (max-width: 768px) {
		margin-bottom: 10px;
		padding: 12px;
		font-size: 12px;
	}
`;

const ColorLetter = styled.span`
	color: ${(props) => (props.blue ? "#87D3B8" : "#FFAB07")};
`;

const Star = styled.div`
	background: #ffab07;
	clip-path: polygon(
		50% 0%,
		61% 35%,
		98% 35%,
		68% 57%,
		79% 91%,
		50% 70%,
		21% 91%,
		32% 57%,
		2% 35%,
		39% 35%
	);
	display: inline-block;
	height: 20px;
	width: 20px;
	transition: transform 0.2s ease-in-out;
	&:hover {
		background: gold;
		transform: scale(1.1);
		opacity: 1;
		&:active {
			transform: scale(0.9);
		}
	}
	@media Screen and (max-width: 768px) {
		height: 15px;
		width: 15px;
	}
`;

const Stars = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: calc(100% - 80px);
	margin: 0px 40px;
`;
export {
	DetailsWrapper,
	LeftDetails,
	RightDetails,
	MainImageContainer,
	MainImage,
	DecorativeImage,
	InformationContainer,
	ColorLetter,
	TitleDetails,
	LineImage,
	DetailsInformation,
	DetailItem,
	DetailItemTitle,
	DetailItemContent,
	DetailButton,
	WrapperView,
	WrapperModal,
	WrapperBtnClose,
	BtnClose,
	WrapperInfo,
	TextQuestion,
	Stars,
	Star,
	TextComent,
	TextWrite,
	CloseIcon,
	CommentContainer,
	GoHome,
};
