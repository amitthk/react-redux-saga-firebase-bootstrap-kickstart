import React from "react";
import { CloseButton, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteToDo, toggleToDo } from "reducers/todos";
import { ToDo } from "types";

export interface ToDoItemProperty {
  todo: ToDo;
}

export const ToDoItem: React.FC<ToDoItemProperty> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <ListGroup.Item as="li" key={todo.id}>
      <Row>
        <Col onClick={() => dispatch(toggleToDo(todo.id))}>
          {todo.completed && (
            <p className="text-decoration-line-through">{todo.summary}</p>
          )}
          {!todo.completed && <p>{todo.summary}</p>}
        </Col>
        <Col sm={1}>
            <button onClick={() => dispatch(deleteToDo(todo.id))}>
              <i className="bi bi-trash3">X</i>
            </button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};
