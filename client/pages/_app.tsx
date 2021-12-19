import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

// eslint-disable-next-line require-jsdoc
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
