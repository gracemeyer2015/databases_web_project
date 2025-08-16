// Citation for the following function: CreateReceiptForm
// Date: 8/13/25
// Adapted from canvas:
// Source URL: http://www.oregonstate.edu/mysource


import React, { useState } from 'react';

const CreateReceiptForm = ({ customers, backendURL, refreshReceipts }) => {
    const [formData, setFormData] = useState({
        create_receipt_dateTime: '',
        create_receipt_firstName: '',
        create_receipt_lastName: '',
        

        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    // Citation for the following function:
    // Date: 8/13/25
    // Adapted from copilot:
    // Source URL: https://copilot.microsoft.com/chats/5hDxFGTiVeAx3seyxVsE6
    // queried to find out how to autopopulate last name when first name is selected

    const handleFirstNameChange = (e) => {
        const firstName = e.target.value;
        const match = customers.find(c => c.firstName === firstName) || {};
        setFormData({
          create_receipt_firstName: firstName,
          create_receipt_lastName: match.lastName || ''
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch(backendURL + '/receipt/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Receipt created successfully.");
                refreshReceipts();
            } else {
                console.error("Error creating receipt.");
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    return (
        <>
        <h2>Create a Receipt</h2>

        <form className='cuForm' onSubmit={handleSubmit}>
            <label htmlFor="create_receipt_dateTime">Date & Time: </label>
            <input
                type="date"
                name="create_receipt_dateTime"
                id="create_receipt_dateTime"
                value={formData.create_receipt_dateTime}
                onChange={handleChange}
            />

            <label htmlFor="create_receipt_firstName">Customer First Name: </label>
            <select
                name="create_receipt_firstName"
                id="create_receipt_firstName"
                value={formData.create_receipt_firstName}
                onChange={handleFirstNameChange}
            >
             <option value="">Select a customer first name</option>
             {customers.map(c => (
                <option key = {c.firstName} value = {c.firstName}>
                    {c.firstName}
                </option>
             ))}
             
             </select>

             <label htmlFor='create_receipt_lastName'>Customer Last Name</label>
             <input
                id = " create_receipt_lastName"
                value = {formData.create_receipt_lastName}
                readOnly
             />
            <input type="submit" />
        </form>
        </>
    );
};

export default CreateReceiptForm;