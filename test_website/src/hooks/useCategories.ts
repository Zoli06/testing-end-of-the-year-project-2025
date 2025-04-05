import { useContext } from "react";
import { CategoriesContext } from "../context/categories/context.ts";

export function useCategories() {
  const categories = useContext(CategoriesContext);

  if (!categories) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }

  const getCategoryById = (id: number) => {
    return categories.find((category) => category.id === id);
  };

  return {
    categories,
    getCategoryById,
  };
}
