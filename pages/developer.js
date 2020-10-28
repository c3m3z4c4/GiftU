import React, { Fragment } from "react";
import styled from "styled-components";

const WrapperView = styled.div`
	display: flex;
	width: 100vw;
	background: rgba(196, 196, 196, 0.6);
	height: 100vh;
	justify-content: center;
	align-items: center;
`;

const WrapperModal = styled.div`
	width: 40vw;
	box-shadow: 2px 10px 15px 0px rgba(0,0,0,0.17);
    background: white;
`;

const WrapperBtnClose = styled.div`
	display: flex;
	justify-content: flex-end;
	color: #87d3b8;
`;

const BtnClose = styled.button`
	color: #87d3b8;
	font-family: "Quicksand", sans-serif;
	font-size: 20px;
	background-color: transparent;
	border: none;
`;

const WrapperInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TextQuestion = styled.p`
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
`;

const starts = "../images/decorative.png";
const Starts = styled.img`
	width: 4vw;
	heihgt: 4h;
`;

const TextComent = styled.p`
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
`;

const TextWrite = styled.input`
	width: 25vw;
	border: none;
	border-bottom: 2px solid #ffab07;
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
	color: #ffab07;
	padding: 10px 0;

	&:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}
`;

const BtnCompra = styled.button`
	width: 124.16px;
	height: 34.58px;
	background: #87d3b8;
	border: none;
	box-sizing: border-box;
	border-radius: 12px;
	transform: matrix(1, 0, 0, 1, 0, 0);
	font-weight: bold;
	font-size: 18px;
	line-height: 14px;
	display: flex;
	align-items: center;
	letter-spacing: 0.11em;
	font-family: "Quicksand", sans-serif;
	display: flex;
	justify-content: center;
	color: white;
	margin: 50px;
	box-shadow: 3px 8px 5px -2px rgba(0, 0, 0, 0.17);
`;

const Modal = () => {
	return (
		<Fragment>
			<WrapperView>
				<WrapperModal>
					<WrapperBtnClose>
						<BtnClose>X</BtnClose>
					</WrapperBtnClose>
					<WrapperInfo>
						<TextQuestion>¿Qué opinas de la recomendación?</TextQuestion>
						<Starts src={starts} />
						<TextComent>Deja tu comentario:</TextComent>
						<TextWrite></TextWrite>
						<BtnCompra>Compralo</BtnCompra>
					</WrapperInfo>
				</WrapperModal>
			</WrapperView>
		</Fragment>
	);
};

export default Modal;
