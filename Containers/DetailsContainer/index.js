import React, { Fragment, useState, useContext } from "react";
import { Context } from '../../context/index';
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Loading from '../../components/Loading';
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
} from "./styles";

const PODIUM_QUERY = gql`
	query GetPodium($id: ID!) {
		podium(id: $id) {
			podium
		}
	}
`;

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

const DetailsContainer = () => {
	const { state: { record } } = useContext(Context);
	console.log('record in DETAILS', record);
	
	const [modal, useModal] = useState(true);
	const { loading, error, data } = useQuery(
		PODIUM_QUERY,
		{
			variables: { id: record },
			// variables: { id: 223 },
			notifyOnNetworkStatusChange: true,
		}
	);
	if (error) return <p>NO HAY DETALLES POR EL MOMENTO </p>;
      if (loading) return <Loading />
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
	debugger;
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
			<Modal show={!modal} closeModal={closenModal} />
		</Fragment>
	);
};

export { DetailsContainer };
