import { removeFromCart } from "@/redux/features/cart/cartSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const cart = () => {
  const router = useRouter()
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // dispatch action for remove product from cart 
  const handleRemoveCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800 mx-auto mt-12">
        <h2 className="text-xl font-semibold">
          Your cart have {cart?.length} Items
        </h2>
        <ul className="flex flex-col divide-y divide-gray-300">
          {cart.length !== 0 &&
            cart?.map((c,i) => (
              <li
                key={c?.id}
                className="flex flex-col py-6 sm:flex-row sm:justify-between"
              >
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                    alt="Polaroid camera"
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                          {c?.title}
                        </h3>
                        <p className="text-sm text-gray-600">{c?.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">{c?.price}</p>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
                      <button
                        onClick={() => handleRemoveCart(i)}
                        type="button"
                        className="flex items-center px-2 py-1 pl-0 space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                          <rect width="32" height="200" x="168" y="216"></rect>
                          <rect width="32" height="200" x="240" y="216"></rect>
                          <rect width="32" height="200" x="312" y="216"></rect>
                          <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>

        <div className=" space-x-4">
          <button
          onClick={()=>router.push("./home")}
            type="button"
            className="px-6 py-2 border rounded-md border-blue-600"
          >
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>
          {cart?.length > 0 && (
            <button
              type="button"
              className="px-6 py-2 border rounded-md bg-blue-600 text-gray-50 border-blue-600"
            >
              <span className="sr-only sm:not-sr-only">Continue to</span>
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default cart;
