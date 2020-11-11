import React, { Fragment } from "react";
import { initializeApollo } from "../lib/apolloClient";
import styled from "styled-components";
import SearchLeft from "../components/SearchLeft";
import { OCCASION } from "../components/SearchRight/selectOccasion";
import { SearchRight } from "../components/SearchRight/index";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	@media (max-width: 425px) {
		flex-wrap: wrap;
	}
`;

const Search = () => {
	return (
		<Fragment>
			<Wrapper>
				<SearchLeft />
				<SearchRight />
			</Wrapper>
		</Fragment>
	);
};
export async function getStaticProps() {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: OCCASION,
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
		},
		revalidate: 1,
	};
}

export default Search;
