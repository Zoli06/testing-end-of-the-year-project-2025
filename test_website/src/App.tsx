import { BrowserRouter, Route, Routes } from "react-router";
import { AuthenticatedPage } from "./components/pages/AuthenticatedPage.tsx";
import { ProductBrowser } from "./components/browse/ProductBrowser.tsx";
import { CartEditor } from "./components/checkout/CartEditor.tsx";
import { ContactForm } from "./components/contact/ContactForm.tsx";
import { LoginForm } from "./components/auth/LoginForm.tsx";
import { UnauthenticatedPage } from "./components/pages/UnauthenticatedPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UnauthenticatedPage />}>
          <Route path="" element={<LoginForm />} />
        </Route>

        <Route element={<AuthenticatedPage />}>
          <Route path="browse" element={<ProductBrowser />} />
          <Route path="cart" element={<CartEditor />} />
          <Route path="contact" element={<ContactForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
