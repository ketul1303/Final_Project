import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <Navbar>
          <Nav>
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to={"/todo"}>
              Todos
            </Nav.Link>

            <Nav.Link as={Link} to={"/user"}>
              Userlist
            </Nav.Link>

            <Nav.Link as={Link} to={"/logout"} onClick={logout}>
              Logout
            </Nav.Link>
          </Nav>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
