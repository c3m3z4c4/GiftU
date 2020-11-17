import styled from "styled-components";

const Wrapper = styled.div `
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const PodiumWrapper = styled.div `
	font-family: Quicksand, sans-serif;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: space-between;
`;
const PodiumContainer = styled.div `
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	@media (max-width: 425px) {
		width: 100%;
		flex-direction: column;
		
	}
`;

const CompleteColumn = styled.div `
	width: calc(100% / 3 - 20px);
	margin: 0 20px;
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	@media (max-width: 425px) {
		width: 100%;
		align-self: auto;
		flex-direction: row-reverse;
		margin: 0;
		min-height: 231px;
		height: auto;
		position: relative;
		justify-content: flex-end;
	}
`;

const Maincolumn = styled.div `
	background: rgba(252, 255, 90, 0.4);
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 76px;
	font-style: normal;
	font-weight: bold;
	line-height: 0%;
	letter-spacing: 0.2em;
	color: rgba(255, 171, 7, 0.75);
	@media (max-width: 1024px) {
		font-size: 56px;
	}
	@media (max-width: 768px) {
		font-size: 46px;
	}
	@media (max-width: 425px) {
		font-size: 20px;
		width: 140px;
		height: 100px;
	}
`;
const NameComponent = styled.div `
	width: 100%;
	min-height: 55px;
	height: auto;
	font-weight: bold;
	font-size: 12px;
	color: #726666;
	background: rgba(135, 211, 184, 0.32);
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 10px;
	padding: 10px;
	img {
		@media (max-width: 768px) {
			padding-left: 5px;
		}
	}
	text-transform: uppercase;
	@media (max-width: 1024px) {
		font-size: 16px;
	}
	@media (max-width: 768px) {
		font-size: 9px;
	}
	@media (max-width: 425px) {
		flex-direction: row;
		position: absolute;
		top: 0;
		font-size: 12px;
		padding: 0px;
		background: transparent;
		margin: 0;
		font-weight: 300;
		text-align: center;
		color: #66BA9C;
	}
`;

const FirstPlace = styled(Maincolumn)
`
	min-height: 350px;
	@media (max-width: 425px) {
		min-height: 100px;
		width: 170px;
		justify-self: flex-end;
	}
`;
const SecondPlace = styled(Maincolumn)
`
	min-height: 220px;
	@media (max-width: 425px) {
		width: 135px;
		min-height: 100px;
	}
`;
const ThirdPlace = styled(Maincolumn)
`
	min-height: 165px;
	@media (max-width: 425px) {
		width: 100px;
		min-height: 100px;
	}
`;

const ImagePodium = styled.img `
	width: 200px;
	height: 200px;
	border-radius: 50%;
	margin-bottom: 20px;
	object-fit: contain;
	background: white;
	box-shadow: 3px 5px 5px 1px rgba(0, 0, 0, 0.17);
	@media (max-width: 768px) {
		width: 150px;
		height: 150px;
	}
	@media (max-width: 425px) {
		width: 90px;
    	height: 90px;
		left: 180px;
		position: absolute;
	}
`;

const FirstPlaceIcon = styled.img.attrs((props) => ({
    src: "/images/iconFirst.png",
}))
`
	width: 80px;
	height: 80px;
	@media (max-width: 1024px) {
		width: 60px;
		height: 60px;
	}
	@media (max-width: 768px) {
		width: 80px;
		height: 80px;
	}
	@media (max-width: 425px) {
		width: 40px;
		height: 40px;
	}
`;

const PlusIcon = styled.img.attrs((props) => ({
    src: "/images/plus.png",
    href: "plus icon",
}))
`
	width: 15px;
	height: 15px;
	@media (max-width: 425px) {
		width: 12px;
    	height: 12px;
		margin-right: 10px;
		padding: 0px;
	}
`;

const DecorativeContainer = styled.div `
	width: 10%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	@media (max-width: 768px) {
		display: none;
	}
`;
const LittleDecorative = styled.img.attrs((props) => ({
    src: "/images/little.png",
    href: "little decorastive",
}))
`
	margin-bottom: 100%;
	width: 30px;
	height: 30px;
`;

const Decorative = styled.img.attrs((props) => ({
    src: "/images/decorative.png",
    href: "decorstive",
}))
`
	width: 100px;
	height: 100px;
`;

export {
    Wrapper,
    PodiumWrapper,
    PodiumContainer,
    NameComponent,
    CompleteColumn,
    Maincolumn,
    FirstPlace,
    SecondPlace,
    ThirdPlace,
    FirstPlaceIcon,
    PlusIcon,
    Decorative,
    LittleDecorative,
    ImagePodium,
    DecorativeContainer,
};