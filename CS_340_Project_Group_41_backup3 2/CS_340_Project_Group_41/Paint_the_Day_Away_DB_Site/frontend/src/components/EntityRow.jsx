import DeleteProductReceiptForm from "../pages/DeleteProductReceiptForm"

function EntityRow({rowObject, backendURL, refreshProductReceipts, showDelete }){
    return (
        <tr>
            {Object.values(rowObject).map((value, index)=>
            (
                <td key = {index}>{value}</td>
                
            /* if showDelete is true then render Delete button */
            ))}{showDelete && (
                 <DeleteProductReceiptForm 
                    rowObject = {rowObject} 
                    backendURL={backendURL} 
                    refreshProductReceipts={refreshProductReceipts}/>
                )}
        </tr>
        
    )
}

export default EntityRow