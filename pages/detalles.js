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
	Lista,
	ElementoLista,
	ListContainer,
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
                  {/* <Stars>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </Stars> */
									<DetailButton onClick={openModal}>
										Compralo Fácil y rápido
									</DetailButton>
								</InformationContainer>
				
			<ListContainer>
				<Lista>
					<ElementoLista>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro beatae eius, iste itaque error molestiae consequatur at accusantium rem nisi odit exercitationem non vel alias maxime consequuntur esse tempora! Dignissimos?</ElementoLista>
					<ElementoLista>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sapiente debitis nesciunt sed perspiciatis veritatis numquam culpa minima repellendus. Hic ipsum et itaque, voluptas at temporibus a id nemo dicta?</ElementoLista>
					<ElementoLista>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, necessitatibus odio libero molestiae iure enim soluta, similique aliquid aperiam explicabo modi, qui rerum saepe iste veniam asperiores obcaecati. Nemo, magni!</ElementoLista>
					<ElementoLista>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis vel delectus similique vitae, eveniet nisi perspiciatis, vero facilis odit voluptates asperiores? Cum quaerat inventore eligendi necessitatibus nam, at tenetur? Quasi.</ElementoLista>
					<ElementoLista>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum nesciunt voluptates neque, non, nam commodi blanditiis dolores magnam tenetur nobis debitis error assumenda iusto quis numquam facilis, porro autem!</ElementoLista>
				</Lista>
			</ListContainer>
								{/* <Slider /> */}
							</RightDetails>
			</DetailsWrapper>
			<Modal show={!modal} closeModal={closenModal} />
		</Fragment>
	);
};

export default DetallesFake;