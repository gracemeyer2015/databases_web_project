const UpdateProductReceipts = ({ productreceipts, backendURL, refreshProductreceipts }) => {

    return (
        <>
        <h2>Update a Product Receipt</h2>
        <form className='cuForm'>
            <label htmlFor="update_productreceipt_id">Product Receipt to Update: </label>
            <select
                name="update_productreceipt_id"
                id="update_productreceipt_id"
            >
                <option value="">Select a Product Receipt</option>
                {productreceipts.map((pr) => (
                    <option key={pr.productReceiptID} value={pr.productReceiptID}>
                        {pr.productReceiptID} - {pr.productName} ({pr.dateTime})
                    </option>
                ))}
            </select>


            <label htmlFor="update_productreceipt_quantity">Quantity: </label>
            <input
                type="number"
                name="update_productreceipt_quantity"
                id="update_productreceipt_quantity"
            />

            <input type="submit" />
        </form>
        </>
    );
};

export default UpdateProductReceipts;