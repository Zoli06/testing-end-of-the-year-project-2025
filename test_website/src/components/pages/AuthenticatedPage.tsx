import { useContext } from "react";
import { Header } from "../common/Header.tsx";
import { CartProvider } from "../../contexts/cart";
import { CategoriesProvider } from "../../contexts/categories";
import { ProductsProvider } from "../../contexts/products";
import { Notification } from "../common/Notification.tsx";
import {
  AlertContext,
  AlertDispatchContext,
} from "../../contexts/alert/contexts.ts";
import { Outlet } from "react-router";

export function AuthenticatedPage() {
  const alert = useContext(AlertContext);
  const alertDispatch = useContext(AlertDispatchContext);

  return (
    <CategoriesProvider>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <Outlet />
          {alert.open && (
            <Notification
              message={alert.message}
              severity={alert.severity}
              onClose={() => {
                alertDispatch({
                  message: "",
                  severity: "success",
                  open: false,
                });
              }}
            />
          )}
        </CartProvider>
      </ProductsProvider>
    </CategoriesProvider>
  );
}
