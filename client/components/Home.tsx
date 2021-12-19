import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import TestComponent from "./TestComponent";

// import

const Client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graqhql/",
});

const Home = () => {
  return (
    <ApolloProvider client={Client}>
      <div className="text-3xl">
        <p className="">Welcome to Home Page</p>
        <TestComponent />
      </div>
    </ApolloProvider>
  );
};

export default Home;
