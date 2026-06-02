import { useState } from "react";
import "./App.css";
import ProductCard from "./components/product.card";
import SimpleButton from "./components/simple.button";

const productList = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 29.99,
    category: "Accessories",
    inStock: true,
    description:
      "A compact wireless mouse with silent clicks and long battery life.",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 89.99,
    category: "Hardware",
    inStock: true,
    description: "A durable keyboard with tactile switches and RGB lighting.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 34.5,
    category: "Accessories",
    inStock: false,
    description: "An adjustable aluminum stand for better posture and airflow.",
  },
  {
    id: 4,
    name: "USB-C Hub",
    price: 49.0,
    category: "Hardware",
    inStock: true,
    description: "A multiport hub with HDMI, USB-A, and SD card support.",
  },
  {
    id: 5,
    name: "Desk Lamp",
    price: 24.95,
    category: "Accessories",
    inStock: false,
    description: "A dimmable LED lamp with adjustable color temperature.",
  },
  {
    id: 6,
    name: "External SSD",
    price: 119.99,
    category: "Hardware",
    inStock: true,
    description:
      "A fast portable drive for backups, projects, and media files.",
  },
];
function App() {
  return (
    <>
      <ProductCard
        name={productList.name}
        price={productList.price}
        category={productList.category}
        description={productList.description}
        initialStock={productList.initialStock}
      />
    </>
  );
}

export default App;
