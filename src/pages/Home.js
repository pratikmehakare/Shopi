import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "../components/Product";
import SearchBox from "../components/SearchBox";
import { useSelector } from "react-redux";

const Home = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const categoryName = location.pathname.split("/")[1] || "all";
  const cart = useSelector((state)=>state.cart)

  const fetchItems = async () => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    console.log("cart",cart)
    fetchItems();
  }, [cart]);

  const currentPath = location.pathname.toLowerCase();
  let categoryFilter = null;
  if (currentPath === "/clothes") categoryFilter = "clothes";
  if (currentPath === "/electronics") categoryFilter = "electronics";
  if (currentPath === "/toys") categoryFilter = "toys";
  if (currentPath === "/furnitures") categoryFilter = "furniture";

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter
      ? item.category.name.toLowerCase() === categoryFilter
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative flex w-11/12 max-w-6xl flex-col mx-auto">
      <div className="flex flex-col mt-3 items-center">
        <p className="text-xl font-semibold">Home</p>
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div>
        {filteredItems.length > 0 ? (
          <Product key={categoryName} items={filteredItems} />

        ) : (
          <div className="flex flex-col items-center gap-2 mt-3">
            <span className="text-4xl">
            😕
            </span>
            <p className="text-md text-center">
              Nothing related :(
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
