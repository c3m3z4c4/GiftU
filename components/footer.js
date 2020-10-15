import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Quicksand";
`;

const WrapperLogin = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Cuenta = styled.p`
  font-size: 15px;
`;

const LinkLogin = styled.a`
  color: blue;
  font-size: 16px;
`;

const ImageFooter = styled.img`
  height: auto;
  width: 100vw;
`;

const Footer = (props) => {
<<<<<<< HEAD
	return (
		<Fragment>
			<Wrapper>
				<WrapperLogin>
					<Cuenta>{props.text}</Cuenta>
					<LinkLogin>{props.loginText}</LinkLogin>
				</WrapperLogin>
				<ImageFooter src={props.footerImage} alt={props.altImage} />
			</Wrapper>
		</Fragment>
	);
=======
  return (
    <Fragment>
      <Wrapper>
        <WrapperLogin>
          <Cuenta>{props.texto}</Cuenta>
          <LinkLogin>{props.loginText}</LinkLogin>
        </WrapperLogin>
        <ImageFooter src={props.footerImage} alt={props.altImage} />
      </Wrapper>
    </Fragment>
  );
>>>>>>> 37e1b8d388f3b294302c395ea5656c3a8bb66a53
};

export default Footer;
