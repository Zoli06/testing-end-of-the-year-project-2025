import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export function Product({
  title,
  description,
  price,
  image,
  onAddToCart,
}: {
  title: string;
  description: string;
  price: number;
  image: string;
  onAddToCart?: () => void;
}) {
  return (
    <Card className="w-36 relative pb-8">
      <CardMedia image={image} className="h-48" />
      <CardContent>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Typography variant="body1">${price.toFixed(2)}</Typography>
      </CardContent>
      <CardActions className="absolute bottom-0 w-full">
        <Button onClick={onAddToCart}>Add to cart</Button>
      </CardActions>
    </Card>
  );
}
