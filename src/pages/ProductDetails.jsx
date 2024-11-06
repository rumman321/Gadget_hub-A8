import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { addFavorite, getAllFavorites } from "../utils";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [isFavorite,setIsFavorite]=useState(false)
  const [product, setProduct] = useState({});
  const {specification}=product
  const favorites=getAllFavorites()
  
  useEffect(() => {
    const singleData = data.find((product) => product.product_id == id);
     setProduct(singleData);
     
     const isTrue=favorites.find((p)=>p.product_id==id)
    console.log(isTrue)
    if(isTrue){
        setIsFavorite(true)
    }
     
   
  }, [data, id,favorites]);

  const handleFavorite=(product)=>{
    addFavorite(product)
  }

  return (
    <div className="rounded-xl border-8 p-6 border-white relative top-[-70px]  hero  w-6/12 mx-auto bg-base-200 min-h-[500px]">
      {/* this is details...{product.price} */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product.product_image}
            className="max-w-[300px] h-[300px] rounded-lg shadow-2xl"
          />
            <div className="pl-5">
            <h1 className="text-3xl font-bold">{product.product_title}</h1>
            <p className="text-2xl font-thin">Price : ${product.price}</p>
            <button className="btn rounded-full text-green-400 border-green-500">{product.availability? 'onStock':'stockOut'}</button>
            <p className="py-6">
              {product.description}
            </p>
            <p className="text-black font-bold">specification : </p>
            <ul>
                {
                    specification && specification.map((item,i)=>(
                        <li className="list-disc" key={i}>
                                {item}
                        </li>
                    ))
                }
            </ul>
            <p className="text-black font-bold">rating : {product.rating}</p>
            <div className="space-x-4">
            <button 
            disabled={isFavorite}
            onClick={()=>handleFavorite(product)} className="btn btn-primary ">Add to cart</button>
            <button className="btn rounded-full border-gray-950"><CiHeart size={15}/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
