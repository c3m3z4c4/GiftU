import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
/*   static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  } */

  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet"></link>
        </Head> 
        <body className="body-main">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument