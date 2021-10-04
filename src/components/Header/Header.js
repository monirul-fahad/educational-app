import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "green",
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <span className="brand-name">SKILLIFY</span>
        </Navbar.Brand>
        <Nav className="mx-auto">
          <NavLink className="link" activeStyle={activeStyle} to="/home">
            Home
          </NavLink>
          <NavLink className="link" activeStyle={activeStyle} to="/about">
            About
          </NavLink>
          <NavLink className="link" activeStyle={activeStyle} to="/courses">
            Courses
          </NavLink>
          <NavLink className="link" activeStyle={activeStyle} to="/contact">
            Contact
          </NavLink>
        </Nav>
        <Button variant="outline-warning">Register</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
