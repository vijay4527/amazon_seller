import { Html, Head, Main, NextScript } from "next/document";
import LinkComponent from "@/Link/link.js";
export default function Document() {
  return (
    <Html lang="en">
      <body>
        <Head>
          <LinkComponent></LinkComponent>
        </Head>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
