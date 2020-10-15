import React, { Fragment } from "react";

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
						HOLA, <br />¿ <Span primary>Q</Span>ÜÉ <br />
						QUIERES <br />
						REGALAR <Span>?</Span>
					</Title>
				</WrapperTitle>
				<WrapperGifts>
					<Wrappergift>
						<GiftTitle>
							REGALO <br />
							RECOM<Span>É</Span>NDADO
						</GiftTitle>
						<ColorLine primary />
					</Wrappergift>
					<Wrappergift>
						<GiftTitle>
							REGALO <br />
							ID<Span primary>E</Span>AL
						</GiftTitle>
						<ColorLine />
					</Wrappergift>
				</WrapperGifts>
			</Wrapper>
		</Fragment>
	);
};

export default Main;
