import React, { Fragment, useState } from "react";
// import Link from "next/link";
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

const SearchRight = () => {
	const [sendInrmation, { loading }] = useMutation(SEND_INFORMATION);

	// const sendData = () => {
	// 	sendInrmation({
	// 	  variables,
	// 	  optimisticResponse: {
	// 		__typename: 'Mutation',
	// 		// AddSocialNetwork: {
	// 		//   __typename: 'Post',
	// 		// },
	// 	  },
	// 	})
	// 	console.log('que paso??');
	//   }
	const handleSubmit = (event) => {
		event.preventDefault()
		const form = event.target
		const formData = new window.FormData(form)
		const name = formData.get('name')
		const link = formData.get('link')
		form.reset()
	
		sendInrmation({
		  variables: { 
			receiver_name: name,
		    id_social_network: 3,
			url_social_network: link, 
		},
		//   update: (cache, { data: { sendInrmation } }) => {
		// 	cache.modify({
		// 	  fields: {
		// 		allPosts(existingPosts = []) {
		// 		  const newPostRef = cache.writeFragment({
		// 			data: sendInrmation,
		// 			fragment: gql`
		// 			  fragment NewPost on allPosts {
		// 				id
		// 				type
		// 			  }
		// 			`,
		// 		  })
		// 		  return [newPostRef, ...existingPosts]
		// 		},
		// 	  },
		// 	})
		//   },
		})
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
    SEND_INFORMATION,
    SearchRight,
};
