import styled from "styled-components";

export const MainContainer = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.container {
		width: 100%;
		height: 580px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const Logo = styled.div`
	.logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.logo-image {
		height: 100px;
		width: auto;
	}
	.logo-name {
		height: auto;
		width: 100px;
	}
`;

export const TitleText = styled.p`
	line-height: 30px;
	letter-spacing: 0.14em;
	font-weight: bold;
	font-size: 24px;
	font-family: "Quicksand", sans-serif;
	margin: 30px 0;
`;
export const FormArea = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	.input-container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-bottom: 30px;
	}
`;

export const LabelComp = styled.label`
	 {
		font-family: "Quicksand", sans-serif;
		font-size: 14px;
		line-height: 17px;
		letter-spacing: 0.14em;
		font-feature-settings: "case";
		display: flex;
		align-items: center;
		width: 100%;
		height: 30px;

		.label-text {
			margin-right: 15px;
		}

		.label-image {
			width: 16px;
			height: 16px;
			margin-left: 8px;
		}
		.label-image__mail {
			transform: rotate(25deg);
		}
	}
`;

export const InputField = styled.input`
	width: 258px;
	background: transparent;
	border: none;
	border-bottom: 2px solid rgba(135, 211, 184, 0.6);
	font-family: "Quicksand", sans-serif;
	font-size: 14px;
	line-height: 17px;
	color: #ffab07;
	padding: 10px 0;

	&:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}
`;

export const Button = styled.button`
	width: 124.16px;
	height: 34.58px;
	background: #87d3b8;
	background: rgba(21, 152, 105, 0.2);
	border: none;
	box-sizing: border-box;
	border-radius: 12px;
	transform: matrix(1, 0, 0, 1, 0, 0);
	font-weight: bold;
	font-size: 11px;
	line-height: 14px;
	display: flex;
	align-items: center;
	letter-spacing: 0.11em;
	font-family: "Quicksand", sans-serif;
	display: flex;
	justify-content: center;
	color: rgba(20, 180, 122, 0.49);
	margin-top: 50px;

	&:hover {
		color: rgba(254, 170, 7, 0.7);
		box-shadow: -1px 2px 5px 6px rgba(254, 170, 7, 0.7);
		transition: linear 0.5s;
	}
`;
