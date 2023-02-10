import React, { useContext } from 'react';
import { StateContext } from '../../Contexts/Context';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const { cart } = useContext(StateContext);

    if (cartItems || cart) {
        return (
            <div className="overflow-x-auto w-full">
                <table className="table containar mx-auto">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Rating</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!--table rows --> */}
                        {
                            cart ?
                                cart.map((cartItem, index) => <CartItem key={index} cartItem={cartItem} />)
                                :
                                cartItems?.map((cartItem, index) => <CartItem key={index} cartItem={cartItem} />)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div>
            <h1 className='text-3xl text-center mt-12'>No Item Found</h1>
        </div>
    );
};

export default Cart;