import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";

type CartItem = {
  id: number;
  title: string;
  quantity: number;
  price: number;
};

export function CartTable({
  cartItems,
  setCartItems,
}: {
  cartItems: CartItem[];
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
}) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={item.quantity}
                  variant="standard"
                  slotProps={{
                    htmlInput: {
                      min: 1,
                    },
                  }}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value);
                    if (!isNaN(newQuantity) && newQuantity > 0) {
                      setCartItems(
                        cartItems.map((cartItem, i) =>
                          i === index
                            ? { ...cartItem, quantity: newQuantity }
                            : cartItem,
                        ),
                      );
                    }
                  }}
                />
              </TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setCartItems(cartItems.filter((_, i) => i !== index));
                  }}
                >
                  <Close color="error" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
