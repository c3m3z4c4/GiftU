import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useApollo } from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "../context/index";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `;

const theme = {
	colors: {
		primary: "#726666",
	},
};

export default function App({ Component, pageProps }) {
	const apolloClient = useApollo(pageProps.initialApolloState);
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<ApolloProvider client={apolloClient}>
					<Provider>
						<Component {...pageProps} />
					</Provider>
				</ApolloProvider>
				<link rel="shortcut icon" href="/static/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap"
					rel="stylesheet"
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap"
					rel="stylesheet"
				></link>
			</ThemeProvider>
		</>
	);
}
