import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadToDos } from "reducers/todos";
import { Col, Container, Row } from "react-bootstrap";
import { ToDoFilter } from "container/ToDoFilter";
import { ToDoAdd } from "container/ToDoAdd";
import { ToDoList } from "container/ToDoList";



function MainContent(){

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadToDos());
    }, []);
  

    return (
        <Container className="rounded bg-light">
        <Row>
          <Col>
            <Container className="m-2">
              <h1 className="text-center">Your List of ToDo:</h1>
              <ToDoAdd />
              <ToDoFilter />
              <ToDoList />
            </Container>
          </Col>
        </Row>
      </Container>
    )
}

export default MainContent;
