import { createContext, Dispatch } from "react";
import { Cart } from "../../types";

export const CartContext = createContext<Cart | null>(null);
export const CartDispatchContext = createContext<Dispatch<{
  productId: number;
  quantity: number;
}> | null>(null);
