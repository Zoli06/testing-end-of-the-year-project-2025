import { Container, MenuItem, Select, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard.tsx";
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts.ts";
import { useCategories } from "../../hooks/useCategories.ts";

export function ProductBrowser() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | "all">(
    "all",
  );

  const { products } = useProducts();
  const { categories } = useCategories();

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
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Container>
  );
}
