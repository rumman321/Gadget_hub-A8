import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { product_image, price, product_title } = product;
  
  return (
   <div className="">
     <div className=" space-y-2 transition hover:scale-105 shadow-xl rounded-xl overflow-hidden p-4">
      <figure className="w-full h-48 overflow-hidden p-0">
        <img className="p-0" src={product_image} alt={product_title} />

      </figure>
      <h3>Title :{product_title}</h3>
      <p>Price : ${price}</p>
      <Link to={`/product/${product.product_id}`} className="btn rounded-3xl text-blue-800 border-blue-800">View Details</Link>
    </div>
   </div>
  );
};

export default Card;