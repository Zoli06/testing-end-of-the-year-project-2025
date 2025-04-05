export type Product = {
  id: number;
  title: string;
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
  severity: "success" | "error";
  open: boolean;
};
