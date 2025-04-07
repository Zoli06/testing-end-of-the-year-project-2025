import { Card, Button } from "react-bootstrap";
import { Product } from "../../types";
import { useCart } from "../../hooks/useCart.ts";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { addToCart } = useCart();

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
        <Button
          onClick={() => addToCart(product.id)}
          className="product-card-add-to-cart m-2"
          variant="outline-primary"
        >
          Add to cart
        </Button>
      </Card>
    </div>
  );
}
