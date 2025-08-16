import {Link} from 'react-router-dom'



function Navigation(){
    return (
        <nav>
            <a href="/">Home         </a>
            <a href="/customers">Customers          </a>
            <a href="/manufacturers">Manufacturers            </a>
            <a href="/orders">Orders               </a>
            <a href="/productreceipts">Product Receipts               </a>
            <a href="/products">Products            </a>
            <a href="/receipts">Receipts           </a>
            
        </nav>
    )

}

export default Navigation