import React, { Fragment } from "react";

import {
	Wrapper,
	Text,
	WrapperCarousel,
	CarouselItem,
	imgItem1,
	imgItem2,
	imgItem3,
	Item,
	Span,
} from "./styles";

const Slider = () => {
	return (
		<Fragment>
			<Wrapper>
				<Text>
					SUGE<Span>R</Span>ENCIAS <br />
					SIMILA<Span primary>R</Span>ES
				</Text>
				<WrapperCarousel>
					<CarouselItem>
						<Item src={imgItem1} />
					</CarouselItem>
					<CarouselItem>
						<Item src={imgItem2} />
					</CarouselItem>
					<CarouselItem>
						<Item src={imgItem3} />
					</CarouselItem>
					<CarouselItem>
						<Item src={imgItem2} />
					</CarouselItem>
					<CarouselItem>
						<Item src={imgItem3} />
					</CarouselItem>
				</WrapperCarousel>
			</Wrapper>
		</Fragment>
	);
};

export default Slider;
