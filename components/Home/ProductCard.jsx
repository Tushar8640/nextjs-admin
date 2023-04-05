import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data }) => {
  const { id, title, category, description, thumbnail } = data || {};
  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800 ">
      <div className="bg-white rounded-2xl ">
        <Image
          unoptimized
          width={300}
          height={500}
          src={thumbnail}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72   "
        />
      </div>
      <div className="flex flex-col justify-between p-6 space-y-2">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-wide">{title}</h2>
          <p className="text-gray-800 font-bold">{category}</p>
        </div>
        <p className="text-gray-800">{description.slice(0, 50)}...</p>
        <Link href={`/home/${id}`}>
        
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-600 text-gray-50"
        >
          Read more
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
