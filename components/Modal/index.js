import React, { Fragment } from "react";

import {
	WrapperView,
	WrapperModal,
	WrapperBtnClose,
	BtnClose,
	WrapperInfo,
	TextQuestion,
	starts,
	Starts,
	TextComent,
	TextWrite,
	BtnCompra,
} from "./styles";

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
