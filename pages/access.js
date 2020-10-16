import React, { Fragment } from "react";
import styled from "styled-components";

import AccessLeft from "../components/AccessLeft";
import AccessRight from "../components/AccessRight";

const WrapperSeccion = styled.section`
	width: 100vw;
	display: flex;
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
