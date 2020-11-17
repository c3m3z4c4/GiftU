import React from "react";
import { HomeWrapper } from "../components/Main/styles";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import CustomChatbot from "../components/chatbot/CustomChatbot";


const image = "images/footer.png";

const App = () => {
	return (
		<HomeWrapper>
			<Header main />
			<Main />
			<CustomChatbot recognitionEnable={true}/>
			<Footer
				text="¡NOSOTROS TE AYUDAMOS!"
				loginText="Inicia sesión"
				footerImage={image}
				altImage="Demo">
			</Footer>
		</HomeWrapper>
	);
};

export default App;
