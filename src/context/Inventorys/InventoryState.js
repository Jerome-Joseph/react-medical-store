import React, { useState } from 'react';
import InventoryContext from "./inventoryContext"

const InventoryState = (props) => {
    const host = "http://localhost:5000";
    const inventoryInitial = [];

    const [inventorys, setInventorys] = useState(inventoryInitial);

    const getInventorys = async()=>{
        //API CALL
        const response = await fetch(`${host}/api/inventory/fetch_inventory`, {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmM2QwMGYzNzc1MDUwNTk1OGUxMDQwIn0sImlhdCI6MTY0MzM2ODQ2M30.zk73gnYrz_SUGPVHMXWzg5i1SXJcSZMYZ4wA-fJ8zr0"
            }, 
          });
        
         const json = await response.json()
         console.log(json)
         setInventorys(json)
    }

    const addInventory = async(medicine_name, manufacturer, price, stock, discount)=>{
        //API CALL
        const response = await fetch(`${host}/api/inventory/addinventory`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmM2QwMGYzNzc1MDUwNTk1OGUxMDQwIn0sImlhdCI6MTY0MzM2ODQ2M30.zk73gnYrz_SUGPVHMXWzg5i1SXJcSZMYZ4wA-fJ8zr0"
            },
            body: JSON.stringify({medicine_name, manufacturer, price, stock, discount}) 
          });
          const inventory = await response.json()
          setInventorys(inventorys.concat(inventory))
    }

    const deleteInventory = async(id)=>{
        //API CALL
        const response = await fetch(`${host}/api/inventory/deleteinventory/${id}`, {
           method: 'DELETE', 
           headers: {
             'Content-Type': 'application/json',
             'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmM2QwMGYzNzc1MDUwNTk1OGUxMDQwIn0sImlhdCI6MTY0MzM2ODQ2M30.zk73gnYrz_SUGPVHMXWzg5i1SXJcSZMYZ4wA-fJ8zr0"
           }
         });
         const json = await response.json();
         console.log(json)
   
       console.log("Deleting the note" + id)
       const newInventorys = inventorys.filter((inventory)=>{return inventory._id!==id})
       setInventorys(newInventorys)
   }

   const editInventory = async(id, medicine_name, manufacturer, price, stock, discount)=>{
    //API CALL
    const response = await fetch(`${host}/api/inventory/updateinventory/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmM2QwMGYzNzc1MDUwNTk1OGUxMDQwIn0sImlhdCI6MTY0MzM2ODQ2M30.zk73gnYrz_SUGPVHMXWzg5i1SXJcSZMYZ4wA-fJ8zr0"
        },
        body: JSON.stringify({medicine_name, manufacturer, price, stock, discount}) 
      });
      
      const json = await response.json;
      console.log(json)
     
      let newInventorys = JSON.parse(JSON.stringify(inventorys))
    //CLient side edit note code
    for (let index = 0; index < newInventorys.length; index++) {
        const element = newInventorys[index];
        if (element._id === id) {
            newInventorys[index].medicine_name = medicine_name;
            newInventorys[index].manufacturer = manufacturer;
            newInventorys[index].price = price;
            newInventorys[index].stock = stock;
            newInventorys[index].discount = discount;
            break;
        } 
    }
    setInventorys(newInventorys);
}

  return (
        <InventoryContext.Provider value={{inventorys, addInventory, deleteInventory, editInventory, getInventorys}}>
            {props.children}
        </InventoryContext.Provider>
  );
};

export default InventoryState;
