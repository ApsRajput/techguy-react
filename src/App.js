import './App.css';
import Form from './components/common/Form'
import { BrowserRouter as Router } from 'react-router-dom'
// CRUD Operations
// import { useState } from "react";
// import { Container, Navbar, Row, Col } from "react-bootstrap";
// import AddBook from "./components/AddBook";
// import BooksList from "./components/BooksList";
// import "./App.css";

// END CRUD Operations

function App() {
  
  // CRUD Operations
  // const [bookId, setBookId] = useState("");

  // const getBookIdHandler = (id) => {
  //   console.log("The ID of document to be edited: ", id);
  //   setBookId(id);
  // };
  // END CRUD Operations
  return (

    // CRUD Operations
    // <>
    //   <Navbar bg="dark" variant="dark" className="header">
    //     <Container>
    //       <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
    //     </Container>
    //   </Navbar>

    //   <Container style={{ width: "400px" }}>
    //     <Row>
    //       <Col>
    //         <AddBook id={bookId} setBookId={setBookId} />
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Container>
    //     <Row>
    //       <Col>
    //         <BooksList getBookId={getBookIdHandler} />
    //       </Col>
    //     </Row>
    //   </Container>
    // </>
  // END CRUD Operations

    <Router>
      <div className="App">
        <Form />
      </div>
    </Router>
  );
}

export default App;