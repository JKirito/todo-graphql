import React, { useContext } from "react";
import { ListContext } from "../state/States";
import Todo from "./Todo";

const List = () => {
  const { store, setStore } = useContext(ListContext);
  return (
    <div>
      <ul>
        {store.tasks.map((el, key) => {
          //   return <li key={key}>{el.task}</li>;
          return <Todo key={key} task={el.task} completed={el.completed} />;
        })}
      </ul>
    </div>
  );
};

export default List;
