import styled from "styled-components";

const Wrapper = styled.section`
	z-index: 5;
	display: flex;
	justify-content: space-between;
	@media (max-width: 425px) {
		width: 100%;
		justify-content: center !important;
	}
`;

const LogoName = styled.img`
	padding: 10px;
	height: 37px;
	width: auto;
`;

export { Wrapper, LogoName };
