import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    return (
        <div className='product'>
            <img src={props.product.img} alt=""/>
            <div className='product-details'>
                <a href='#'>{props.product.name}</a>
                <p>by: {props.product.seller}</p>
                <div className="price-details">
                    <div className="price-section">
                        <h2>${props.product.price}</h2>
                        <p>only {props.product.stock} left in stock - order soon</p>
                    </div>
                    <div className="review-section">
                        <h4>Features</h4>
                    </div>
                </div>
                <a href="" className='btn'><FontAwesomeIcon icon={faCartShopping} /> add to cart</a>
                
            </div>
        </div>
    );
};

export default Product;