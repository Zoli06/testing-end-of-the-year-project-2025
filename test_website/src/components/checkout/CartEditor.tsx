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
import { useCart } from "../../hooks/useCart.ts";
import { useProducts } from "../../hooks/useProducts.ts";

export function CartEditor() {
  const {
    cart,
    updateCartItem,
    removeFromCart,
    totalPrice,
    totalPriceOfProduct,
  } = useCart();
  const { products } = useProducts();

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
              <TableCell>Total</TableCell>
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
                          updateCartItem(product.id, newQuantity);
                        } else {
                          updateCartItem(product.id, 1);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>
                    ${totalPriceOfProduct(product.id, product.price).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        removeFromCart(product.id);
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
