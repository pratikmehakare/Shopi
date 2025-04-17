import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa'; 
import { remove } from '../redux/Slice/CartSlice';

const Order = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 bg-white text-center px-4">
      {cart.length > 0 ? (
        <>
          <h1 className="text-lg font-medium mb-4">My Orders</h1>
          <div className="w-full max-w-md space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-3">
                  <img src={item.images} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <div className="text-left">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">${item.price}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-lg font-medium mb-4">My Orders</h1>
          <span className="text-5xl mb-4">📦</span>
          <p className="text-md font-semibold">
            Nothing yet, add some products and check them out :)
          </p>
        </>
      )}
    </div>
  );
};

export default Order;
