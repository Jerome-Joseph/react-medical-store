import React from 'react';

const Inventory = () => {
  return (
      <div className="d-flex vh-100 justify-content-center mt-4 border border-2 rounded border-danger">
        <div>
        <h1 className='fw-normal mt-4'style={{color:"red"}}>Inventory</h1>
        </div>
        <div className='d-flex align-items-start'>
            <div className=''>
                <button type="button" className="btn btn-outline-danger">Danger</button>
            </div>
        </div>
      </div>
  );
};

export default Inventory;
