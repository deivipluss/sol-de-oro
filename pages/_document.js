import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link
  rel="preload"
  href="/fonts/Inter-Regular.woff2"  // Cambia la ruta
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
          <link
            rel="preload"
            href="/_next/static/media/Inter-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
