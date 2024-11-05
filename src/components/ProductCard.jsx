import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';


const ProductCard = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('/products.json')
        .then(res =>res.json())
        .then(data=>setProducts(data))

    },[])
    
    

    return (
        <div className='grid grid-cols-3 gap-8'>
        {
            products.map((product)=>(
               <Link to='/category'>
                <Card key={products.product_id} product={product}></Card>
               </Link>
            ))
        }
        </div>
    );
};

export default ProductCard;