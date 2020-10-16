import React, { Fragment } from "react";

import {
	Wrapper,
	WrapperImageMenu,
	LogoImage,
	Text,
	Span,
	ListItems,
	Item,
	Link,
} from "./styles";

const Imagepng = "../images/logo.png";

const Menu = () => {
	return (
		<Fragment>
			<Wrapper>
				<WrapperImageMenu>
					<Text>MENÜ</Text>
					<LogoImage src={Imagepng} />
				</WrapperImageMenu>
				<ListItems>
					<Item>
						<Link href="/">
							Sign <Span>In</Span>
						</Link>
					</Item>
					<Item>
						<Link href="/">
							<Span>P</Span>rofile
						</Link>
					</Item>
					<Item>
						<Link href="/">
							About <Span>Üs</Span>
						</Link>
					</Item>
				</ListItems>
			</Wrapper>
		</Fragment>
	);
};

export default Menu;
