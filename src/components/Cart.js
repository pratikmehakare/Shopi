import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, remove } from "../redux/Slice/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="flex-1 overflow-y-auto mb-4 px-4">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b py-4"
            >
              <img
                src={item.images}
                alt="img"
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-800">
                    {item.title}
                  </span>
                  <button
                    onClick={() => dispatch(remove(item.id))}
                    className="text-red-500 hover:text-red-700 text-lg"
                  >
                    ❌
                  </button>
                </div>
                <span className="text-sm text-gray-500">${item.price}</span>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => dispatch(remove(item.id))}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(add(item))}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="px-4 pb-4">
          <div className="flex justify-between font-medium mb-2">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
