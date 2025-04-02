import { Product } from "../components/Product.tsx";
import { Container, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { Header } from "../components/Header.tsx";

const allProducts = [
  {
    category: "Electronics",
    products: [
      {
        id: 1,
        title: "Smartphone",
        description: "Latest model with advanced features.",
        price: 699.99,
        image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      },
      {
        id: 2,
        title: "Laptop",
        description: "High-performance laptop for work and play.",
        price: 1299.99,
        image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      },
      {
        id: 3,
        title: "Smartwatch",
        description: "Stylish smartwatch with health tracking.",
        price: 199.99,
        image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      },
    ],
  },
  {
    category: "Fashion",
    products: [
      {
        id: 4,
        title: "Sneakers",
        description: "Comfortable and trendy sneakers.",
        price: 89.99,
        image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      },
      {
        id: 5,
        title: "Jacket",
        description: "Stylish jacket for all seasons.",
        price: 149.99,
        image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      },
      {
        id: 6,
        title: "Watch",
        description: "Elegant watch for every occasion.",
        price: 299.99,
        image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      },
    ],
  },
  {
    category: "Home Appliances",
    products: [
      {
        id: 7,
        title: "Refrigerator",
        description: "Energy-efficient refrigerator with spacious interior.",
        price: 899.99,
        image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      },
      {
        id: 8,
        title: "Washing Machine",
        description: "High-capacity washing machine with smart features.",
        price: 699.99,
        image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      },
      {
        id: 9,
        title: "Microwave Oven",
        description: "Compact microwave oven for quick meals.",
        price: 199.99,
        image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      },
    ],
  },
];

export function Browse() {
  const [cartProducts, setCartProducts] = useState<number[]>([]);
  const [category, setCategory] = useState("all");

  return (
    <>
      <Header cartItemIds={cartProducts} />
      <Container className="relative">
        <Typography variant="h4" className="text-center">
          Browse Products
        </Typography>
        <div className="absolute top-0">
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="all">All Products</MenuItem>
            {allProducts.map((category) => (
              <MenuItem key={category.category} value={category.category}>
                {category.category}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="flex flex-wrap justify-start gap-4 mt-4">
          {allProducts
            .filter((p) => category === "all" || p.category === category)
            .flatMap((p) => p.products)
            .map((product) => (
              <Product
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                onAddToCart={() =>
                  setCartProducts([...cartProducts, product.id])
                }
              />
            ))}
        </div>
      </Container>
    </>
  );
}
