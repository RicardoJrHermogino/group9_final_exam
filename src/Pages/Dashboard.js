import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCubes,faChartBar, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
        <div className="Container-fluid mt-5 " style={{ height: '100vh', width:'85vw', marginLeft:'5%'}}>
          <div className="row ">
            <div className="col-md-6 col-lg-3 col-sm-10 mb-4 ">
              <div className="p-3" style={{ borderRadius: '20px', minHeight: '130px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.05)' }}>
                <FontAwesomeIcon icon={faBoxOpen} className="mb-2" style={{ fontSize: '23px' }} />
                <span className="d-block mb-" style={{ fontSize: '10px' }}>Add, Update, and Delete products</span>
                <b className="d-block" style={{ fontSize: '19px' }}>Product Management</b>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-10 mb-4 ">
              <div className="p-3" style={{  borderRadius: '20px', minHeight: '130px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.05)' }}>
                <FontAwesomeIcon icon={faChartBar} className="mb-2" style={{ fontSize: '23px' }} />
                <span className="d-block mb-" style={{ fontSize: '10px' }}>Add, Update, and Delete Categories.</span>
                <b className="d-block" style={{ fontSize: '19px' }}>Category Management</b>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-10 mb-4 ">
              <div className="p-3" style={{  borderRadius: '20px', minHeight: '130px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.05)' }}>
                <FontAwesomeIcon icon={faCubes} className="mb-2" style={{ fontSize: '23px' }} />
                <span className="d-block" style={{ fontSize: '10px' }}>Edit product stocks</span>
                <b className="d-block" style={{ fontSize: '19px' }}>Stocks Management</b>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-10 mb-4 ">
              <div className="p-3" style={{  borderRadius: '20px', minHeight: '130px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.05)' }}>
                <FontAwesomeIcon icon={faExchangeAlt} className="mb-2" style={{ fontSize: '23px' }} />
                <span className="d-block" style={{ fontSize: '10px' }}>Add, update, and delete products</span>
                <b className="d-block" style={{ fontSize: '19px' }}>Transactions Management</b>
              </div>
            </div>
            
          </div>


          <div className="row" style={{ height: '395px' }}>
            
          <div className="col-md-6 col-lg-6 col-sm-10 mb-4" style={{ height: '100%' }}>
              <div
                className="p-3 "
                style={{
                  height: '100%',
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}
              >
                Bar Graph
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-10 mb-4" style={{ height: '100%' }}>
              <div
                className="p-3 "
                style={{
                  height: '100%',
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}
              >
                Line Graph
              </div>
          </div>

            
          </div>








        </div>

     
    
  );
};

export default Dashboard;





 