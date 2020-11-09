import React, { Fragment, useState, useContext } from "react";
import { useRouter } from 'next/router';
import { gql, useMutation } from '@apollo/client'
import Menu from "../Menu";
import { Context } from "../../context/index";
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

const SearchRight = ({ action = '/podium' }) => {
	const { state, dispatch } = useContext(Context);
	const [sendInrmation, { data }] = useMutation(SEND_INFORMATION);
	// const { id_gift_history } = data.social_network;

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
	const router = useRouter()
    const [query, setQuery] = useState('')

    const handleParam = setValue => e => setValue(e.target.value)

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
			dispatch({
				type: "RECORD_CASE",
				payload: mutationId,
				})
			
			console.log('DENTRO DE TRY:', mutationId);
			router.push({
				pathname: action,
				query: {q: query},
			  })
		} catch (error) {
			console.log('SUPER ERROR :(');
		}
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
						<BaseButton type="submit">
						EN<Span primary>V</Span>IAR
						</BaseButton>
					</WrapperButtom>
				</WrapperForm>
			</WrapperRight>
		</Fragment>
	);
};

export {
	SearchRight
};
