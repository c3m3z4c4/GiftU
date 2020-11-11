import React, { Component, Fragment } from "react";
import Auth from "../lib/Auth";
const auth = new Auth();
// import { initializeApollo } from '../lib/apolloClient'
import styled from "styled-components";
import SearchLeft from "../components/SearchLeft";
import {
	SearchRight,
	// SEND_INFORMATION,
	// variables,
} from "../components/SearchRight";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	@media (max-width: 425px) {
		flex-wrap: wrap;
	}
`;
export default class SearchSecure extends Component {
	componentDidMount() {
		var user_data = localStorage.getItem("user_details");
		var isLoggedIn = localStorage.getItem("isLoggedIn");
		if (!isLoggedIn || !user_data) {
			window.location.replace("/");
		}
	}

	logout() {
		auth.logout();
	}
	render() {
		return (
			<Fragment>
				<Wrapper>
					<SearchLeft />
					<SearchRight />
				</Wrapper>
			</Fragment>
		);
	}
}
