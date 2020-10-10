import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
`;

export const Logo = styled.div`
	.logo-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.logo-image {
		height: 100px;
		width: auto;
	}
`;

export const ButLoading = styled.button`
	border-radius: 30px;
	border: 1px solid #87d3b8;
	width: 230px;
	height: 10px;
	background: white;
	background: linear-gradient(90deg, #ffab07 60%, white 60%);
`;

export const Texto = styled.p`
	color: black;
	font-size: 22px;
`;

export const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;
