// Citation for the following function: CreateProductForm
// Date: 8/13/25
// Adapted from canvas:
// Source URL: http://www.oregonstate.edu/mysource


import React, { useState } from 'react';

const CreateProductForm = ({ manufacturers, backendURL, refreshProducts }) => {
    const [formData, setFormData] = useState({
        create_product_productName: '',
        create_product_price: '',
        create_product_sellPrice: '',
        create_product_newProduct: '',
        create_product_firstDateOrdered: '',
        create_product_manufacturerName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch(backendURL + '/product/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Product created successfully.");
                refreshProducts();
            } else {
                console.error("Error creating product.");
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    return (
        <>
        <h2>Create a Product</h2>

        <form className='cuForm' onSubmit={handleSubmit}>
            <label htmlFor="create_product_productName">Product Name: </label>
            <input
                type="text"
                name="create_product_productName"
                id="create_product_productName"
                value={formData.create_product_productName}
                onChange={handleChange}
            />

            <label htmlFor="create_product_price">Product Price: </label>
            <input
                type="text"
                name="create_product_price"
                id="create_product_price"
                value={formData.create_product_price}
                onChange={handleChange}
            />

            

            <label htmlFor="create_product_sellPrice">Sell Price: </label>
            <input
                type="number"
                name="create_product_sellPrice"
                id="create_product_sellPrice"
                value={formData.create_product_sellPrice}
                onChange={handleChange}
            />

            <label htmlFor="create_product_newProduct">Age: </label>
            <input
                type="number"
                name="create_product_newProduct"
                id="create_product_newProduct"
                value={formData.create_product_newProduct}
                onChange={handleChange}
            />

            <label htmlFor="create_product_firstDateOrdered">First Date Ordered: </label>
            <input
                type="date"
                name="create_product_firstDateOrdered"
                id="create_product_firstDateOrdered"
                value={formData.create_product_firstDateOrdered}
                onChange={handleChange}
            />

            <label htmlFor="create_product_manufacturerName">Manufacturer: </label>
            <select
                name="create_product_manufacturerName"
                id="create_product_manufacturerName"
                value={formData.create_product_manufacturerName}
                onChange={handleChange}
            >
                <option value="">Select a Manufacturer</option>
                <option value="NULL">&lt; None &gt;</option>
                {manufacturers.map((manufacturer, index) => (
                    <option value={manufacturer.id} key={index}>{manufacturer.name}</option>
                ))}
            </select>
            <input type="submit" />
        </form>
        </>
    );
};

export default CreateProductForm;