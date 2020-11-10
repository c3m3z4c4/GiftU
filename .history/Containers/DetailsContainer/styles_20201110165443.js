import styled from "styled-components";
const WrapperView = styled.div `
	display: flex;
	width: 100vw;
	background: rgba(196, 196, 196, 0.6);
	height: 100vh;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
`;

const WrapperModal = styled.div `
	min-width: 40vw;
	min-height: 320px;
	box-shadow: 2px 10px 15px 0px rgba(0,0,0,0.17);
	background: white;
	border-radius: 30px;
	@media (max-width: 768px) {
		min-width: 90%;
	}
`;

const WrapperBtnClose = styled.div `
	display: flex;
	justify-content: flex-end;
	min-height: 50px;
	align-items: center;
    padding: 5px 20px;

`;

const BtnClose = styled.button `
	background-color: transparent;
	border: none;
	height: 30px;
	width: 30px;
	border-radius: 50%;
    padding: 8px;
`;

const WrapperInfo = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TextQuestion = styled.p `
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

const CloseIcon = styled.img `
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const TextComent = styled.p `
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

const TextWrite = styled.input `
	width: 80%;
	border: none;
	border-bottom: 2px solid #ffab07;
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
	color: #ffab07;
	padding: 10px 0;
	margin-bottom: 25px;
	&:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}
	@media and Screen ( max-width: 425px ){
		width: 80%;
    	height: 16%;
	}
`

const DetailsWrapper = styled.div `
	font-family: "Quicksand", sans-serif;
	width: 100%;
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;
	@media (max-width: 768px) {
		flex-wrap: wrap;
	}
`;
const LeftDetails = styled.div `
    width: 50%;
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background: rgba(160, 221, 199, 0.25);
	@media (max-width: 768px) {
		width: 100%;
		height:50%;
	}
	@media (max-width: 425px) {
/* 		align-items: center;
    justify-content: center; */
		width: 100%;
		height:35vh;
	}
	    
`;
const RightDetails = styled(LeftDetails)`
	background: #ffffff;
	width: 50%;
	height:100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 768px) {
		width: 100%;
		height: 50%;
	}

	@media screen and (max-width: 425px){
		height: 60vh;
		width:100%;
	}	
`;

const MainImageContainer = styled.div `
	width: 480px;
	height: 460px;
	position: relative;
	border-radius: 10px;
	@media (max-width: 768px) {
		margin: 0 auto;
		width: 320px;
		height: 320px;
		position: relative;
		display: flex;
		border-radius: 10px;
		align-items: center;
		justify-content: center;
	}
	@media (max-width: 425px) {
		width: 200px;
		height: 20%;
		padding: 20px 0;
	}

	
`;
const MainImage = styled.img `
	width: 100%;
	height: auto;
	object-fit: fill;
`;

const DecorativeImage = styled.img `
	width: 156.85px;
	height: 152.24px;
	position: absolute;
	bottom: 20%;
	right: 0;
	@media (max-width: 768px) {
		width: 106.85px;
		height: 102.24px;
		bottom: 0px;
    	right: -4px;
	}
	@media (max-width: 425px) {
		bottom: -41px;
    	right: -10px;
		width: 62.85px;
		height: 52.24px;
		}
	
`;

const InformationContainer = styled.div `
    width: 90%;
    height: 85%;
	background: rgba(255, 171, 7, 0);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 768px) {
		width: 100%;
		height: 30%;
	}
	@media (max-width: 425px) {
		width: 100%;
		height: 100%;
	}
`;

const CommentContainer = styled.div `
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
const TitleDetails = styled.p `
	display:flex;
	height: 16vh;
	max-width:33vw;
	width:100%;
	font-family: Quicksand;
	font-style: normal;
	font-weight: bold;
	font-size: 2em;
	text-transform: uppercase;
	color: #87d3b8;
	text-align: center;
	@media Screen and (max-width: 768px) {
		height: 40%;
		max-width: 540px;
		width: 100%;
		font-size: 1.5em;
	}
	@media Screen and (max-width: 425px) {
		height: 20%;
		max-width: 425px;
		width: 100%;
	}
`;

const LineImage = styled.img `
	width: 69.02px;
	height: 17.59px;
`;
const DetailsInformation = styled.div `
	display: flex;
	
	flex-direction: column;
	align-items: center;
	width: 100%;
	height:20%;
	justify-content: center;
	@media Screen and (max-width: 768px){
		width: 100%;
	}
	@media Screen and (max-width: 425px){
		width: 100%;
	}
`;
const DetailItem = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: calc(100% - 200px);
	@media Screen and (max-width: 768px) {
		width: 25%;
	}
	
	@media Screen and (max-width: 425px) {
	    	font-size: 1em;
			width: 60%;
		}
	`;


const DetailItemTitle = styled.p `
	font-family: Quicksand;
	font-style: normal;
	font-weight: 500;
	font-size: 1.5em;
	color: #726666;
	width: calc(100% / 2);
	font-weight: 900;
	text-align: center;
	@media Screen and (max-width: 425px) {
    font-size: 1.6em;
		font-weight: 300;
		margin:0;
		}
`;
const DetailItemContent = styled.p `
	font-family: Quicksand;
	font-style: normal;
	font-weight: normal;
	font-size: 1.5em;
	color: #726666;
	width: calc(100% / 2);
	text-align: center;
	@media Screen and (max-width: 425px) {
    font-size: 1.8em;
		margin:0;
		}
`;
const DetailButton = styled.button `
	font-family: Quicksand;
	font-style: normal;
	outline:none;
	max-width: 280px;
	max-height: 80px;
	font-weight: 500;
	font-size: 20px;
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
		width: 60%;
		height: 20%;
		font-size: 1.4em;
		padding: 6px;	
	}
	@media Screen and (max-width: 425px) {
    width: 80%;
    height: 20%;
    font-size: 1.4em;
	padding: 10px;	
	}
`;

const ColorLetter = styled.span `
	color: ${(props) => (props.blue ? "#87D3B8" : "#FFAB07")};
`;

const Star = styled.div `
  background: #ffab07;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  display: inline-block;
  height: 80px;
  width: 80px;
	transition: transform 0.2s ease-in-out;
  &:hover{
		background: gold;
		transform: scale(1.1);
		opacity: 1;
		&:active {
		transform: scale(0.9);
		}
	}
	@media Screen and (max-width: 768px) {
		height: 50px;
		width: 50px;
	}
`

const Stars = styled.div `
  	display: flex;
	width: calc(100% - 100px);
	margin: 0px 50px;
	flex-direction:row;
	justify-content: space-around;
	align-items: center;
	@media Screen and (max-width: 768px){
		width: calc(100% - 390px);
    	margin: 10px 50px;
	}
	@media Screen and (max-width: 425px){
		width: calc(100% - 50px);
   	 margin: 10px 50px;
	}

`
const ListContainer = styled.div`
	position: fixed;
	height: 10%;

`
const Lista = styled.ul`
  counter-reset: index;  
  padding: 0;
  max-width: 300px;
  
  display: flex;
  flex-direction: column;
  align-items: wrap;
  justify-content:center;
`

const ElementoLista = styled.li`
  counter-increment: index; 
 
  align-items: center;
  padding: 12px 0;
  box-sizing: border-box;
  &::before{
	content: counters(index, ".", decimal-leading-zero);
	font-size: 1rem;
	text-align: right;
	font-weight: bold;
	min-width: 50px;
	padding-right: 12px;
	font-variant-numeric: tabular-nums;

	background-image: linear-gradient(to bottom, aquamarine, orangered);
	background-attachment: fixed;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  }
`

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
	Lista,
	ElementoLista,
	ListContainer,
};