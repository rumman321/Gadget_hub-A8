import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';

const Revieww = () => {
    const reviews=useLoaderData()
    return (
        <div className='w-10/12 mx-auto grid grid-cols-2 items-center gap-10 p-10'>
            {
                reviews.map((review)=><ReviewCard key={review.product_title} review={review}></ReviewCard>)
            }
        </div>
    );
};

export default Revieww;