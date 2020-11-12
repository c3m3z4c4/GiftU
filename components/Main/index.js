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
	LinkButton,
	LinkLineButton,
} from "./styles";

import Auth from "../../lib/Auth";
const auth = new Auth();

export default class Main extends React.Component {
	handleLogin = () => {
		auth.login();
	};

	render() {
		return (
			<Fragment>
				<Wrapper>
					<WrapperTitle>
						<Title>
							<Span>H</Span>OLA,
							<br />¿<Span primary>N</Span>O <br />
							SABES <br />Q<Span primary>U</Span>&Eacute; <br />
							REGALAR <Span>?</Span>
						</Title>
					</WrapperTitle>
					<WrapperGifts>
						<Wrappergift>
							<Link href="/search">
								<GiftTitle>
									REGALO <br />
									RECOM<Span>E</Span>NDADO
								</GiftTitle>
							</Link>
							<Link href="/search">
								<ColorLine primary />
							</Link>
						</Wrappergift>
						<Wrappergift>
							<LinkButton onClick={() => this.handleLogin()}>
								<GiftTitle>
									REGALO <br />
									ID<Span primary>E</Span>AL
								</GiftTitle>
							</LinkButton>
							<LinkLineButton onClick={() => this.handleLogin()}>
								<ColorLine />
							</LinkLineButton>
						</Wrappergift>
					</WrapperGifts>
				</Wrapper>
			</Fragment>
		);
	}
}
