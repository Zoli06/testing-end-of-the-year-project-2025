import { BrowserRouter, Route, Routes } from "react-router";
import { WithHeaderLayout } from "./layouts/WithHeaderLayout.tsx";
import { ProductBrowser } from "./components/browse/ProductBrowser.tsx";
import { CartEditor } from "./components/checkout/CartEditor.tsx";
import { ContactForm } from "./components/contact/ContactForm.tsx";
import { LoginForm } from "./components/auth/LoginForm.tsx";
import { WithoutHeaderLayout } from "./layouts/WithoutHeaderLayout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutHeaderLayout />}>
          <Route path="" element={<LoginForm />} />
        </Route>

        <Route element={<WithHeaderLayout />}>
          <Route path="browse" element={<ProductBrowser />} />
          <Route path="cart" element={<CartEditor />} />
          <Route path="contact" element={<ContactForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
