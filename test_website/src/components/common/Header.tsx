import { Navbar, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router";
import { useCart } from "../../hooks/useCart.ts";

export function Header() {
  const { cart } = useCart();

  return (
    <Navbar expand="lg">
      <Navbar.Brand>My Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/browse" className="menu-browse-link">
            Browse
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="menu-contact-link">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="menu-cart-link">
            Cart
            {cart.length > 0 && (
              <>
                {" "}
                <Badge bg="primary" className="header-cart-counter">
                  {cart.length}
                </Badge>
              </>
            )}
          </Nav.Link>
          <Nav.Link as={Link} to="/" className="menu-login-link">
            Log out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
