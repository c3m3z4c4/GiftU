import styled from "styled-components";

const Wrapper = styled.section`
	width: 90%;
	padding: 1vh;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 50px;
	padding: 0;
	@media (max-width: 425px) {
		margin-top: 0;
		flex-direction: column;
	}
`;

const Text = styled.p`
	text-align: center;
	font-size: 18px;
	font-family: "Quicksand";
	align-items: center;
	margin-right: 30px;
`;

const WrapperCarousel = styled.div`
	white-space: nowrap;
	margin: 2vh 0px;
	padding-bottom: 10px;
	overflow: scroll;
	@media (max-width: 425px) {
		width: 100%;
	}
`;

const CarouselItem = styled.div`
	width: 8vw;
	height: 14vh;
	border-radius: 20px;
	overflow: hidden;
	margin-right: 10px;
	display: inline-block;
	cursor: pointer;
	box-shadow: 3px 5px 5px 1px rgba(0, 0, 0, 0.17);
	@media (max-width: 425px) {
		width: 50%;
	}
`;

const imgItem3 = "../images/tennis_1.jpg";
const imgItem2 = "../images/bisuteria_1.jpg";
const imgItem1 = "../images/iwatch_1.jpg";
const Item = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	background: white;
`;

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

export {
	Wrapper,
	Text,
	WrapperCarousel,
	CarouselItem,
	imgItem1,
	imgItem2,
	imgItem3,
	Item,
	Span,
};
