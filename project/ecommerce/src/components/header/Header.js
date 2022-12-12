import "./header.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { createContext, useContext, useState } from "react";
import  {
  CategoryContext,
} from "../../context/CategoryContext";

function Logo() {
  return <Navbar.Brand href="#">NORLON</Navbar.Brand>;
}

function AppSearchBar() {
  const { categories, activeCategory, handleCategoryChange } =
    useContext(CategoryContext);

  return (
    <InputGroup className="mr-3">
      <DropdownButton
        variant="outline-secondary"
        title="All Categories"
        id="input-group-dropdown-1"
      >
        {categories.map((category, index) => (
          <Dropdown.Item
            onClick={() => handleCategoryChange(category.name)}
            key={category._id}
            active={activeCategory === category._id ? true : false}
          >
            {category.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <Form.Control aria-label="Text input with dropdown button" />
    </InputGroup>
  );
}

function AppDropDownCategories() {
  const { categories, activeCategory, handleCategoryChange } =
    useContext(CategoryContext);
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
        All Categories
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        {categories.map((category, index) => (
          <Dropdown.Item
            onClick={() => handleCategoryChange(category.name)}
            key={category._id}
            active={activeCategory === category._id ? true : false}
          >
            {category.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

function AppNavbar() {
  return (
    <>
      {[true].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Logo />
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3">
                  <AppSearchBar />
                  <AppDropDownCategories />
                </Nav>
                {/* Wishlist */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
function Header() {
  return (
    <>
      <AppNavbar />
    </>
  );
}

export default Header;
