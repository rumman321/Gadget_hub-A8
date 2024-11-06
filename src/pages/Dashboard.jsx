import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { getAllFavorites } from "../utils";
import DashboardCard from "../components/DashboardCard";


const Dashboard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const favorites = getAllFavorites();
    setProducts(favorites);
  }, []);
  return (
    <div>
      <Header
        title={"Dashboard"}
        
      ></Header>
      <div className="flex items-center w-10/12 mx-auto justify-between  mb-10">
        <h2 className="text-black font-bold">Cart</h2>
        <div className="space-x-3">
            <button className="btn rounded-3xl " >Sort by price</button>
            <button className="btn rounded-3xl"> Purchase</button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 w-8/12 mx-auto">
        {products.map((product) => (
            <DashboardCard key={products.product_id} product={product}></DashboardCard>
          
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
