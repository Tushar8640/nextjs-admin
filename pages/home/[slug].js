import axios from "axios";
import React from "react";
export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const { slug } = params;
  const res = await axios.get(`https://dummyjson.com/products/${slug}`);

  //Grab your page
  console.log(params);
  return {
    props: {
      data: res?.data || null,
    },
  };
}
const ProductDetails = ({ data }) => {
  console.log(data);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
