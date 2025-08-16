const DeleteProductReceiptForm = ({rowObject, backendURL, refreshProductReceipts }) => {
    const productName = rowObject.productName
    const rowID = rowObject.productReceiptID

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            delete_receipt_id: rowID
        }
        try {
            console.log('Backend URL:', backendURL)

            const response = await fetch(backendURL + '/productreceipts/delete', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            }) 
            if(response.ok) {
                console.log("Product receipt deleted")
                refreshProductReceipts()
            }else{
                console.error("Error during deletion")
            }
        }catch(error){
            console.error('Error during form submission:', error)
        }
    }
    return(
        <td>
            <form onSubmit = {handleSubmit}>
                <button type = 'submit'>
                    Delete
                </button>
            </form>

        </td>
    )
}

export default DeleteProductReceiptForm
