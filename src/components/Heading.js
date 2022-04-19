import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";

const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <NavbarBrand href="/">Meu Time</NavbarBrand>
      <Nav>
        <NavItem>
          <Link className="btn btn-primary" to="/add">
            Adicionar Usuário
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Heading;
