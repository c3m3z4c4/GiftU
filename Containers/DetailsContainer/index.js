import React, { Fragment, useState } from "react";
import Link from "next/link";
import Slider from "../../components/Slider";

import {
	DetailsWrapper,
	LeftDetails,
	RightDetails,
	MainImageContainer,
	MainImage,
	DecorativeImage,
	InformationContainer,
	TitleDetails,
	LineImage,
	DetailsInformation,
	DetailItem,
	DetailItemTitle,
	DetailItemContent,
	ColorLetter,
	DetailButton,
	WrapperView,
	WrapperModal,
	WrapperBtnClose,
	BtnClose,
	WrapperInfo,
	TextQuestion,
	TextComent,
	TextWrite,
	CloseIcon,
} from "./styles";

const Modal = ({ show, closeModal }) => {
	return (
		show ? (
			<Fragment>
			<WrapperView>
				<WrapperModal>
					<WrapperBtnClose>
						<BtnClose onClick={closeModal}>
							<CloseIcon src="/images/close.png"/>
						</BtnClose>
					</WrapperBtnClose>
					<WrapperInfo>
						<TextQuestion>¿Qué opinas de la recomendación?</TextQuestion>
						<TextComent>Deja tu comentario:</TextComent>
						<TextWrite></TextWrite>
						<Link href="/">
							<DetailButton> donde comprarlo</DetailButton>
						</Link>	
					</WrapperInfo>
				</WrapperModal>
			</WrapperView>
		</Fragment>
		) : null
	);
};

const DetailsContainer = () => {
	const [ modal, useModal] = useState(true);

	const openModal = (e) => {
		e.preventDefault();
		 useModal(false)
	};
	
	const closenModal = (e) => {
		e.preventDefault();
		 useModal(true)
	};

	return (
	<Fragment>
		<DetailsWrapper>
			<LeftDetails>
				<MainImageContainer>
					<MainImage src="/images/tennis_1.jpg" />
					<DecorativeImage src="/images/decataveDetails.png" />
				</MainImageContainer>
			</LeftDetails>
			<RightDetails>
				<InformationContainer>
					<TitleDetails>calzado deportivo</TitleDetails>
					<LineImage src="/images/lines.png" />
					<DetailsInformation>
						<DetailItem>
							<DetailItemTitle>
								DESCR<ColorLetter blue>I</ColorLetter>PCIÓN
							</DetailItemTitle>
							<DetailItemContent>
								Tenis deportivos colores oscuros, Simillares a marca Nike, Adidas
								o puma.
							</DetailItemContent>
						</DetailItem>
						<DetailItem>
							<DetailItemTitle>
								RAT<ColorLetter orange>I</ColorLetter>NG
							</DetailItemTitle>
							<DetailItemContent>esstrellas</DetailItemContent>
						</DetailItem>
						<DetailItem>
							<DetailItemTitle>
								POPUL<ColorLetter blue>A</ColorLetter>RIDAD
							</DetailItemTitle>
							<DetailItemContent>Lorem ipsum sit amet</DetailItemContent>
						</DetailItem>
					</DetailsInformation>
					<DetailButton onClick={openModal}>Compralo Fácil y rápido</DetailButton>
				</InformationContainer>
				<Slider />
			</RightDetails>
		</DetailsWrapper>
		<Modal show={!modal}  closeModal={closenModal}/>
	</Fragment>
)};


export default DetailsContainer;
