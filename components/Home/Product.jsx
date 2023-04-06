import React from "react";
import ProductCard from "./ProductCard";

const Product = ({ product }) => {
  return (
    <div className="grid grid-cols-3 mt-10 max-w-screen-lg mx-auto gap-y-8">
      {product?.map((p) => (
        <ProductCard key={p?.id} data={p} />
      ))}
    </div>
  );
};

export default Product;
