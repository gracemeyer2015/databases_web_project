import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import EntityRow from '../components/EntityRow';
import { header } from 'express-validator';
import UpdateProductReceipts from './UpdateProductReceipts';
import CreateProductReceipt from './CreateProductReceipts';
import ResetButton from './ResetButton';

function ProductReceipts({backendURL}){
    const [productreceipts, setProductreceipts] = useState([])
    const [products, setProducts] = useState([])
    const [receipts, setReceipts] = useState([])

    const getData = async function(){
        try{
            const response = await fetch(backendURL + '/productreceipts')
            const {productreceipts, products, receipts} = await response.json()
            console.log(productreceipts)

            setProductreceipts(productreceipts)
            setProducts(products)
            setReceipts(receipts)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <div className="page-layout">
            <h1>Product Receipts</h1>
            <ResetButton backendURL={backendURL} refreshProductReceipts={getData}/>
            <table>
                <thead>
                    <tr>
                        {productreceipts.length > 0 && Object.keys(productreceipts[0]).map((key) => (
                            <th>{key}</th>
                        ))} 
                        
                    </tr>
                </thead>
                <tbody>
                    {productreceipts.map((productreceipt, index)=>(
                       <EntityRow 
                        key={index} 
                        rowObject = {productreceipt} 
                        backendURL = {backendURL} 
                        refreshProductReceipts = {getData}
                        showDelete={true}/>
                    ))}
                    

                </tbody>
            </table>
            <div className = "forms-wrapper">
                <UpdateProductReceipts 
                    productreceipts={productreceipts} 
                    backendURL={backendURL}
                    refreshProductreceipts={getData}
                />
                <CreateProductReceipt
                    receipts = {receipts}
                    products = {products}
                    productreceipts={productreceipts}
                    backendURL={backendURL}
                    refreshProductreceipts={getData}
                />

            </div>
            
        
        
        
        </div>
        
    )

}
export default ProductReceipts;