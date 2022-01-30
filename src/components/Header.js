import React from 'react';

const Header = () => {
  return (
        <div className='mt-2 mx-5'>
            <ul className="nav justify-content-between">
                <li className="nav-item fs-2" style={{color:"#dc3545"}}>
                    <i className="fas fa-clinic-medical"></i>
                </li>
                <li className="nav-item mt-2">
                    <button type="button" className="btn btn-danger">Logout</button>
                </li>
             </ul>
        </div>
  );
};

export default Header;
