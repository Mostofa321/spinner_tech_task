import React, { useContext } from 'react';
import { StateContext } from '../../Contexts/Context';



const Product = ({ product }) => {
    const { handleAddToCart } = useContext(StateContext);  // geting click handler function for 'Add To Card' button from context api

    const { images, title, description, rating, price, brand, stock } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-4 md:mb-0">
            <figure className="px-10 pt-10">
                <img src={images[0]} alt={title} className="rounded-xl h-60" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>Brand: {brand}</p>
                <p>Stock: {stock}</p>
                <p>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star-half-stroke text-yellow-500"></i>
                    <span> ({rating})</span>
                </p>
                <div className="card-actions">
                    <span className='text-2xl mr-auto'>${price}</span>
                    <button onClick={() => handleAddToCart(product)} className="btn btn-active btn-ghost">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default Product;