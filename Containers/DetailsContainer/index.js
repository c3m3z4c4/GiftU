import React, { Fragment, useState, useContext } from "react";
import { Context } from "../../context/index";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import Link from "next/link";
import ErrorWrapper from "../../components/ErrorWrapper/index";
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
	Star,
	Stars,
	GoHome,
} from "./styles";

const PODIUM_QUERY = gql`
	query GetHistory($id: ID!) {
		history(id: $id) {
			podium
			receiver_name
		}
	}
`;

const Modal = ({ show, closeModal, url }) => {
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
						<Link href={url}>
							<DetailButton>Quiero comprarlo</DetailButton>
						</Link>
					</WrapperInfo>
				</WrapperModal>
			</WrapperView>
		</Fragment>
	) : null;
};

const DetailsContainer = () => {
	const {
		state: { record },
	} = useContext(Context);

	const [modal, useModal] = useState(true);
	const { loading, error, data } = useQuery(PODIUM_QUERY, {
		variables: { id: record },
		notifyOnNetworkStatusChange: true,
	});

	if (error)
		return <ErrorWrapper>NO HAY DETALLES POR EL MOMENTO </ErrorWrapper>;
	if (loading) return <Loading />;

	const { products } = data.history.podium;
	let podiumProducts = [];

	try {
		podiumProducts = JSON.parse(products);
	} catch (error) {
		console.log("se murio por que no hay productos");
	}

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
					<ErrorWrapper>NO HAY DETALLES POR EL MOMENTO </ErrorWrapper>
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
										<DetailItem>
											<DetailItemTitle>
												RAT<ColorLetter orange>I</ColorLetter>NG
											</DetailItemTitle>
											<DetailItemContent>
												<Stars>
													{Array.from(Array(5), (e, i) => (
														<Star />
													))}
												</Stars>
											</DetailItemContent>
										</DetailItem>
										<DetailItem>
											<DetailItemTitle>
												<ColorLetter blue>+</ColorLetter> INFOR
												<ColorLetter>M</ColorLetter>ACIÓN
											</DetailItemTitle>
											<DetailItemContent>New implementations</DetailItemContent>
										</DetailItem>
									</DetailsInformation>
									<Link href="/">
										<GoHome>¡Intenta de nuevo!</GoHome>
									</Link>
									<DetailButton onClick={openModal}>¡Compralo!</DetailButton>
									<Modal
										url={gift.url}
										show={!modal}
										closeModal={closenModal}
									/>
								</InformationContainer>
								<Slider />
							</RightDetails>
						</>
					))
				)}
			</DetailsWrapper>
		</Fragment>
	);
};

export { DetailsContainer };
