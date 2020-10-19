// import Document, { Html, Head, Main, NextScript } from "next/document";

// class MyDocument extends Document {
// 	render() {
// 		return (
// 			<Html>
// 				<Head>
// 					<link
// 						href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap"
// 						rel="stylesheet"
// 					></link>
// 					<link
// 						href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
// 						rel="stylesheet"
// 					></link>
// 				</Head>
// 				<body>
// 					<Main />
// 					<NextScript />
// 				</body>
// 			</Html>
// 		);
// 	}
// }

// export default MyDocument;

import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
};