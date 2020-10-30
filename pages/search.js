import React, { Fragment } from "react";
import styled from "styled-components";

import SearchLeft from "../components/SearchLeft";
import SearchRight from "../components/SearchRight";

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

export default Search;
