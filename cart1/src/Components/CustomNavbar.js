import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav, NavDropdown, Container, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './CustomNavbar.css';

const CustomNavbar = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <LinkContainer to="/">
           <Navbar.Brand>Shopping Cart</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ml-auto">
             <NavDropdown className="d-flex align-items-center" title="Categories" id="basic-nav-dropdown">
              <LinkContainer to="/electronics">
                <NavDropdown.Item>Electronics</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/fashion">
                <NavDropdown.Item>Fashion</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/home-and-kitchen">
                <NavDropdown.Item>Home & Kitchen</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/">
                <NavDropdown.Item>All Categories</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          
            <LinkContainer  id="nav-cart" to="/cart">
              <Nav.Link >
                 <span className="fs-4"><i class="fa-sharp fa-solid fa-cart-shopping"></i></span>
                Cart <Badge pill variant="light">{cartItems.length}</Badge>
               
              </Nav.Link>
            </LinkContainer>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default CustomNavbar;
