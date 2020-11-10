import React, { Fragment, useState } from "react";

// import Slider from "../../components/Slider";

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
  Star,
  Stars,
} from "../Containers/DetailsContainer/styles";



const Modal = ({ show, closeModal }) => {
	return show ? (
		<Fragment>
			<WrapperView>
				<WrapperModal>
					<WrapperBtnClose>
						<BtnClose onClick={closeModal}>
							<CloseIcon src="/images/close.png" />
						</BtnClose>
					</WrapperBtnClose>
					<WrapperInfo>
						<TextQuestion>¿Qué opinas de la recomendación?</TextQuestion>
						<TextComent>Deja tu comentario:</TextComent>
						<TextWrite></TextWrite>
						<Link href="/">
							<DetailButton>Quiero comprarlo</DetailButton>
						</Link>
					</WrapperInfo>
				</WrapperModal>
			</WrapperView>
		</Fragment>
	) : null;
};

const DetallesFake = () => {
	const [modal, useModal] = useState(true);

	const openModal = (e) => {
		e.preventDefault();
		useModal(false);
	};

	const closenModal = (e) => {
		e.preventDefault();
		useModal(true);
	};

	return (
		<Fragment>
      <DetailsWrapper>
        <LeftDetails>
								<MainImageContainer>
									<MainImage src="/images/fotoFrancisco.jpg" />
									<DecorativeImage src="/images/decataveDetails.png" />
								</MainImageContainer>
							</LeftDetails>
							<RightDetails>
								<InformationContainer>
									<TitleDetails>Esta es una sopa superfantabulosa super califra</TitleDetails>
									<LineImage src="/images/lines.png" />

									<DetailsInformation>
										<DetailItem>
											<DetailItemTitle>
												PRE<ColorLetter blue>C</ColorLetter>IO
											</DetailItemTitle>
											<DetailItemContent>$999.99</DetailItemContent>
										</DetailItem>
									</DetailsInformation>
					
                  <Stars>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </Stars>
				  <TextComent>Deja tu comentario:</TextComent>
				   <TextWrite></TextWrite>
									<DetailButton onClick={openModal}>
										Compralo Fácil y rápido
									</DetailButton>
								</InformationContainer>
								{/* <Slider /> */}
							</RightDetails>
			</DetailsWrapper>
			<Modal show={!modal} closeModal={closenModal} />
		</Fragment>
	);
};

export default DetallesFake;