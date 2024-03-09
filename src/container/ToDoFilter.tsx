import { ToDoFilterButtons } from "components/ToDoFilterButtons";
import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { filterSelector } from "selectors";
import { setFilter } from "reducers/filter";

export const ToDoFilter = () => {
  const { filter } = useSelector(filterSelector);
  const dispatch = useDispatch();

  return (
    <Container className="mt-2 mb-2">
      <Row className="align-items-end">
        <Col sm={1} />
        <Col>
          <Form.Control
            value={filter}
            type="text"
            placeholder="type filter string here"
            onChange={(e) => {
              dispatch(setFilter(e.target.value));
            }}
          />
        </Col>
        <Col>
          <ToDoFilterButtons />
        </Col>
      </Row>
    </Container>
  );
};
