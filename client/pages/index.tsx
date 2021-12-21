import React, { useState } from "react";
import Head from "next/head";
import List from "../components/List";
import { ListContext } from "../state/States";
// import styles from "../styles/Home.module.css";
// import Home from "../components/Home";
/**
 *
 * @return {JSX.Element}: The JSX code for Home Page
 */

interface StoreType {
  tasks: {
    completed: boolean;
    task: string;
    id: number;
  }[];
}

const Store: StoreType = {
  tasks: [
    {
      task: "Test",
      completed: false,
      id: 1,
    },
  ],
};

// eslint-disable-next-line valid-jsdoc
/**
 *
 * @returns {}
 */
export default function App() {
  const [store, setStore] = useState(Store);
  return (
    <ListContext.Provider value={{ store, setStore }}>
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
          <List />
        </div>
      </div>
    </ListContext.Provider>
  );
}
