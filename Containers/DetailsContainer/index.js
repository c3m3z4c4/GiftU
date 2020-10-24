import React, { Fragment } from "react";

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
	starts,
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
						{/* <Starts src='/images/decorative.png' /> */}
						<TextComent>Deja tu comentario:</TextComent>
						<TextWrite></TextWrite>
						<BtnCompra>Compralo</BtnCompra>
					</WrapperInfo>
				</WrapperModal>
			</WrapperView>
		</Fragment>
	);
};

const DetailsContainer = () => (
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
					<DetailButton>Compralo Fácil y rápido</DetailButton>
				</InformationContainer>
				<Slider />
			</RightDetails>
		</DetailsWrapper>
		<Modal />
	</Fragment>
);


export default DetailsContainer;
