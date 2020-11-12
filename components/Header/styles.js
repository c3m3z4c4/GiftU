import styled from "styled-components";

const Wrapper = styled.section`
	z-index: 5;
	display: flex;
	justify-content: space-between;
	width: 100%;
	@media (max-width: 425px) {
		width: 100%;
		justify-content: center;
	}
`;

const LogoName = styled.img`
	padding: 10px;
	height: 37px;
	width: auto;
	transition: transform 0.2s ease;
	&:hover {
		transform: scale(1.2);
		opacity: 1;
	}
	&:active {
		transform: scale(0.8);
	}
`;

export { Wrapper, LogoName };
