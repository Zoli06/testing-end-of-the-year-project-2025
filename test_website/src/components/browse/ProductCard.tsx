import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../types";

export function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: () => void;
}) {
  return (
    <Card className="w-36 relative pb-8">
      <CardMedia image={product.image} className="h-48" />
      <CardContent>
        <Typography variant="body1">{product.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <Typography variant="body1">${product.price.toFixed(2)}</Typography>
      </CardContent>
      <CardActions className="absolute bottom-0 w-full">
        <Button onClick={onAddToCart}>Add to cart</Button>
      </CardActions>
    </Card>
  );
}
