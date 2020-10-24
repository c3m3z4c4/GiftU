import React, { Fragment } from "react";
import Link from "next/link"
import {
	WrapperLeft,
	name,
	LogoName,
	WrapperMainText,
	MainText,
	imgFooter,
	ImgSearch,
	Span,
	AncorImg,
	WrapperMainImage,
} from "./styles";

const SearchLeft = () => {
	return (
		<Fragment>
			<WrapperLeft>
				<Link href="/">
					<AncorImg><LogoName src={name} /> </AncorImg>
				</Link>
				<WrapperMainText>
					<MainText>
						CUÉN<Span primary>T</Span>AME UN POCO M<Span>Á</Span>S:
					</MainText>
				</WrapperMainText>
				<WrapperMainImage>
				 <ImgSearch src={imgFooter} />
				</WrapperMainImage>	
			</WrapperLeft>
		</Fragment>
	);
};

export default SearchLeft;
