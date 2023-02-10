import React, { createContext, useState } from 'react';


export const StateContext = createContext();

const Context = ({ children }) => {
    const [cart, setCart] = useState(null);
// click handler for geting added item to the cart 
    const handleAddToCart = (product) => {
        let newCart = [];
        const prevCart = JSON.parse(localStorage.getItem("cartItems"));
        if (prevCart) {
            newCart = [...prevCart, product];
        } else {
            newCart.push(product)
        };
        localStorage.setItem("cartItems", JSON.stringify(newCart));
        setCart(newCart);
    }


    const globalStatesAndFunc = { cart, handleAddToCart }

    return (
        <StateContext.Provider value={globalStatesAndFunc}>
            {children}
        </StateContext.Provider>
    );
};

export default Context;