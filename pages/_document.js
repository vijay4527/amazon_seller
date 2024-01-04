import { Html, Head, Main, NextScript } from "next/document";
import LinkComponent from "@/Link/link.js";
export default function Document() {
  return (
    <Html lang="en">
         <meta name="description" content="XQuantum" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body>
        <Head>
          <LinkComponent></LinkComponent>
        </Head>
        <title>XQuantum</title>
      
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
