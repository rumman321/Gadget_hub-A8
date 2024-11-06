import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link, useParams } from 'react-router-dom';



const ProductCard = () => {
    const {category}=useParams()
    
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('/products.json')
        .then(res =>res.json())
        .then(data=>{
            if(category){
                const filterCategory=data.filter(
                    product=>product.category==category
                )
                setProducts(filterCategory)
            }else{
                setProducts(data)
            }
        })

    },[category])
    
    // useEffect(()=>{
    //     const filterCategory=[...products].filter(
    //         product=>product.category==category
    //     )
    //     setProducts(filterCategory)
    // },[category,products])

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