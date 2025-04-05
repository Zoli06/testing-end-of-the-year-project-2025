import { ProductsContext } from "./context.ts";
import { ReactNode } from "react";

const DummyProducts = [
  {
    id: 1,
    title: "Smartphone",
    description: "Latest model with advanced features.",
    price: 699.99,
    image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    categoryId: 1,
  },
  {
    id: 2,
    title: "Laptop",
    description: "High-performance laptop for work and play.",
    price: 1299.99,
    image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    categoryId: 1,
  },
  {
    id: 3,
    title: "Smartwatch",
    description: "Stylish smartwatch with health tracking.",
    price: 199.99,
    image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    categoryId: 1,
  },
  {
    id: 4,
    title: "Sneakers",
    description: "Comfortable and trendy sneakers.",
    price: 89.99,
    image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    categoryId: 2,
  },
  {
    id: 5,
    title: "Jacket",
    description: "Stylish jacket for all seasons.",
    price: 149.99,
    image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    categoryId: 2,
  },
  {
    id: 6,
    title: "Watch",
    description: "Elegant watch for every occasion.",
    price: 299.99,
    image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    categoryId: 2,
  },
  {
    id: 7,
    title: "Refrigerator",
    description: "Energy-efficient refrigerator with spacious interior.",
    price: 899.99,
    image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    categoryId: 3,
  },
  {
    id: 8,
    title: "Washing Machine",
    description: "High-capacity washing machine with smart features.",
    price: 699.99,
    image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    categoryId: 3,
  },
  {
    id: 9,
    title: "Microwave Oven",
    description: "Compact microwave oven for quick meals.",
    price: 199.99,
    image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    categoryId: 3,
  },
];

export function ProductsProvider({ children }: { children: ReactNode }) {
  return (
    <ProductsContext.Provider value={DummyProducts}>
      {children}
    </ProductsContext.Provider>
  );
}
