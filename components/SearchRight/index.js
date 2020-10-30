import React, { Fragment } from "react";
import Link from "next/link";
// import { gql, useMutation } from '@apollo/client'
import Menu from "../Menu";
import { OptButton } from "../OptButton";
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

// const SEND_INFORMATION = gql`
// 	mutation{
// 		social_network() {
// 			id_receiver
// 			id_social_network
// 			url_social_network
// 		}
// 	}
// `;
// const variables = { 
// 	id_receiver: 4,
// 	id_social_network: 3,
// 	url_social_network: "URL"
// };

const SearchRight = () => {
	// const [sendInrmation, { data }] = useMutation(SEND_INFORMATION);
	return (
		<Fragment>
			<WrapperRight>
				<WrappperMenu>
					<Menu />
				</WrappperMenu>
				<WrapperForm>
					<Textform>
						¿Cómo se <Span primary>llama </Span>esa persona <Span>especial</Span> ?
					</Textform>
					<InputRS />
					<Textform>
						prestanos su <Span>Facebook:</Span>
					</Textform>
					<WrapperLabel>
						<LabelRS src={imgFB} />
						<InputRS></InputRS>
					</WrapperLabel>
					{/* <WrapperPerfiles>
						<TextPerfiles>
							Pe<Span primary>r</Span>files:
						</TextPerfiles>
						<WrapperLabels>
							<WrapperLabel>
								<LabelRS src={imgFB} />
								<InputRS></InputRS>
							</WrapperLabel>
							<WrapperLabel>
								<InputRS />
							</WrapperLabel>
						</WrapperLabels>
					</WrapperPerfiles> */}
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

export default SearchRight;
