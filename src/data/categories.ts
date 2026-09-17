import type { Category } from "../types";
import { img } from "../utils/image";

export const categories: Category[] = [
  { id: "burgers", name: "Burgers", image: img("photo-1568901346375-23c9450c58cd") },
  { id: "pizza", name: "Pizza", image: img("photo-1513104890138-7c749659a591") },
  { id: "biryani", name: "Biryani", image: img("photo-1589302168068-964664d93dc0") },
  { id: "chicken", name: "Chicken", image: img("photo-1598103442097-8b74394b95c6") },
  { id: "shawarma", name: "Shawarma", image: img("photo-1633945274309-2c6c7f0e1f9e") },
  { id: "south-indian", name: "South Indian", image: img("photo-1630383249896-424e482df921") },
  { id: "north-indian", name: "North Indian", image: img("photo-1585937421612-70a008356fbe") },
  { id: "chinese", name: "Chinese", image: img("photo-1585032226651-759b368d7246") },
  { id: "desserts", name: "Desserts", image: img("photo-1551024506-0bccd828d307") },
  { id: "beverages", name: "Beverages", image: img("photo-1544145945-f90425340c7e") },
];
