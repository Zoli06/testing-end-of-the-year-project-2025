import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages/Login.tsx";
import { Browse } from "./pages/Browse.tsx";
import { Cart } from "./pages/Cart.tsx";
import { Contact } from "./pages/Contact.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" Component={Login} />
        <Route path="browse" Component={Browse} />
        <Route path="cart" Component={Cart} />
        <Route path="contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
