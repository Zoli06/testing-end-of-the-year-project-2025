import { Header } from "../common/Header.tsx";
import { CartProvider } from "../../context/cart";
import { CategoriesProvider } from "../../context/categories";
import { ProductsProvider } from "../../context/products";
import { Outlet } from "react-router";
import { AlertProvider } from "../../context/alert";

export function AuthenticatedPage() {
  return (
    <CategoriesProvider>
      <ProductsProvider>
        <CartProvider>
          <AlertProvider>
            <Header />
            <Outlet />
          </AlertProvider>
        </CartProvider>
      </ProductsProvider>
    </CategoriesProvider>
  );
}
