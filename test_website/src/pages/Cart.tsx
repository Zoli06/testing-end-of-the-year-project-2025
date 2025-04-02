import { Container, Typography } from "@mui/material";
import { useState } from "react";
import { Header } from "../components/Header.tsx";
import { CartTable } from "../components/CartTable.tsx";

export function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Product 1",
      quantity: 2,
      price: 10.0,
    },
    {
      id: 2,
      title: "Product 2",
      quantity: 1,
      price: 20.0,
    },
  ]);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <Header cartItemIds={cartItems.map((item) => item.id)} />
      <Container>
        <Typography variant="h4" className="text-center mb-4">
          Shopping Cart
        </Typography>
        <CartTable cartItems={cartItems} setCartItems={setCartItems} />
        <Typography variant="h6" className="text-right mt-4">
          Total: ${totalPrice.toFixed(2)}
        </Typography>
      </Container>
    </>
  );
}
