import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";

const App = () => {
  return (
    <div>
     <div className="sticky top-0 z-50 bg-white shadow">
      <Navbar/>
     </div>
     <div className="relative mx-auto flex w-11/12 max-w-6xl flex-col items-center justify-between ">
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/account" element={<Account/>}/>
          <Route path="/clothes" element={<Home/>} />
          <Route path="/electronics" element={<Home/>} />
          <Route path="/toys" element={<Home/>} />
          <Route path="/furnitures" element={<Home/>} />
       </Routes>
     </div>
    </div>
  );
};

export default App;
