import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="/fonts/Averta-Regular.woff2"
          rel="preload"
          type="font/woff2"
          crossOrigin="anonymous"
          as="font"
        />
        <link
          href="/fonts/Averta-SemiBold.woff2"
          rel="preload"
          type="font/woff2"
          crossOrigin="anonymous"
          as="font"
        />
        <link
          href="/fonts/Averta-Bold.woff2"
          rel="preload"
          type="font/woff2"
          crossOrigin="anonymous"
          as="font"
        />
        <link
          href="/fonts/Recoleta-Regular.woff2"
          rel="preload"
          type="font/woff2"
          crossOrigin="anonymous"
          as="font"
        />
        <link
          href="/fonts/Recoleta-Bold.woff2"
          rel="preload"
          type="font/woff2"
          crossOrigin="anonymous"
          as="font"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
