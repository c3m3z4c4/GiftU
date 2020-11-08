import React, { Fragment, useState } from "react";
import Link from "next/link";
import { gql, useMutation, useQuery } from '@apollo/client'
import Menu from "../Menu";
import { SelectOccasionComponent } from './selectOccasion';
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
	SelectOccasion,
	Textform,
} from "./styles";

const SEND_INFORMATION = gql`
	mutation AddSocialNetwork(
	$receiver_name:String!,
	$id_social_network:Int!,
	$url_social_network:String!,
	$id_occasion:Int!,
	){
	social_network(
		receiver_name:$receiver_name,
		id_social_network:$id_social_network,
		url_social_network:$url_social_network,
		id_occasion:$id_occasion,
	){
		id_gift_history
	}
	}
`;


let variables;

const SearchRight = () => {
	const [sendInrmation, { data }] = useMutation(SEND_INFORMATION);
	// const { id_gift_history } = data.social_network;
	console.log('DATAAAAA ARRIBA', data);

	const [form, useForm] = useState({
		name: '',
		link: '',
		occasion: 0,
	  });
	
	const updateField = e => {
		useForm({
			...form,
			[event.target.name]: event.target.value
		});
	  };
	
	variables = {
		receiver_name: form.name,
		id_social_network: 1,
		url_social_network: form.link,
		id_occasion: Number(form.occasion),
	};	

	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			const mutationId = await sendInrmation({
			variables,	  
			update: (cache, { data: { sendInrmation } }) => {
				cache.modify({
				fields: {
					GetSocialNetwork(existingPosts = []) {
					const inforef = cache.writeFragment({
						data: sendInrmation,
					})
					return [inforef, ...existingPosts]
					},
				},
				})
			},
			})
			console.log('DENTRO DE TRY:', mutationId);
		} catch (error) {
			console.log('SUPER ERROR :(');
		}
		console.log('PORFI DATAAAAA', data);
	  }
	return (
		<Fragment>
			<WrapperRight>
				<WrappperMenu>
					<Menu />
				</WrappperMenu>
				<WrapperForm
					onSubmit={handleSubmit}
				>
					<Textform>
						¿Cómo se <Span primary>llama </Span>esa persona <Span>especial</Span> ?
					</Textform>
					<InputRS value={form.name} placeholder="nombre" name="name" type="text" onChange={updateField} />
					<Textform>
						P&aacute;sanos su <Span>Facebook:</Span>
					</Textform>
					<WrapperLabel>
						<LabelRS src={imgFB} />
						<InputRS value={form.link} placeholder="link" name="link" type="text" onChange={updateField} />
					</WrapperLabel>

					<Textform>
						¿Cuál es<Span>la</Span> ocasión?
					</Textform>
					<SelectOccasionComponent onChange={updateField} />
					<WrapperButtom>
						{/* <Link href="/podium"> */}
							<BaseButton type="submit">
								EN<Span primary>V</Span>IAR
							</BaseButton>
						{/* </Link> */}
					</WrapperButtom>
				</WrapperForm>
			</WrapperRight>
		</Fragment>
	);
};

export {
	SearchRight
};
