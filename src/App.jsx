import { useState } from "react";
import "./App.css";
import ProductCard from "./components/product.card";
import SimpleButton from "./components/simple.button";

function App() {
  const product = {
    name: "Nike",
    price: 50,
    category: "Shoes",
    description: "These shoes are designed for athletes.",
    initialStock: 10,
  };
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
