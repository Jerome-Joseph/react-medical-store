import React, { useContext, useState } from 'react';
import inventoryContext from "../context/Inventorys/inventoryContext"

const Inventory = () => {

  const context = useContext(inventoryContext);
  // const {addInventory} = context;


  return (
      <div className=" vh-100 vw-50 mt-4 border border-2 rounded border-light" style={{backgroundColor:"#fff8f8"}}>
        <div className='text-center'>
        <h1 className='fw-normal mt-4'style={{color:"#dc3545"}}>Inventory</h1>
        </div>
            <div className='mx-4'>
                <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <i className="fas fa-plus"></i> ADD NEW MEDICINE
                </button>
                <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Add Medicine Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Medicine Name</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Manufacturer</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Price</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Stock</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Discount</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                      </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger">Add to Inventory</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          <div className='mx-4 mt-5 p-2 text-center border border-2 rounded border-light' style={{backgroundColor:"white"}}>
          <table className="table" style={{color:"#dc3545"}}>
              <thead>
                <tr style={{color:"black"}}>
                  <th scope="col">Medicine Name</th>
                  <th scope="col">Manufacturer</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Discount(%)	</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{color:"black"}}>
                  <td>dolo</td>
                  <td>testing</td>
                  <td>100</td>
                  <td>10</td>
                  <td>15</td>
                  <td><i className="fas fa-edit"></i></td>
                  <td><i className="fas fa-trash"></i></td>
                </tr>
                <tr style={{color:"black"}}>
                  <td>dolo</td>
                  <td>testing</td>
                  <td>100</td>
                  <td>10</td>
                  <td>15</td>
                  <td><i className="fas fa-edit"></i></td>
                  <td><i className="fas fa-trash"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
  );
};

export default Inventory;
