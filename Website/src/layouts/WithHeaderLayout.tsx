import { Header } from "../components/common/Header.tsx";
import { CartProvider } from "../context/cart";
import { CategoriesProvider } from "../context/categories";
import { ProductsProvider } from "../context/products";
import { Outlet } from "react-router";
import { AlertProvider } from "../context/alert";
import { Container } from "react-bootstrap";

export function WithHeaderLayout() {
  return (
    <CategoriesProvider>
      <ProductsProvider>
        <CartProvider>
          <AlertProvider>
            <Container>
              <Header />
            </Container>
            <Container>
              <Outlet />
            </Container>
          </AlertProvider>
        </CartProvider>
      </ProductsProvider>
    </CategoriesProvider>
  );
}
