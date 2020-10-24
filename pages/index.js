import React, { Fragment } from "react";

import Header from "../components/header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const image = "images/footer.png";

const App = () => {
	return (
		<Fragment>
			<Header />
			<Main />
			<Footer
				text="¿Ya tienes una cüenta?"
				loginText="Inicia sesión"
				footerImage={image}
				altImage="Demo"
			/>
		</Fragment>
	);
};

export default App;
