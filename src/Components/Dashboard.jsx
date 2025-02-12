import React, { useState } from 'react';
import productsData from '../data/products';
import '../styles/Dashboard.css'; // Import the CSS file

const Dashboard = () => {
    const [products, setProducts] = useState(productsData);
    const [newProduct, setNewProduct] = useState({
        id: '',
        name: '',
        image: '',
        shortDescription: '',
        fullDescription: '',
        price: '',
        specs: {
            processor: '',
            ram: '',
            storage: '',
            display: ''
        }
    });
    const [isEditing, setIsEditing] = useState(false);
    const [currentProductId, setCurrentProductId] = useState(null); // Track which product is being edited

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        });
    };

    const handleSpecChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
            ...newProduct,
            specs: {
                ...newProduct.specs,
                [name]: value
            }
        });
    };

    const addProduct = () => {
        setProducts([...products, newProduct]);
        clearForm();
    };

    const clearForm = () => {
        setNewProduct({
            id: '',
            name: '',
            image: '',
            shortDescription: '',
            fullDescription: '',
            price: '',
            specs: {
                processor: '',
                ram: '',
                storage: '',
                display: ''
            }
        });
        setIsEditing(false);
        setCurrentProductId(null);
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const editProduct = (product) => {
        setIsEditing(true);
        setCurrentProductId(product.id);
        setNewProduct(product); // Pre-fill the form with the product details
    };

    const updateProduct = () => {
        setProducts(products.map(product => 
            product.id === currentProductId ? newProduct : product
        ));
        clearForm();
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard">
                <h1>Product Dashboard</h1>
                <h2>{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
                <form>
                    <input name="id" placeholder="ID" value={newProduct.id} onChange={handleChange} disabled={isEditing} />
                    <input name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} />
                    <input name="image" placeholder="Image URL" value={newProduct.image} onChange={handleChange} />
                    <input name="shortDescription" placeholder="Short Description" value={newProduct.shortDescription} onChange={handleChange} />
                    <textarea name="fullDescription" placeholder="Full Description" value={newProduct.fullDescription} onChange={handleChange} />
                    <input name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} />

                    <h3>Specifications</h3>
                    <input name="processor" placeholder="Processor" value={newProduct.specs.processor} onChange={handleSpecChange} />
                    <input name="ram" placeholder="RAM" value={newProduct.specs.ram} onChange={handleSpecChange} />
                    <input name="storage" placeholder="Storage" value={newProduct.specs.storage} onChange={handleSpecChange} />
                    <input name="display" placeholder="Display" value={newProduct.specs.display} onChange={handleSpecChange} />

                    {isEditing ? (
                        <button type="button" onClick={updateProduct}>Update Product</button>
                    ) : (
                        <button type="button" onClick={addProduct}>Add Product</button>
                    )}
                </form>

                <h2>Existing Products</h2>
                <div className="product-list">
                    {products.map(product => (
                        <div key={product.id} className="product-item">
                            <h3>{product.name}</h3>
                            <div className="actions">
                                <button className="update-btn" onClick={() => editProduct(product)}>Edit</button>
                                <button onClick={() => deleteProduct(product.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
