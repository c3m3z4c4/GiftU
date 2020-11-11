import React, { Fragment, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Link from "next/link";
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
} from "./styles";

const PODIUM_QUERY = gql`
	query GetPodium($id: ID!) {
		podium(id: $id) {
			podium
		}
	}
`;
const variables = { id: 223 };

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
						<Stars>
							<Star></Star>
							<Star></Star>
							<Star></Star>
						</Stars>
						<Link href="/">
							<DetailButton>Quiero comprarlo</DetailButton>
						</Link>
					</WrapperInfo>
				</WrapperModal>
			</WrapperView>
		</Fragment>
	) : null;
};

const DetailsContainer = () => {
	const [modal, useModal] = useState(true);
	const { loading, error, data, fetchMore, networkStatus } = useQuery(
		PODIUM_QUERY,
		{
			variables: variables,
			notifyOnNetworkStatusChange: true,
		}
	);
	if (error) {
		console.log("3312 3312 tenemos un 3312");
	}
	if (loading) return <div>Loading</div>;
	const { products } = data.podium.podium;
	const podiumProducts = JSON.parse(products);

	const openModal = (e) => {
		e.preventDefault();
		useModal(false);
	};

	const closenModal = (e) => {
		e.preventDefault();
		useModal(true);
	};

	const {
		query: { giftId },
	} = useRouter();
	const giftIndex = giftId - 1;
	return (
		<Fragment>
			<DetailsWrapper>
				{products === undefined ? (
					<p>NO HAY DETALLES POR EL MOMENTO </p>
				) : (
					podiumProducts[giftIndex].map((gift) => (
						<>
							<LeftDetails>
								<MainImageContainer>
									<MainImage src={gift.img} />
									<DecorativeImage src="/images/decataveDetails.png" />
								</MainImageContainer>
							</LeftDetails>
							<RightDetails>
								<InformationContainer>
									<TitleDetails>{gift.name}</TitleDetails>
									<LineImage src="/images/lines.png" />

									<DetailsInformation>
										<DetailItem>
											<DetailItemTitle>
												PRE<ColorLetter blue>C</ColorLetter>IO
											</DetailItemTitle>
											<DetailItemContent>{gift.price}</DetailItemContent>
										</DetailItem>
									</DetailsInformation>
									                  									<Stars>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </Stars>
									<DetailButton onClick={openModal}>
										Compralo Fácil y rápido
									</DetailButton>
								</InformationContainer>
								{/* <Slider /> */}
							</RightDetails>
						</>
					))
				)}
			</DetailsWrapper>
			<div>
				<ListContainer>
					<TextComent>Algunos comentarios del producto.</TextComent>
				<Lista>
					<ElementoLista>Excelente producto.. Llego a tiempo.</ElementoLista>
					<ElementoLista>Siguen teniendo en existencia?</ElementoLista>
					<ElementoLista>Me ha llegado muy rapido y sin contratiempos.</ElementoLista>
					<ElementoLista>Quiero pedir otro par de articulos mas!</ElementoLista>
					<ElementoLista>Excelente experiencia de compra, asi tambien el vendedor estuvo al pendiente todo el tiempo.</ElementoLista>
				</Lista>
			</ListContainer>
			</div>
			<Modal show={!modal} closeModal={closenModal} />
		</Fragment>
	);
};

export { DetailsContainer, PODIUM_QUERY, variables };
