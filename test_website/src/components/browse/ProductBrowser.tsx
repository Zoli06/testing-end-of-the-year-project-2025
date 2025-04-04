import { Container, MenuItem, Select, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard.tsx";
import { useState } from "react";
import { Category, Product } from "../../types";

export function ProductBrowser({
  categories,
  products,
  addToCart,
}: {
  categories: Category[];
  products: Product[];
  addToCart: (product: number) => void;
}) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | "all">(
    "all",
  );

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
              onAddToCart={() => addToCart(product.id)}
            />
          ))}
      </div>
    </Container>
  );
}
