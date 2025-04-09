import { Card, Button, Form } from "react-bootstrap";
import { Product } from "../../types";
import { useCart } from "../../hooks/useCart.ts";
import { useState } from "react";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const [quantity, setQuantity] = useState(0);
  const { updateCartItem } = useCart();

  return (
    <div className={`${className ?? ""} p-2`}>
      <Card className={`relative product-card p-0 h-100`}>
        <Card.Img
          src={product.image}
          className="product-card-image"
          variant="top"
        />
        <Card.Body className="position-relative">
          <Card.Title className="product-card-name">{product.name}</Card.Title>
          <Card.Text color="textSecondary" className="product-card-description">
            {product.description}
          </Card.Text>
          <Card.Text className="product-card-price position-absolute bottom-0">
            ${product.price.toFixed(2)}
          </Card.Text>
        </Card.Body>
        <Form
          className="d-flex flex-column"
          onSubmit={(e) => {
            e.preventDefault();
            updateCartItem(product.id, quantity);
          }}
        >
          <div className="p-2 pb-0">
            <Form.Control
              className="product-card-quantity"
              placeholder="Quantity"
              type="number"
              value={quantity || ""}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          <Button
            type="submit"
            className="product-card-add-to-cart m-2"
            variant="outline-primary"
          >
            Add to cart
          </Button>
        </Form>
      </Card>
    </div>
  );
}
