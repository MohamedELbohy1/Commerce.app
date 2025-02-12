import React from 'react';
import { useState } from 'react';
import '../styles/Cart.css'; // Ensure the CSS file is linked properly
import { lastCartItems } from '../data/products';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Cart = () => {
    // Sample data for products
   
    const [cartItems, setCartItems] = useState(lastCartItems); // Currently an empty array

    const handleRemove = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        updateCartItems(updatedCartItems); // Update both state and localStorage
    };

    const updateCartItems = (updatedCartItems) => {
        setCartItems(updatedCartItems);
        lastCartItems.length = 0;
        lastCartItems.push(...updatedCartItems);
    };

    const handleQuantityChange = (id, delta) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) } : item
        );
        updateCartItems(updatedCartItems);
    }

    const handleApplyCoupon = () => {
        alert('Coupon code applied!');
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>

            <div className="cart-header">
                <div className="cart-header-item">Product</div>
                <div className="cart-header-item">Price</div>
                <div className="cart-header-item">Qty</div>
                <div className="cart-header-item">Total</div>
            </div>

            <div className="cart-items">
                {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <div className="cart-item-product">
                            <img src={item.image} alt={item.name} className="product-image" />
                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p>Variant: {item.variant}</p>
                            </div>
                        </div>
                        <div className="cart-item-price">{item.price}</div>
                        <div className="cart-item-qty">
                            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                        </div>
                        <div className="cart-item-total">{(item.price * item.quantity).toFixed(2)}</div>
                        <button className="remove-btn" onClick={() => handleRemove(item.id)}>✕</button>
                    </div>
                ))}
            </div>

            <div className="cart-footer">
                <div className="coupon-section">
                    <input type="text" placeholder="Enter coupon code (ex: FIRSTPAY)" />
                    <button className="apply-btn" onClick={handleApplyCoupon}>Apply Code</button>
                </div>

                <div className="subtotal-section">
                    <h3>SUB TOTAL</h3>
                    <h2>${calculateTotal().toFixed(2)}</h2>
                    <p>(excl. shipping fee)</p>
                </div>
            </div>

            <div className="cart-footer-buttons">
             <Link to="/Products"><button className="continue-shopping-btn">Continue Shopping</button></Link> 
            <button className="continue-shopping-btn" onClick={()=>{alert('Confirm Successfully')}}>Confirm Buying</button>

            </div>
        </div>
    );
};

export default Cart;