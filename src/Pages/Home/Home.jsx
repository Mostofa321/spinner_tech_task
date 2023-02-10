import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/products"><h1 className='text-3xl text-center mt-12 underline text-indigo-600'>Please visit the Products page to shop!!</h1></Link>
        </div>
    );
};

export default Home;