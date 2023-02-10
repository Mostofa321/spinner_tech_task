import React from 'react';

const CartItem = ({ cartItem }) => {
    const { images, title, brand, price, rating } = cartItem;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={images[0]} alt={title} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{brand}</div>
                    </div>
                </div>
            </td>
            <td className='text-center'>
                <p>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star-half-stroke text-yellow-500"></i>
                    <span> ({rating})</span>
                </p>
            </td>
            <td>
                ${price}
            </td>
        </tr>
    );
};

export default CartItem;