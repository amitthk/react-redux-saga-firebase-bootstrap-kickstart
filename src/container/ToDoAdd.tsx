import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToDo } from "reducers/todos";

export const ToDoAdd = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <Container className="mt-2 mb-2">
      <Form.Control
        size="lg"
        type="text"
        placeholder="Add todo here"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            if (todo !== "") {
              dispatch(addToDo(todo));
            }
            setTodo("");
          }
        }}
      />
    </Container>
  );
};
