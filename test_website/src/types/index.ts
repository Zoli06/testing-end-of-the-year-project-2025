import { Variant } from "react-bootstrap/types";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: number;
};

export type Category = {
  id: number;
  name: string;
};

export type Cart = {
  productId: number;
  quantity: number;
}[];

export type Alert = {
  message: string;
  variant: Variant;
  open: boolean;
};
