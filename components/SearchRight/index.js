import React, { useState, useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import ErrorWrapper from "../ErrorWrapper/index";
import { useRouter } from "next/router";
import Menu from "../Menu";
import CustomChatbot from "../chatbot/CustomChatbot";
import Loading from "../../components/Loading/index";
import { Context } from "../../context/index";
import { SelectOccasionComponent } from "./selectOccasion";
import {
	WrapperRight,
	WrappperMenu,
	WrapperForm,
	WrapperLabel,
	imgFB,
	LabelRS,
	InputRS,
	WrapperButtom,
	BaseButton,
	Span,
	Textform,
} from "./styles";

const SEND_INFORMATION = gql`
	mutation AddSocialNetwork(
		$receiver_name: String!
		$id_social_network: Int!
		$url_social_network: String!
		$id_occasion: Int!
	) {
		social_network(
			receiver_name: $receiver_name
			id_social_network: $id_social_network
			url_social_network: $url_social_network
			id_occasion: $id_occasion
		) {
			id_gift_history
		}
	}
`;
let variables;

const SearchRight = () => {
	const router = useRouter();

	let loggedUser;
	if (typeof window !== "undefined") {
		loggedUser = localStorage.getItem('isLoggedIn') === 'true'
	}

	const { dispatch } = useContext(Context);
	const [
		sendInrmation,
		{ loading: mutationLoading, error: mutationError },
	] = useMutation(SEND_INFORMATION);

	const [form, useForm] = useState({
		name: "",
		link: "",
		occasion: 0,
	});

	const updateField = (event) => {
		useForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	variables = {
		receiver_name: form.name,
		id_social_network: 1,
		url_social_network: form.link,
		id_occasion: Number(form.occasion),
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const mutationId = await sendInrmation({
				variables,
				update: (cache, { data: { sendInrmation } }) => {
					cache.modify({
						fields: {
							GetSocialNetwork(existingPosts = []) {
								const inforef = cache.writeFragment({
									data: sendInrmation,
								});
								return [inforef, ...existingPosts];
							},
						},
					});
				},
			});
			const { id_gift_history } = mutationId.data.social_network;

			await dispatch({
				type: "RECORD_CASE",
				payload: id_gift_history,
			});

			router.push({
				pathname: "/podium",
			});
		} catch (error) {
			console.log("SUPER ERROR :(");
		}
	};

	return (
		<>
			<WrapperRight>
				{mutationLoading ? <Loading /> : null}
				{mutationError ? (
					<ErrorWrapper>Upps, intenta de nuevo :( </ErrorWrapper>
				) : (
					<>
						<WrappperMenu>
							<Menu />
						</WrappperMenu>
						<WrapperForm onSubmit={handleSubmit}>
							<Textform>
								¿Cómo se <Span primary>llama </Span>esa persona{" "}
								<Span>especial</Span> ?
							</Textform>
							<InputRS
								value={form.name}
								placeholder="nombre"
								name="name"
								type="text"
								onChange={updateField}
							/>
							<Textform>
								P&aacute;sanos su <Span>Facebook:</Span>
							</Textform>
							<WrapperLabel>
								<LabelRS src={imgFB} />
								<InputRS
									value={form.link}
									placeholder="link"
									name="link"
									type="text"
									onChange={updateField}
								/>
							</WrapperLabel>

							<>
								{
									loggedUser 
									? (
										<>
											<Textform>
												¿Cuál es <Span>la</Span> ocasión?
											</Textform>
											<SelectOccasionComponent onChange={updateField} />
										</>
									)
									: null
								}
							</>
							<WrapperButtom>
								<BaseButton type="submit">
									EN<Span primary>V</Span>IAR
								</BaseButton>
							</WrapperButtom>
						</WrapperForm>
					</>
				)}
				<CustomChatbot recognitionEnable={true}/>
			</WrapperRight>
		</>
	);
};

export { SearchRight };
