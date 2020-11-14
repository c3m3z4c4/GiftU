import React, { Fragment } from "react";
import Auth from "../../lib/Auth";
const auth = new Auth();
const Imagepng = "../images/logo.png";
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
	MenuButton,
} from "./styles";

export default class Nav extends React.Component {
	handleLogin() {
		auth.login();
	}

	handlelogout() {
		auth.logout();
	}

	render() {
		return (
			<Wrapper>
				<WrapperImageMenu>
					<Text>MENÚ</Text>
					<LogoImage src={Imagepng} />
				</WrapperImageMenu>
				<ListItems>
					<Item>
						<MenuButton onClick={() => this.handleLogin()}>
							Iniciar <Span>Sesión</Span>
						</MenuButton>
					</Item>
					<Item>
						<Link href="/about">
							<Anchor>Nosotros</Anchor>
						</Link>
					</Item>
					<Item>
						<MenuButton onClick={() => this.handleLogout()}>
							Finalizar <Span>Sesión</Span>
						</MenuButton>
					</Item>
				</ListItems>
			</Wrapper>
		);
	}
}
