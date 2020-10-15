import React, { Fragment } from "react";
import GlobalStyle from "../Styles/GlobalStyle";

import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
const image = "images/footer.png";
<<<<<<< HEAD

const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Header />
			<Main />
			<Footer
				text="¿Ya tienes una cuenta?"
				loginText="Inicia sesión"
				footerImage={image}
				altImage="Demo"
			/>
		</Fragment>
	);
=======
const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer
        texto="¿Ya tienes una cuenta?"
        loginText="Inicia sesión"
        footerImage={image}
        altImage="Demo"
      />
    </Fragment>
  );
>>>>>>> 37e1b8d388f3b294302c395ea5656c3a8bb66a53
};

export default App;
