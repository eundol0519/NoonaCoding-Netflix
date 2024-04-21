import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-black">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src="https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg" width={100} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="text-white" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="/movies">
                Movies
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Route의 자손들을 불러오는 컴포넌트 */}
      <Outlet />
    </React.Fragment>
  );
};

export default AppLayout;
