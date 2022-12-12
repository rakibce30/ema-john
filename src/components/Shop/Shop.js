import React, { useState } from 'react';
import data from '../../fakeData/products.json';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const datas = data.slice(0, 10);
    const [products, setProducts] = useState(datas);
    
    return (
        <div className='shop-wrap'>
            <div className='product-wrap'>
                {
                    products.map(pd => <Product product={pd}></Product>)
                }

            </div>
            <div className="cart-wrap">Cart</div> 
        </div>
    );
};

export default Shop;