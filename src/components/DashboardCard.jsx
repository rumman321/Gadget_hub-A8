import React from "react";

const DashboardCard = ({product}) => {
    const { product_image, price, product_title,description } = product;
  return (
    <div className="">
      <div className=" space-y-2 transition hover:scale-105 shadow-xl rounded-xl overflow-hidden p-4">
        <div className="flex  justify-around mx-auto">
        <figure className="w-48 h-48 overflow-hidden p-0">
          <img className="p-0" src={product_image} alt={product_title} />
        </figure>
        <div className="space-y-2">
        <h3 className="text-black font-bold">{product_title}</h3>
        <p>{description}</p>
        <p>Price : ${price}</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default DashboardCard;
