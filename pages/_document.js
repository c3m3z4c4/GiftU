import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap"
						rel="stylesheet"
					></link>
					<link
						href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body className="body-main">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;