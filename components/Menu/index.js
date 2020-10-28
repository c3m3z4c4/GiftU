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

export default class Nav extends React.Component {
	handleLogin() {
		auth.login();
	}

	render() {
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
									Iniciar <Span>Sesión</Span>
								</Anchor>
							</Link>
						</Item>
						<Item>
							<Link href="/">
								<Anchor>
									<Span>P</Span>erfil
								</Anchor>
							</Link>
						</Item>
						<Item>
							<Link href="/">
								<Anchor>
									Nosot<Span>ros</Span>
								</Anchor>
							</Link>
						</Item>
					</ListItems>
				</Wrapper>
			</Fragment>
		);
	}
}
