import React, { useState, useEffect } from "react";
import { FiPlus, FiCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slice/CartSlice"; 

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); 
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const itemInCart = cart.some(cartItem => cartItem.id === item.id);
    setIsAdded(itemInCart);
  }, [cart, item.id]); 

  const handleAdd = () => {
    if (isAdded) {
      dispatch(remove(item.id));
    } else {
      dispatch(add(item)); 
    }
    setIsAdded(!isAdded); 
  };

  return (
    <div className="p-5">
      <div className="relative">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-full object-cover rounded-xl"
        />
        <div
          onClick={handleAdd}
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md cursor-pointer hover:scale-110 transition"
        >
          {isAdded ? <FiCheck size={18} /> : <FiPlus size={18} />}
        </div>

        <div className="absolute bottom-2 left-2 bg-white/80 px-2 py-1 rounded-md text-sm font-medium">
          {item.category?.name || "Category"}
        </div>
      </div>
      <div className="flex justify-between pt-2 px-1">
        <p className="text-sm text-gray-700">{item.title}</p>
        <p className="font-bold text-black">
          {item.price}
          <span className="text-sm font-medium">$</span>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
