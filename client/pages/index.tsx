import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Home from "../components/Home";
/**
 *
 * @return {JSX.Element}: The JSX code for Home Page
 */
export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simplified Todo</title>
        <meta
          name="description"
          content="Combination of lot of tech for a small todo application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Home />
      </div>
    </div>
  );
}
