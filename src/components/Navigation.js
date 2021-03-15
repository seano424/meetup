import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import FavoritesContext from "../store/favorites-context";

export default function Navigation() {
  const favsCtx = useContext(FavoritesContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand>
        <Link to="/all">Home</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/all">All Meets</Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary">
            <Link to="/favs">
              <span style={{color: 'white'}}>Favs</span> <Badge variant="light">{favsCtx.totalFavorites}</Badge>
              <span className="sr-only">unread messages</span>
            </Link>
          </Button>
          <Nav.Link>
            <Link to="/new">Create</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
