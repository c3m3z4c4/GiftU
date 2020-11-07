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
# 	mutation AddSocialNetwork($receiver_name: String!, $id_social_network: Int!, $url_social_network: String!) {
#   social_network(receiver_name: $receiver_name, id_social_network: $id_social_network, url_social_network: $url_social_network) {
# 		receiver_name
# 		id_social_network
# 		url_social_network
#   }
# }
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
    receiver_name,
    id_social_network,
    url_social_network,
    id_occasion,
  }
}
`;


let variables;

const SearchRight = () => {
	const [sendInrmation] = useMutation(SEND_INFORMATION);
	const [formData, setFormData] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault()

		// const { value, name } = event.target;
		// setForm({
		// 	form: {
		// 	  [name]: value,
		// 	},
		// });
		// const form = event.target
		// const formData = new window.FormData(form)
		// const name = formData.get('name')
		// const link = formData.get('link')
		// const occasion = formData.get('occasion')
		// form.reset()

		variables = {
			receiver_name: searchform.form.name,
			id_social_network: 1,
			url_social_network: searchform.form.link,
			id_occasion: searchform.form.occasion,
		};	
		console.log('FORMMMM', variables);
		sendInrmation({
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
						P&aacute;sanos su <Span>Facebook:</Span>
					</Textform>
					<WrapperLabel>
						<LabelRS src={imgFB} />
						<InputRS placeholder="link" name="link" type="text" />
					</WrapperLabel>

					<Textform>
						¿Cuál es<Span>la</Span> ocasión?
					</Textform>
					<SelectOccasionComponent />
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
	SearchRight,
};
