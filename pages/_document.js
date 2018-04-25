import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no"/>
        <meta name="format-detection" content="email=no" />
        <meta name="x5-orientation" content="landscape" />
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}