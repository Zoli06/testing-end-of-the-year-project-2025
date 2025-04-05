import { Category } from "../../types";
import { createContext } from "react";

export const CategoriesContext = createContext<Category[] | null>(null);
