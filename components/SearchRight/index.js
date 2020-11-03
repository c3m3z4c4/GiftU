import React, { Fragment, useState } from "react";
import Link from "next/link";
import { gql, useMutation } from '@apollo/client'
import Menu from "../Menu";
import {
	WrapperRight,
	WrappperMenu,
	WrapperForm,
	WrapperPerfiles,
	TextPerfiles,
	WrapperLabels,
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
	mutation AddSocialNetwork($receiver_name: Int!, $id_social_network: Int!, $url_social_network: String!) {
  social_network(receiver_name: $receiver_name, id_social_network: $id_social_network, url_social_network: $url_social_network) {
		receiver_name
		id_social_network
		url_social_network
  }
}
`;

const GET_SOCIAL_NETWORK = gql`
	query GetSocialNetwork($id:ID!){
		social_network(id:$id){
		receiver_name
		social_network_name
		url_social_network
		search_result
   }
}
`;
let variables;

const SearchRight = () => {
	const [sendInrmation, { data }] = useMutation(SEND_INFORMATION);

	const handleSubmit = (event) => {
		event.preventDefault()
		const form = event.target
		const formData = new window.FormData(form)
		const name = formData.get('name')
		const link = formData.get('link')
		form.reset()

		variables = { 
			receiver_name: name,
			id_social_network: 3,
			url_social_network: link, 
		};
	
		sendInrmation({
		  variables,		  
		  update: (cache, { data: { sendInrmation } }) => {
			cache.modify({
			  fields: {
				GetSocialNetwork(existingPosts = []) {
				  const inforef = cache.writeFragment({
					data: sendInrmation,
					// fragment: gql`
					//   fragment NewPost on GetSocialNetwork {
					// 	receiver_name
					// 	url_social_network
					//   }
					// `,
					
				  })
				  return [inforef, ...existingPosts]
				},
			  },
			})
		  },

		  	// optimisticResponse: true,
		// update: (cache) => {
			// const informationSended = cache.readQuery({ query: GET_SOCIAL_NETWORK });
			// cache.readQuery({ query: GET_SOCIAL_NETWORK });
			// const newTodos = informationSended.todos.map(t => {
			//   if (t.id === todo.id) {
			// 	return {...t, is_completed: !t.is_completed};
			//   } else {
			// 	return t;
			//   }
			// });
		// 	cache.writeQuery({
		// 	  query: GET_SOCIAL_NETWORK,
		// 	  data
		// 	});
		//   }
		});
		console.log('name:', name, 'link:', link);
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
					<InputRS placeholder="nombre" name="name" type="text" />
					<Textform>
						Pasanos su <Span>Facebook:</Span>
					</Textform>
					<WrapperLabel>
						<LabelRS src={imgFB} />
						<InputRS placeholder="link" name="link" type="text" />
					</WrapperLabel>
					<WrapperButtom>
						<Link href="/podium">
						<BaseButton type="submit">
							EN<Span primary>V</Span>IAR
						</BaseButton>
						</Link>
					</WrapperButtom>
				</WrapperForm>
			</WrapperRight>
		</Fragment>
	);
};

export {
    SEND_INFORMATION,
	SearchRight,
	variables,
};
