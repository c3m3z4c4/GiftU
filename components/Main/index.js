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
} from "./styles";

const Main = () => {
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
						<Link href="/access"> 
							<GiftTitle>
								REGALO <br />
								ID<Span primary>E</Span>AL
							</GiftTitle>
						</Link>
						<ColorLine />
					</Wrappergift>
				</WrapperGifts>
			</Wrapper>
		</Fragment>
	);
};

export default Main;

