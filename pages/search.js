import React, { Fragment } from "react";
import styled from "styled-components";

import SearchLeft from "../components/SearchLeft";
import SearchRight from "../components/SearchRight";

import { OptButton } from "../components/OptButton";
import Menu from "../components/Menu";
import Link from "next/link";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
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
