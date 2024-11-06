import React from 'react';

const ReviewCard = ({review}) => {
    const {product_title,product_image,customer_review,rating}=review
    console.log(review)
    return (
        <div>
            <div className=" space-y-2 transition hover:scale-105 shadow-xl rounded-xl overflow-hidden p-4">
      <figure className="w-full h-48 overflow-hidden p-0">
        <img className="p-0" src={product_image} alt={product_title} />

      </figure>
      <h3>Title :{product_title}</h3>
      <p>Review : ${customer_review}</p>
      <p>rating :{rating}</p>
    </div>
            
        </div>
    );
};

export default ReviewCard;