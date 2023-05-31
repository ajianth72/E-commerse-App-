import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import CartContext from './Context/CartContext';

function Header() {
  const ctx = useContext(CartContext);
  const orderList = ctx.orderList;
  let cartItemCount = 0;
  orderList.forEach((item) => {
    cartItemCount += item.quantity;
  });

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
          <Nav>
            <Button
              variant="outline-warning"
              onClick={() => ctx.setCartVisibility(true)}
            >
              My Cart {cartItemCount}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
