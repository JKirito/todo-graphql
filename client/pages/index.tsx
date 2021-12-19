import React from "react";
import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Home from "../components/Home";
/**
 *
 * @return {JSX.Element}: The JSX code for Home Page
 */
export default function App() {
  return (
    <div className="">
      <Head>
        <title>Simplified Todo</title>
        <meta
          name="description"
          content="Combination of lot of tech for a small todo application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-pink-200 to-violet-300 flex justify-center items-center">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div>
            <input
              type="text"
              name=""
              id=""
              className="shadow appearance-none border rounded w-full py-2 pl-2"
            />
          </div>
          <p>CENTER</p>
        </div>
      </div>
    </div>
  );
}
