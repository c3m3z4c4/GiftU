import React, { Fragment, useContext } from "react";
import { Context } from "../../context/index";
import Link from "next/link";

import {
	Wrapper,
	Text,
	WrapperCarousel,
	Item,
	CarouselItem,
	Span,
} from "./styles";

const Slider = () => {
	const {
		state: { podium },
	} = useContext(Context);

	return (
		<Fragment>
			<Wrapper>
				<Text>
					SUGE<Span>R</Span>ENCIAS <br />
					POD<Span primary>I</Span>UM
				</Text>
				<WrapperCarousel>
					{podium.map((product) => (
						<CarouselItem>
							{product.map((item) => (
								<Link href="/podium">
									<Item src={item.img} />
								</Link>
							))}
						</CarouselItem>
					))}
				</WrapperCarousel>
			</Wrapper>
		</Fragment>
	);
};

export default Slider;
