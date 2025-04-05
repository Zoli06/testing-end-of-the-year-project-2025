import { useContext } from "react";
import { ProductsContext } from "../context/products/context.ts";

export function useProducts() {
  const products = useContext(ProductsContext);

  if (!products) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  const getProductById = (id: number) => {
    return products.find((product) => product.id === id);
  };

  const getProductsByCategoryId = (categoryId: number) => {
    return products.filter((product) => product.categoryId === categoryId);
  };

  return {
    products,
    getProductById,
    getProductsByCategoryId,
  };
}
