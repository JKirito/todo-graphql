import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import TestComponent from "./TestComponent";

const Client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000",
});

const Home = () => {
  return (
    <ApolloProvider client={Client}>
      <div>
        <h1>Welcome to Home Page</h1>
        <TestComponent />
      </div>
    </ApolloProvider>
  );
};

export default Home;
