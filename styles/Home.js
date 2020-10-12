import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	justify-content: space-between;

	.logo-image {
		padding: 10px 25px;
		height: 70px;
		width: auto;
	}
`;

export const LogoName = styled.img`
	padding: 10px;
	height: 37px;
	width: auto;
`;

export const MenuDerecho = styled.div`
	display: flex;
	align-items: center;
	.menu {
		color: #87d3b8;
	}
`;

export const ContainerText = styled.div`
	height: 250px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Texto = styled.p`
	text-align: center;
	color: black;
	font-size: 50px;
	font-family: "Quicksand";
`;

export const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

export const ContainerGift = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const GiftType = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: "Quicksand";
`;

export const Barra = styled.button`
	width: 230px;
	height: 6px;
	background: white;
	background: linear-gradient(90deg, #ffab07 60%, white 60%);
	background: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
	border: ${(props) =>
		props.primary ? "1px solid #ffab07" : "1px solid #87d3b8"};
`;

export const Login = styled.div`
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	.yatienes {
		font-size: 15px;
	}

	.anchor {
		color: blue;
		font-size: 16px;
	}
`;

export const Footer = styled.img`
	height: auto;
	width: 100vw;
`;
