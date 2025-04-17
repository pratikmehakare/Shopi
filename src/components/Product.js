import React from "react";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";

const Product = ({ items }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id} 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05, type: "spring" }}
        >
          <ProductItem item={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default Product;
