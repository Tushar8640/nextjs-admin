import Link from "next/link";
import React from "react";

const ProductTable = ({ data }) => {
    console.log(data);
    const { id, title, category, description, thumbnail,price } = data || {};
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Id</th>
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((d) => (
              
                  <tr key={d?.id} className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                    <td className="p-3">
                      <p>{d?.id}</p>
                    </td>
                    <td className="p-3">
                      <p>
                      <Link href={`/dashboard/product/${d?.id}`}>
                        {d?.title} 
                        </Link>
                      </p>
                    </td>
                    <td className="p-3">
                      <p>{d?.category}</p>
                    </td>
                    <td className="p-3">
                      <p>{d?.price}</p>
                    </td>
                  </tr>
            
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
