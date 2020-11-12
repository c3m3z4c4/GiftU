import styled from "styled-components";

export const TitleText = styled.span`
	line-height: 30px;
	letter-spacing: 0.14em;
	font-weight: 400;
	font-size: 24px;
	font-family: Quicksand, sans-serif;
	margin: 30px 0;
`;
export const FormArea = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const inputContainer = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-bottom: 30px;
`;

export const LabelComp = styled.label`
	font-family: Quicksand, sans-serif;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.14em;
	font-feature-settings: "case";
	display: flex;
	align-items: center;
	width: 100%;
	height: 30px;
`;

export const StyledText = styled.span`
	color: ${(props) => (props.primary ? "#87d3b8" : "#ffab07")};
	line-height: 30px;
	letter-spacing: 0.14em;
	font-weight: 400;
	font-size: 24px;
	font-family: Quicksand, sans-serif;
	margin: 30px 0;
`;

export const NormalText = styled.span`
	color: ${(props) => (props.primary ? "#87d3b8" : "#ffab07")};
	line-height: 30px;
	letter-spacing: 0.14em;
	font-weight: 400;
	font-size: 24px;
	font-family: Quicksand, sans-serif;
	margin: 30px 0;

	/*   .label-text {
  margin-right: 15px
  }
  .label-image {
    width: 16px;
    height: 16px;
    margin-left: 8px;
    }
    .label-image__mail {
    transform: rotate(25deg);
    } */
`;

export const InputField = styled.input`
	width: 258px;
	background: transparent;
	border: none;
	border-bottom: 2px solid rgba(135, 211, 184, 0.6);
	font-family: Quicksand, sans-serif;
	font-size: 14px;
	line-height: 17px;
	color: #ffab07;
	padding: 10px 0;

	&:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}
`;
