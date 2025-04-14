import { useCart } from "../../hooks/useCart.ts";
import { useProducts } from "../../hooks/useProducts.ts";
import { Button, Form, Table } from "react-bootstrap";

export function CartEditor() {
  const { cart, updateCartItem, removeFromCart, totalPrice } = useCart();
  const { products } = useProducts();

  return (
    <div>
      <h1 className="text-center">Shopping Cart</h1>
      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            const product = products.find(
              (product) => product.id === item.productId,
            );

            if (!product) {
              return null;
            }

            return (
              <tr key={index} className="cart-editor-item">
                <td className="cart-editor-name">{product.name}</td>
                <td>
                  <Form.Control
                    className="cart-editor-quantity"
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value);

                      if (newQuantity > 0) {
                        updateCartItem(product.id, newQuantity);
                      } else {
                        updateCartItem(product.id, 1);
                      }
                    }}
                  />
                </td>
                <td className="cart-editor-price">
                  ${product.price.toFixed(2)}
                </td>
                <td className="cart-editor-total">
                  ${(product.price * item.quantity).toFixed(2)}
                </td>
                <td>
                  <Button
                    className="cart-editor-remove"
                    variant="outline-danger"
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <p>
        <b>Total: </b>
        <span className="cart-total-price">${totalPrice.toFixed(2)}</span>
      </p>
    </div>
  );
}
