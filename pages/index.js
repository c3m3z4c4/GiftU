import React, { Fragment } from "react";
import GlobalStyle from "../Styles/GlobalStyle";

import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";

const image = "images/footer.png";

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
};

export default App;
