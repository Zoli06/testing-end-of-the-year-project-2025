import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useContext } from "react";
import {
  CartContext,
  CartDispatchContext,
} from "../../contexts/cart/contexts.ts";
import { ProductsContext } from "../../contexts/products/contexts.ts";

export function CartEditor() {
  const cart = useContext(CartContext);
  const cartDispatch = useContext(CartDispatchContext);
  const products = useContext(ProductsContext);

  const totalPrice = cart.reduce((total, item) => {
    const product = products.find((product) => product.id === item.productId);
    if (product) {
      return total + product.price * item.quantity;
    }
    return total;
  }, 0);

  return (
    <Container>
      <Typography variant="h4" className="text-center mb-4">
        Shopping Cart
      </Typography>
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
            {cart.map((item, index) => {
              const product = products.find(
                (product) => product.id === item.productId,
              );

              if (!product) {
                return null;
              }

              return (
                <TableRow key={index}>
                  <TableCell>{product.title}</TableCell>
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

                        if (newQuantity > 0) {
                          // setQuantity(product.id, newQuantity);
                          cartDispatch({
                            productId: product.id,
                            quantity: newQuantity,
                          });
                        } else {
                          cartDispatch({
                            productId: product.id,
                            quantity: 1,
                          });
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        cartDispatch({
                          productId: product.id,
                          quantity: 0,
                        });
                      }}
                    >
                      <Close color="error" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" className="text-right mt-4">
        Total: ${totalPrice.toFixed(2)}
      </Typography>
    </Container>
  );
}
