import React from "react";
import { gql, useQuery } from "@apollo/client";

const TEST_QUERY = gql`
  query getAllTodos {
    todos {
      completed
      task
    }
  }
`;
const TestComponent = () => {
  const { loading, data } = useQuery(TEST_QUERY);
  if (loading) return <div>Loading...</div>;
  return (
    <div className="font-bold">
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default TestComponent;
