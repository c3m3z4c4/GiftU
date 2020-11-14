import React, { Fragment } from "react";
import styled from "styled-components";

import AccessLeft from "../components/AccessLeft";
import AccessRight from "../components/AccessRight";

const WrapperSeccion = styled.section`
	width: 100%;
	display: flex;
	@media (max-width: 768px) {
		flex-wrap: wrap;
		
	}
`;

const Access = () => {
	return (
		<Fragment>
			<WrapperSeccion>
				<AccessLeft />
				<AccessRight />
			</WrapperSeccion>
		</Fragment>
	);
};

export default Access;
