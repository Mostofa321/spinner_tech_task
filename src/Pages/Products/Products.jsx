import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
// Loading products and setting them to state
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, []);

// Variables and states setup for pagination
    const totalProduct = products.length;
    const productPerPage = 6;
    const pages = Math.ceil(totalProduct / productPerPage);
    const [correntPage, setCorrentPage] = useState(0);
    const firstProduct = correntPage * productPerPage;
    const lastProduct = firstProduct + productPerPage;
    const correntProducts = products.slice(firstProduct, lastProduct);
    
    return (
        <div>
            {/* showing loaded products by api  */}
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 container justify-items-center mx-auto my-12'>
                {
                    correntProducts.map(product => <Product key={product.id} product={product}/>)
                }
            </div>

            {/* Pagination  */}
            <div className='mb-12 text-center'>
                {
                    (correntPage !== 0) && <button className='p-5' onClick={() => setCorrentPage(correntPage > 0 && correntPage - 1)}> Prv </button>
                }
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={correntPage === number ? 'selected p-5' : 'p-5'}
                        onClick={() => setCorrentPage(number)}
                    >
                        {number + 1}
                    </button>)
                }
                {
                    correntPage !== (pages - 1) && <button className='p-5' onClick={() => setCorrentPage(correntPage + 1)}> Next </button>
                }
            </div>
        </div>
    );
};

export default Products;