import styled from "styled-components";

const Title = styled.div`
	font-family: Quicksand, sans-serif;
	font-style: normal;
	font-size: 30px;
	line-height: 45px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.15em;
	color: #726666;
	text-transform: uppercase;
	@media (max-width: 1024px) {
		font-size: 24px;
	}
	@media (max-width: 768px) {
		font-size: 18px;
	}
	@media (max-width: 425px) {
		font-size: 16px;
		line-height: 30px;
		flex-direction: column;
		margin-top: 10px;
	}
`;

const Name = styled.span`
	color: #66ba9c;
	margin: 0px 10px;
`;

const TitleWrapper = styled.div`
	width: 100%;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { Name, Title, TitleWrapper };
