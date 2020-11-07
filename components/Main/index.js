import React, { Fragment } from "react";
import Link from "next/link";
import {
	Wrapper,
	WrapperTitle,
	Title,
	WrapperGifts,
	Wrappergift,
	GiftTitle,
	ColorLine,
	Span,
	LinkButton
} from "./styles";

import Auth from '../../lib/Auth';
const auth = new Auth();


export default class Main extends React.Component {

	handleLogin = () => {
		auth.login()
	}

	render() {
		return (
			<Fragment>
				<Wrapper>
					<WrapperTitle>
						<Title>
							<Span>H</Span>OLA,<br />¿<Span primary>N</Span>O <br />
							SABES <br />
							Q<Span primary>U</Span>E <br />
							REGALAR <Span>?</Span>
						</Title>
					</WrapperTitle>
					<WrapperGifts>
						<Wrappergift>
							<Link href="/search">
								<GiftTitle>
									REGALO <br />
									RECOM<Span>É</Span>NDADO
								</GiftTitle>
							</Link>
							<ColorLine primary />
						</Wrappergift>
						<Wrappergift>
							<LinkButton onClick={() => this.handleLogin()} >
								<GiftTitle>
									REGALO <br />
									ID<Span primary>E</Span>AL
								</GiftTitle>
							</LinkButton>
							<ColorLine />
						</Wrappergift>
					</WrapperGifts>
				</Wrapper>
			</Fragment>
		);
	};
}

