import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import EntityRow from '../components/EntityRow';
import { header } from 'express-validator';

function Orders({backendURL}){
    const [orders, setOrders] = useState([])

    const getData = async function(){
        try{
            const response = await fetch(backendURL + '/orders')
            const {orders} = await response.json()
            console.log(orders)

            setOrders(orders)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <div className="page-layout">
            <h1>Orders</h1>
            <table>
                <thead>
                    <tr>
                        {orders.length > 0 && Object.keys(orders[0]).map((key) => (
                            <th>{key}</th>
                        ))} 
                        
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index)=>(
                       <EntityRow 
                            key={index} 
                            rowObject = {order} 
                            backendURL = {backendURL} 
                            refreshOrder = {getData}
                            showDelete={false}/>
                    ))}

                </tbody>
            </table>
        
        
        
        </div>
        
    )

}
export default Orders