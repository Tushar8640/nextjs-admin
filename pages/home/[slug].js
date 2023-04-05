import axios from "axios";
import Image from "next/image";
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
  const { id, title, description, price, thumbnail, rating } = data || {};
  console.log(data);
  return (
    <div className="flex h-full flex-row justify-evenly mt-20 p-10">
      <div className="w-1/2">
        <Image
          unoptimized
          width={300}
          height={500}
          className=" w-9/12 h-56"
          src={thumbnail}
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg mt-3">{description}</p>
        <p className="text-3xl mt-5">{price}</p>
        <div className="flex mt-5 w-5/12 justify-between">
          <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded ">
            <a href="#">Buy Now</a>
          </button>
          <button className="self-end bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded">
            <a href="#">Add to Cart</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;