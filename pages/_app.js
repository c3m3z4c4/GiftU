import { AppProps } from "next/app";
import { Fragment } from "react";
/* import GlobalStyle from "../styles/GlobalStyle.js"; */

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			
			<Component {...pageProps} />
		</Fragment>
	);
}
export default MyApp;
