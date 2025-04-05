import { Cart } from "../../types";
import { ReactNode, useReducer } from "react";
import { CartContext, CartDispatchContext } from "./context.ts";

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, [] as Cart);

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

function cartReducer(
  state: Cart,
  payload: { productId: number; quantity: number },
): Cart {
  if (payload.quantity <= 0) {
    return state.filter((item) => item.productId !== payload.productId);
  }
  const existingItem = state.find(
    (item) => item.productId === payload.productId,
  );
  if (existingItem) {
    return state.map((item) =>
      item.productId === payload.productId
        ? { ...item, quantity: payload.quantity }
        : item,
    );
  } else {
    return [
      ...state,
      { productId: payload.productId, quantity: payload.quantity },
    ];
  }
}
