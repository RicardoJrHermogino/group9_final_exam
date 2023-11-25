import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faBoxes, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
        <div className="container-fluid mt-5 ml-5 border sm-5" style={{ minHeight: '100vh', minWidth:'85vw', color: 'white', marginLeft:'20px'}}>
          <div className="row border">
            <div className="col-md-6 col-lg-3 mb-4 border">
              <div className="text-align-center p-3" style={{ backgroundColor: '#374149', borderRadius: '20px', minHeight: '130px' }}>
                <FontAwesomeIcon icon={faBox} className="mb-2" style={{ fontSize: '3rem' }} />
                <span className="d-block" style={{ fontSize: '1.5rem' }}>Products</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 border">
              <div className="p-3" style={{ backgroundColor: '#374149', borderRadius: '20px', minHeight: '130px' }}>
                <FontAwesomeIcon icon={faExchangeAlt} className="mb-2" style={{ fontSize: '3rem' }} />
                <span className="d-block" style={{ fontSize: '1.5rem' }}>Transactions</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 border">
              <div className="p-3" style={{ backgroundColor: '#374149', borderRadius: '20px', minHeight: '130px' }}>
                <FontAwesomeIcon icon={faBoxes} className="mb-2" style={{ fontSize: '3rem' }} />
                <span className="d-block" style={{ fontSize: '1.5rem' }}>Stocks</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 border">
              <div className="p-3" style={{ backgroundColor: '#374149', borderRadius: '20px', minHeight: '130px' }}>
                <FontAwesomeIcon icon={faBoxes} className="mb-2" style={{ fontSize: '3rem' }} />
                <span className="d-block" style={{ fontSize: '1.5rem' }}>Reports</span>
              </div>
            </div>
          </div>
        </div>
     
    
  );
};

export default Dashboard;
