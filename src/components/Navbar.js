import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import Cart from "./Cart"; 

const pages = [
  { name: "All", link: "/" },
  { name: "Clothes", link: "/clothes" },
  { name: "Electronics", link: "/electronics" },
  { name: "Furnitures", link: "/furnitures" },
  { name: "Toys", link: "/toys" },
];

const Navbar = () => {
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center px-6 py-5 shadow relative z-10 bg-white">
        {/* Left side */}
        <div className="flex gap-3 items-center">
          <Link to="/" className="font-bold text-lg">
            Shopi
          </Link>
          <ul className="flex gap-3">
            {pages.map((page, index) => (
              <li key={index}>
                <Link
                  to={page.link}
                  className={`relative pb-1 text-gray-600 hover:text-black ${
                    location.pathname === page.link
                      ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-gray-300"
                      : ""
                  }`}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="text-gray-400">username</span>
          <Link
            to="/order"
            className={`relative pb-1 text-gray-600 hover:text-black ${
              location.pathname === "/order"
                ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-gray-300 font-medium"
                : ""
            }`}
          >
            My Orders
          </Link>

          <Link
            to="/account"
            className={`relative pb-1 text-gray-600 hover:text-black ${
              location.pathname === "/account"
                ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-gray-300 font-medium"
                : ""
            }`}
          >
            My Account
          </Link>

          <button onClick={toggleCart} className="relative flex items-center gap-1">
            <HiMiniShoppingCart size={25} />
            <span>{cart.length}</span>
          </button>
        </div>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-[360px] h-full bg-white shadow-lg z-50 p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">My Order</h2>
            <button onClick={toggleCart} className="text-gray-500 hover:text-black text-xl">
              &times;
            </button>
          </div>
          <Cart />
        </div>
      )}
    </>
  );
};

export default Navbar;
