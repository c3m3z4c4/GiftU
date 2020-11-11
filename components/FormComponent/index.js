import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	height: 500px;
`;

const FormComponent = ({ children }) => <StyledForm>{children}</StyledForm>;

export default FormComponent;
