import styled from "styled-components";

const Wrapper = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px;
		@media (max-width: 768px) {
		width: 100%;
		height: 30%;
		flex-direction: column;
	}
	
`;

const WrapperLink = styled.div `
	width: 2%;
	z-index: 30;
	@media(max-width: 425px){
		width: 100%;
	}
`;

const WrapperLeft = styled.div `
	width: 50%;
	@media (max-width: 768px) {
		width: 100%;
		height: 100%;
		flex-direction:column;
	}
`;

const ImageAbout = styled.img `
	width: 200px;
	height: 200px;
	border-radius: 50%;
	object-fit: cover;
	box-shadow: 3px 5px 5px 1px rgba(0, 0, 0, 0.17);
	@media (max-width: 768px) {
		width: 150px;
		height: 150px;
	}
	@media (max-width: 425px) {
		width: 220px;
		height: 220px;
	}
`;

const WrapperDetails = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 30px;
	width: 300px;
	height: 200px;
`;

const TitleDetails = styled.h2 `
	margin-bottom: 0;
	text-align: center;
	color: black;
	font-size: 30px;
	font-family: Quicksand;
	@media (max-width: 425px) {
		font-size: 22px;
		font-weight: 400;
	}
`;

const TitleRole = styled.h2 `
	margin-top: 0;
	text-align: center;
	color: black;
	font-size: 25px;
	font-family: Quicksand;
	@media (max-width: 425px) {
		font-size: 22px;
		font-weight: 400;
	}
`;

const GitHub = styled.a `
	font-size: 20px;
	color: black;
	text-decoration: none;
	font-family: Quicksand;
	cursor: pointer;
	margin: 10px;
	transition: transform 0.2s ease-in-out;
	&:hover {
		color: #ffab07;
		transform: scale(1.2);
		opacity: 1;
	}
`;

const LinkedIn = styled.a `
	font-size: 20px;
	color: black;
	text-decoration: none;
	font-family: Quicksand;
	cursor: pointer;
	transition: transform 0.2s ease-in-out;
	&:hover {
		color: #87d3b8;
		transform: scale(1.2);
		opacity: 1;
	}
`;

export {
    Wrapper,
    WrapperLink,
    WrapperLeft,
    ImageAbout,
    WrapperDetails,
    TitleDetails,
    TitleRole,
    GitHub,
    LinkedIn,
};