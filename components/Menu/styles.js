import styled from "styled-components";

const Wrapper = styled.section`
	margin-right: 30px;
	@media (max-width: 425px) {
		width:100%;
	}
		@media (max-width: 425px){
		display:flex;
		align-items: center;
		justify-content:center;
		margin-right:0;
	}
`;

const WrapperImageMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	
`;

const LogoImage = styled.img`
	width: 40px;
`;

const Text = styled.p`
	font-size: 25px;
	color: #87d3b8;
	margin: 0;
	margin-right: 10px;
	font-family: Quicksand;
`;

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

const ListItems = styled.ul`
	display: none;
	list-style: none;
	padding: 10px;
	position: absolute;
	width: auto;
	text-align: right;
	margin: 0px 0px 0px -50px;
	background-color: #2a2220;
	min-width: 130px;
	${Wrapper}:hover & {
		display: block;
	};
	@media (max-width:425px){
		margin: 59px -42px 0px -45px;
	}

`;

const Item = styled.li`
	margin: 5px;
`;

const Anchor = styled.a`
	color: #ffab07;
	font-size: 20px;
	text-decoration: none;
	font-family: Quicksand;
	cursor: pointer;
	${Item}:hover & {
		color: white;
	}
`;

const MenuButton = styled.button`
	background: transparent;
	box-shadow: none;
	font-size: 20px;
	border: 0;
	outline: none;
	color: #ffab07;
	text-decoration: none;
	font-family: Quicksand;
	cursor: pointer;
	${Item}:hover & {
		color: white;
	}
`;

export {
	Wrapper,
	WrapperImageMenu,
	LogoImage,
	Text,
	Span,
	ListItems,
	Item,
	Anchor,
	MenuButton,
};
