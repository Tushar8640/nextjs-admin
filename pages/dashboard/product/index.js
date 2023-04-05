import ProductTable from "@/components/Table/ProductTable";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const res = axios
      .get("https://dummyjson.com/products")
      .then((data) => setProducts(data?.data?.products));
  }, []);
  console.log(products);
  return (
    <div>
      <ProductTable data={products} />
    </div>
  );
};

export default Product;
