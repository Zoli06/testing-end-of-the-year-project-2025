import { createContext } from "react";
import { Product } from "../../types";

export const ProductsContext = createContext<Product[] | null>(null);
