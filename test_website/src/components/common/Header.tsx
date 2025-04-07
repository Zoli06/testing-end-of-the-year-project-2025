import { Navbar, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router";
import { useCart } from "../../hooks/useCart.ts";

export function Header() {
  const { cart } = useCart();

  return (
    <Navbar expand="lg">
      <Navbar.Brand>My Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/browse">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart
            {cart.length > -1 && (
              <>
                {" "}
                <Badge bg="primary">a</Badge>
              </>
            )}
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            Log out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
