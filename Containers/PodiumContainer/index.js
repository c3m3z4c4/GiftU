import React, { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Context } from "../../context/index";
import TitleComponent from "../../components/Title/index";
import Loading from "../../components/Loading";
import ErrorWrapper from "../../components/ErrorWrapper/index";
import { LinkButton } from "../../components/Main/styles";

import {
	PodiumWrapper,
	PodiumContainer,
	CompleteColumn,
	FirstPlace,
	SecondPlace,
	ThirdPlace,
	NameComponent,
	FirstPlaceIcon,
	PlusIcon,
	ImagePodium,
	Decorative,
	LittleDecorative,
	DecorativeContainer,
	Wrapper,
} from "./styles";

const PODIUM_QUERY = gql`
	query GetHistory($id: ID!) {
		history(id: $id) {
			podium
			receiver_name
		}
	}
`;

const PodiumComponent = () => {
	const {
		state: { record },
		dispatch,
	} = useContext(Context);

	const { loading, error, data } = useQuery(PODIUM_QUERY, {
		variables: { id: record },
		notifyOnNetworkStatusChange: true,
	});
	if (error) {
		console.log("3312 3312 tenemos un 3312");
	}
	if (loading) return <Loading />;
	const { products } = data.history.podium;

	let podiumProducts = [];

	try {
		podiumProducts = JSON.parse(products);
	} catch (error) {
		console.log("se murio por que no hay productos :(");
	}

	const { receiver_name } = data.history;

	const router = useRouter();

	const goDetails = async (number) => {
		await dispatch({
			type: "PODIUM_CASE",
			payload: podiumProducts,
		});
		router.push({
			pathname: `/gifts/${number}`,
		});
	};

	return (
		<Wrapper>
			<TitleComponent name={receiver_name} />
			<PodiumWrapper>
				<DecorativeContainer>
					<LittleDecorative />
				</DecorativeContainer>
				<PodiumContainer>
					{products === undefined ? (
						<ErrorWrapper>
							No se encontro ningun resultado, intenta de nuevo
						</ErrorWrapper>
					) : (
						<>
							<CompleteColumn>
								{podiumProducts[2].map((product) => (
									<>
										<ImagePodium src={product.img} key="" />
										<NameComponent key={product.name}>
											{product.name}
											<LinkButton onClick={() => goDetails(3)}>
												<PlusIcon />
											</LinkButton>
										</NameComponent>
									</>
								))}
								<ThirdPlace>3</ThirdPlace>
							</CompleteColumn>
							<CompleteColumn>
								{podiumProducts[0].map((product) => (
									<>
										<ImagePodium src={product.img} />
										<NameComponent>
											{product.name}
											<LinkButton onClick={() => goDetails(1)}>
												<PlusIcon />
											</LinkButton>
										</NameComponent>
									</>
								))}
								<FirstPlace>
									<FirstPlaceIcon />
								</FirstPlace>
							</CompleteColumn>
							<CompleteColumn>
								{podiumProducts[1].map((product) => (
									<>
										<ImagePodium src={product.img} />
										<NameComponent>
											{product.name}
											<LinkButton onClick={() => goDetails(2)}>
												<PlusIcon />
											</LinkButton>
										</NameComponent>
									</>
								))}
								<SecondPlace>2</SecondPlace>
							</CompleteColumn>
						</>
					)}
				</PodiumContainer>
				<DecorativeContainer>
					<Decorative />
				</DecorativeContainer>
			</PodiumWrapper>
		</Wrapper>
	);
};

export { PodiumComponent };
