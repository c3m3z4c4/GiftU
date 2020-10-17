import React, { Fragment } from "react";
import Link from "next/link";

import {
	Wrapper,
	WrapperImageMenu,
	LogoImage,
	Text,
	Span,
	ListItems,
	Item,
	Anchor,
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
						<Link href="/access">
							<Anchor>
								Sign <Span>In</Span>
							</Anchor>
						</Link>
					</Item>
					<Item>
						<Link href="/">
							<Anchor>
								<Span>P</Span>rofile
							</Anchor>
						</Link>
					</Item>
					<Item>
						<Link href="/">
							<Anchor>
								About <Span>Üs</Span>
							</Anchor>
						</Link>
					</Item>
				</ListItems>
			</Wrapper>
		</Fragment>
	);
};

export default Menu;
