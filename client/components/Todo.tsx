import React from "react";

const Todo = ({ task, completed }: { task: string; completed: boolean }) => {
  return (
    <>
      <input type="checkbox" checked={completed} />
      <li>{task}</li>
    </>
  );
};

export default Todo;
