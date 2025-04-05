import { Call, Home, Logout, ShoppingCart } from "@mui/icons-material";
import { Badge, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router";
import { useCart } from "../../hooks/useCart.ts";

export function Header() {
  const { cart } = useCart();

  return (
    <Container className="flex justify-between items-center p-2 bg-gray-200 mb-4">
      <div>
        <Typography variant="h5">My Shop</Typography>
      </div>
      <div>
        <Link to="/browse">
          <Button>
            <Home />
          </Button>
        </Link>
        <Link to="/contact">
          <Button>
            <Call />
          </Button>
        </Link>
        <Link to="/cart">
          <Button>
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCart />
            </Badge>
          </Button>
        </Link>
        <Link to="/">
          <Button>
            <Logout />
          </Button>
        </Link>
      </div>
    </Container>
  );
}
