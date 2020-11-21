import React, { useState } from "react";
import { HomeWrapper } from "../components/Main/styles";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import CustomChatbot from "../components/chatbot/CustomChatbot";


const image = "images/footer.png";

const App = () => {
	// const[state, setState] = useState(false)
/* 	let state = false
		if (typeof window !== "undefined") {
			return state = true;
	}
	
	console.log("This is a state error", state); */
	return (
		<HomeWrapper>
			<Header main />
			<Main />
			{/* { state ? <CustomChatbot/> : console.log('Error') } */}
			<CustomChatbot/>

			
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
