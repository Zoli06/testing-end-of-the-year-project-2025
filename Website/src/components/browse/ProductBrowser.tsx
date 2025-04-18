import { ProductCard } from "./ProductCard.tsx";
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts.ts";
import { useCategories } from "../../hooks/useCategories.ts";
import { Form } from "react-bootstrap";

export function ProductBrowser() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | "all">(
    "all",
  );

  const { products } = useProducts();
  const { categories } = useCategories();

  return (
    <div className="position-relative">
      <h1 className="text-center">Browse Products</h1>
      <Form className="position-absolute top-0 pt-2">
        <Form.Select
          value={selectedCategoryId}
          onChange={(e) =>
            setSelectedCategoryId(
              e.target.value == "all" ? "all" : parseInt(e.target.value),
            )
          }
          className="category-select"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Select>
      </Form>
      <div className="row">
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
              category={
                categories.find(
                  (category) => category.id === product.categoryId,
                )!
              }
              className="col-12 col-md-4 col-lg-3"
            />
          ))}
      </div>
    </div>
  );
}
