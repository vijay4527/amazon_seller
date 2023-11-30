import "@/styles/globals.css";
import Head from "next/head";
import LinkComponent from "../Link/link";
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
