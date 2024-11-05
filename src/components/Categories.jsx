import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    
      <div className="gap-10 flex  flex-grow ">
       <button className="">
       {categories.map((category) => (
          <NavLink
            to={`/category/${category.category}`}
            
            key={category.category}
            
            className={({ isActive }) => `mb-10 btn flex-col flex bg-blue-400 font-thin ${ isActive ? "tab-active text-2xl font-bold" : ""}`
            
            }
          >
            {category.category} 
          </NavLink>
        ))}
       </button>
      </div>
    
  );
};

export default Categories;
