import React from "react";

import { TitleText, FormArea, LabelComp, InputField } from "./styles";
import { BaseButton } from "../Button";
import { GButton } from "../GButton";
import { FbButton } from "../FbButton";

export const UserForm = () => {
	const FbLogo = "/images/facebook.png";
	const GLogo = "/images/google.png";
	return (
		<div>
			<TitleText>SignIn</TitleText>
			<FormArea>
				<div className="input-container">
					<LabelComp>
						<span>Email</span>
						<img src="/images/mail.png" />
					</LabelComp>
					<InputField />
				</div>
				<div className="input-container">
					<LabelComp>
						<span>Password</span>
						<img src="/images/key.png" />
					</LabelComp>
					<InputField />
				</div>
				<div>
					<BaseButton title="Sign In"></BaseButton>
				</div>
				<div>
					<FbButton title="Sign In With " src={FbLogo}></FbButton>
					<GButton title="Sign In With " src={GLogo}></GButton>
				</div>
			</FormArea>
		</div>
	);
};
