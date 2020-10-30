import React, { Fragment } from "react";
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
// export async function getStaticProps() {
// 	const apolloClient = initializeApollo()
  
// 	await apolloClient.mutate({
// 	   mutation: SEND_INFORMATION,
// 	  variables,
// 	})
  
// 	return {
// 	  props: {
// 		initialApolloState: apolloClient.cache.extract(),
// 	  },
// 	revalidate: 1,
// 	}
//   }

export default Search;
