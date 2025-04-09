import { CartContext, CartDispatchContext } from "../context/cart/context.ts";
import { useContext, useEffect, useState } from "react";
import { useProducts } from "./useProducts.ts";

export function useCart() {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

  const { products } = useProducts();

  if (!cart || !dispatch) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.productId);
      if (product) {
        return acc + item.quantity * product.price;
      }
      return acc;
    }, 0);
    setTotalPrice(total);
  }, [cart, products]);

  const addToCart = (productId: number, quantity: number = 1) => {
    const existingItem = cart.find((item) => item.productId === productId);
    if (existingItem) {
      // If the item already exists, update its quantity
      dispatch({
        productId: productId,
        quantity: existingItem.quantity + quantity,
      });
    } else {
      // If the item doesn't exist, add it to the cart
      dispatch({ productId: productId, quantity: quantity });
    }
  };

  const updateCartItem = (productId: number, quantity: number) => {
    dispatch({ productId, quantity });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ productId, quantity: 0 });
  };

  return {
    cart,
    addToCart,
    updateCartItem,
    removeFromCart,
    totalPrice,
  };
}
