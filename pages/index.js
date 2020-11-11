import React from "react";
import { HomeWrapper } from "../components/Main/styles";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const image = "images/footer.png";

const App = () => {
	return (
		<HomeWrapper>
			<Header />
			<Main />
			<Footer
				text="¡NOSOTROS TE AYUDAMOS!"
				loginText="Inicia sesión"
				footerImage={image}
				altImage="Demo"
			/>
		</HomeWrapper>
	);
};

export default App;
