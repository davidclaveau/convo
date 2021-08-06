import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.scss";

const Navigation = () => {
  return(
    <Navbar
      bg="dark"
      sticky="top"
      expand="lg"
    >
      <Navbar.Brand>
        <NavLink to="/">
          <img src={require("/Users/davidgjclaveau/side_projects/convo/public/images/convo.png")} />
          <span id="convo-title">Logo</span>
        </NavLink>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <NavLink to="/login"> Login </NavLink>
          <NavLink to="/registration"> Registration </NavLink>
          <NavLink to="/conversations"> Conversations </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;