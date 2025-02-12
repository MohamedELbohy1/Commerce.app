import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BuyButton from './Buybutton';

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    console.log(product);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        quantity: 1
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the purchase request logic here (e.g., sending data to the backend)
        alert('Purchase request sent!');
    };

    return (
        <div className="product-details">
            <div className="product-details-upper">
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.fullDescription}</p>
            </div>

            <form className="register-form" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input
                        class="form-control"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                        class="form-control"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required />
                </div>
                <div class="mb-3">
                    <label class="form-label">Quantity:</label>
                    <input
                        class="form-control"
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        min="1"
                        required
                    />
                </div>
                <button type="submit" className="buy-btn btn btn-primary">Send Purchase Request</button>
                <BuyButton/>
            </form>

        </div >
    );
};

export default ProductDetails;
