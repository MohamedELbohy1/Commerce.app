import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCart';

const Gallery = ({ products }) => {
    return (
        <div className="gallery">
            <h1>Products</h1>
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <Link to={`/product/${product.id}`}><img src={product.image} alt={product.name}/></Link>
                    <h3>{product.name}</h3>
                    <p id='product-shortDescription'>{product.shortDescription}</p>
                    <p id='product-price'>${product.price}</p>
                    <Link to={`/product/${product.id}`}>Read More</Link>
                    <AddToCartButton product={product}/>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
