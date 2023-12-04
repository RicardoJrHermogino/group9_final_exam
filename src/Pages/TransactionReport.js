import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from '../Components/Sidebar';
// import Topbox from '../Components/Topbox';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBox, faBoxes, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';


const TransactionReport = ({ }) => {

  return (
    <>

    <div className="container-fluid justify-content-center align-items-center mt-4">
        <div className="row text-center">
            <div className="col">
                <h2 style={{fontWeight:'bold'}}>Transaction Reports</h2>
            </div>
        </div>
        
        <div className="row p-5 mt-4 mx-auto" style={{ backgroundColor:'#F2F2F2', borderRadius: '25px', width: '90%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            
            <div className="col-lg-2 col-md-4 col-sm 10 ">
                <span>Product ID</span>
                <input readOnly type="text" value={'P-100'} id="editProductName" className="form-control" 
                style={{backgroundColor:'#F2F2F2', borderRadius:'15px', border:'solid gray 0.5px'}} required/>
            </div>
            <div className="col-lg-2 col-md-4 col-sm 10 ">
                <span>Name</span>
                <input type="text" id="editProductName" className="form-control"
                style={{backgroundColor:'#F2F2F2', borderRadius:'15px', border:'solid gray 0.5px'}} required/>
            </div>  
            <div className="col-lg-2 col-md-4 col-sm 10 ">
                <span>Price</span>
                <input type="number" id="productPrice" className="form-control" min={1}
                style={{backgroundColor:'#F2F2F2', borderRadius:'15px', border:'solid gray 0.5px'}}/>
            </div>
            <div className="col-lg-2 col-md-6 col-sm 10 ">
                <span>Stocks</span>
                <input type="number" id="productStock" className="form-control" min={1} 
                style={{backgroundColor:'#F2F2F2', borderRadius:'15px', border:'solid gray 0.5px'}}/>
            </div>  

            <div className="col-lg-2 col-md-6 col-sm 10 ">
                <span>Category</span>
                <select
                      className='px-4'
                      id="productCategory"
                      style={{backgroundColor:'#F2F2F2', borderRadius:'15px', width:'100%', height:'38px', border:'solid gray 0.5px'}}
                      required
                >
              <option value="" disabled>Select a category</option>
              <option value="" >Utensils</option>
              <option value="" >School Supplies</option>
              <option value="" >Food and Beverage/Tools in Kitchen</option>
            </select>
            
            
            </div>
            <div className="col-lg-2 col-md-12 ">
                <button className='btn btn-secondary' style={{ width:'100%', height:'35px', fontSize:'15px', border: 0, borderRadius:'18px', marginTop:'13%'}}>Add</button>
            </div>
        </div>








        <div className="row mt-5">
                <div className="col-lg-10 col-md-8 col-sm-6 py-4 mx-auto" style={{backgroundColor:'#F2F2F2', borderRadius: '25px', width: '89%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'  }}>
                    <table className=' text-center' style={{width:'100%', fontSize:'90%'}}>
                        <tr>

                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stocks</th>
                        <th>Category</th>
                        <th>Update</th>
                        </tr><br/>
                        
                        <tr>
                        <td>P-100</td>
                        <td>Ballpen</td>
                        <td>P7.00</td>
                        <td>78</td>
                        <td>School Supply</td>
                        <th>
                        <button className="btn btn-sm btn-secondary" style={{ borderRadius: '15px', width: '30%' }}>Edit</button>
                        <button className="btn btn-sm btn-secondary" style={{ borderRadius: '15px', width: '30%' }}>Delete</button>
                        </th>                        
                        
                        </tr>

                        <tr>
                        <td>P-100</td>
                        <td>Ballpen</td>
                        <td>P7.00</td>
                        <td>78</td>
                        <td>School Supply</td>
                        <th>
                        <button className="btn btn-sm btn-secondary" style={{ borderRadius: '15px', width: '30%' }}>Edit</button>
                        <button className="btn btn-sm btn-secondary" style={{ borderRadius: '15px', width: '30%' }}>Delete</button>
                        </th>                        
                        
                        </tr>
                        
                    </table>
                </div>
        </div>




    </div>
    </>
  );
};

export default TransactionReport;

  