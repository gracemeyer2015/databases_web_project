import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import EntityRow from '../components/EntityRow';
import { header } from 'express-validator';
import CreateProductForm from '../components/CreateProduct';

function Products({backendURL}){
    const [products, setProducts] = useState([])
    const [manufacturers, setManufacturers] = useState([])

    const getData = async function(){
        try{
            const response = await fetch(backendURL + '/products')
            const {products, manufacturers} = await response.json()
            console.log(products)

            setProducts(products)
            setManufacturers(manufacturers)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <div className="page-layout">
            <h1>Products</h1>
            <table>
                <thead>
                    <tr>
                        {products.length > 0 && Object.keys(products[0]).map((key) => (
                            <th>{key}</th>
                        ))} 
                        
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index)=>(
                       <EntityRow 
                            key={index} 
                            rowObject = {product} 
                            backendURL = {backendURL} 
                            refreshProducts = {getData}
                            showDelete={false}/>
                    ))}

                </tbody>
            </table>
            <CreateProductForm 
                    manufacturers={manufacturers}
                    products ={products}
                    backendURL={backendURL}
                    refreshProducts={getData}/>
        
        
        
        </div>
        
    )

}
export default Products