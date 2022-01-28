import React from 'react';

const AdminNav = () => {
  return (
    <div className="mt-5 ms-4">
            <div className="col mt-4">
                <a href='/inventory' type="button" className="btn btn-outline-danger fs-5">
                    <i className="fas fa-shopping-bag px-2 "></i>
                    Inventory
                </a>
            </div> 
            <div className="col mt-4">
                <a href='/executive' type="button" className="btn btn-outline-danger fs-5">
                    <i className="fas fa-users px-2 "></i>
                    Sales Executive
                </a>
            </div> 
            <div className="col mt-4">
                <a href='/create-order' type="button" className="btn btn-outline-danger fs-5">
                    <i className="fas fa-pencil-alt px-2 "></i>
                    Create Order
                </a>
            </div> 
            <div className="col mt-4">
                <a href='/orders' type="button" className="btn btn-outline-danger fs-5">
                    <i className="fas fa-shopping-cart px-2 "></i>
                    Inventory
                </a>
            </div> 
        </div>
  );
};

export default AdminNav;
