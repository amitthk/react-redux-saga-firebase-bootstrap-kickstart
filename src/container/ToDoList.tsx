import { ToDoItem } from "components/ToDoItem";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { filterSelector, toDoSelector } from "selectors";

export const ToDoList = () => {
  const { filter, showOption } = useSelector(filterSelector);
  const { todos } = useSelector(toDoSelector);
  const filterLowerCase = filter.toLowerCase();
  const filteredList = todos.filter((todo) => {
    if (showOption === "completed" && !todo.completed) {
      return false;
    }
    if (showOption === "active" && todo.completed) {
      return false;
    }

    if (filter !== "") {
      return todo.summary.toLowerCase().includes(filterLowerCase);
    }
    return true;
  });

  return (
    <ListGroup as="ul">
      {filteredList.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ListGroup>
  );
};
