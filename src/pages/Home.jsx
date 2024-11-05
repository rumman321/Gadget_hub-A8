import React from 'react';
import BannerImg from '../components/BannerImg';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const categories=useLoaderData()
    
    return (
        <div className='w-11/12 mx-auto'>
            <BannerImg></BannerImg>
            
            <h2 className='text-center font-bold text-black text-4xl'>Explore Cutting-Edge Gadgets</h2>
            
            <div className='flex'>
                <div className='w-1/5 flex-grow flex flex-col-1'>
                <Categories categories={categories} ></Categories>
                </div>
                <div className='w-4/5'>
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;