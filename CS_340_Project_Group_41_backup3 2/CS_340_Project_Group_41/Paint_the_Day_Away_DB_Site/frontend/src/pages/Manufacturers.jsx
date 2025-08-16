import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import EntityRow from '../components/EntityRow';
import { header } from 'express-validator';

function Manufacturers({backendURL}){
    const [manufacturers, setManufacturers] = useState([])

    const getData = async function(){
        try{
            const response = await fetch(backendURL + '/manufacturers')
            const {manufacturers} = await response.json()
            console.log(manufacturers)

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
            <h1>Manufacturers</h1>
            <table>
                <thead>
                    <tr>
                        {manufacturers.length > 0 && Object.keys(manufacturers[0]).map((key) => (
                            <th>{key}</th>
                        ))} 
                        
                    </tr>
                </thead>
                <tbody>
                    {manufacturers.map((manufacturer, index)=>(
                       <EntityRow 
                            key={index} 
                            rowObject = {manufacturer} 
                            backendURL = {backendURL} 
                            refreshCustomer = {getData}
                            showDelete={false}/>
                    ))}

                </tbody>
            </table>
        
        
        
        </div>
        
    )

}
export default Manufacturers