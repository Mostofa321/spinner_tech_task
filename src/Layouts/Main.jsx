import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div className='bg-[#F2F2F2]'>
            <Navbar/>
            <Outlet/>
        </div>
        
    );
};

export default Main;