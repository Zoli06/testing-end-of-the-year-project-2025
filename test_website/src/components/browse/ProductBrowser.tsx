import { Container, MenuItem, Select, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard.tsx";
import { useContext, useState } from "react";
import { CategoriesContext } from "../../context/categories/contexts.ts";
import {
  CartContext,
  CartDispatchContext,
} from "../../context/cart/contexts.ts";
import { ProductsContext } from "../../context/products/contexts.ts";

export function ProductBrowser() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | "all">(
    "all",
  );

  const cart = useContext(CartContext);
  const cartDispatch = useContext(CartDispatchContext);
  const products = useContext(ProductsContext);
  const categories = useContext(CategoriesContext);

  const handleAddToCart = (productId: number) => {
    const existingItem = cart.find((item) => item.productId === productId);
    if (existingItem) {
      cartDispatch({
        productId: productId,
        quantity: existingItem.quantity + 1,
      });
    } else {
      cartDispatch({ productId: productId, quantity: 1 });
    }
  };

  console.log("Cart", cart);

  return (
    <Container className="relative">
      <Typography variant="h4" className="text-center">
        Browse Products
      </Typography>
      <div className="absolute top-0">
        <Select
          value={selectedCategoryId}
          onChange={(e) => setSelectedCategoryId(e.target.value as number)}
        >
          <MenuItem value="all">All Products</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="flex flex-wrap justify-start gap-4 mt-4">
        {products
          .filter(
            (product) =>
              selectedCategoryId === "all" ||
              product.categoryId === selectedCategoryId,
          )
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
      </div>
    </Container>
  );
}
