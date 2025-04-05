import { CategoriesContext } from "./contexts.ts";
import { ReactNode } from "react";

const DummyCategories = [
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Fashion",
  },
  {
    id: 3,
    name: "Home Appliances",
  },
];

export function CategoriesProvider({ children }: { children: ReactNode }) {
  return (
    <CategoriesContext.Provider value={DummyCategories}>
      {children}
    </CategoriesContext.Provider>
  );
}
