import React, { Fragment } from "react";

import Menu from "../Menu";
import { OptButton } from "../OptButton";
import {
	WrapperRight,
	WrappperMenu,
	WrapperForm,
	WrapperGender,
	TextGender,
	WrapperImg,
	WrapperOccacion,
	TextOccacion,
	SelectOccacion,
	WrapperPerfiles,
	TextPerfiles,
	WrapperLabels,
	WrapperLabel,
	imgInt,
	imgFB,
	LabelRS,
	InputRS,
	WrapperButtom,
	BaseButton,
	Span,
} from "./styles";

const SearchRight = () => {
	return (
		<Fragment>
			<WrapperRight>
				<WrappperMenu>
					<Menu />
				</WrappperMenu>
				<WrapperForm>
					<WrapperGender>
						<TextGender>
							<Span primary>G</Span>énero:
						</TextGender>
						<WrapperImg>
							<OptButton src="/images/she-opt.png" />
							<OptButton src="/images/he-opt.png" />
						</WrapperImg>
					</WrapperGender>
					<WrapperOccacion>
						<TextOccacion>
							O<Span>c</Span>ación:
						</TextOccacion>
						<SelectOccacion>
							<option value="Bautizo">Bautizo</option>
							<option value="Boda">Boda</option>
							<option value="Navidad">Navidad</option>
							<option value="Aniversario" selected>
								Aniversario
							</option>
						</SelectOccacion>
					</WrapperOccacion>
					<WrapperPerfiles>
						<TextPerfiles>
							Pe<Span primary>r</Span>files:
						</TextPerfiles>
						<WrapperLabels>
							<WrapperLabel>
								<LabelRS src={imgFB} />
								<InputRS></InputRS>
							</WrapperLabel>
							<WrapperLabel>
								<LabelRS src={imgInt} />
								<InputRS></InputRS>
							</WrapperLabel>
						</WrapperLabels>
					</WrapperPerfiles>
					<WrapperButtom>
						<BaseButton>
							EN<Span primary>V</Span>IAR
						</BaseButton>
					</WrapperButtom>
				</WrapperForm>
			</WrapperRight>
		</Fragment>
	);
};

export default SearchRight;
