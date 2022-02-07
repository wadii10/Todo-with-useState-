import React from "react";
import TaskCard from "./TaskCard";

const ListTask = (props) => {
  return (
    <div>
      {props.list.map((el, i) => (
        <TaskCard oneTask={el} key={i} del={props.delete} donee={props.done} />
      ))}
    </div>
  );
};

export default ListTask;
