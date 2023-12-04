  import React, { useState } from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  // import Sidebar from '../Components/Sidebar';
  // import Topbox from '../Components/Topbox';
  // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  // import {faBox, faBoxes, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';


  const StockManagement = ({ products, updateStock }) => {
    const [stockUpdates, setStockUpdates] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleUpdateStock = (productId, newStock) => {
      setStockUpdates((prevUpdates) => ({ ...prevUpdates, [productId]: newStock }));
    };

    const applyStockUpdates = () => {
      const updatedProducts = products.map((product) => ({
        ...product,
        stock: product.stock + (stockUpdates[product.id] || 0),
      }));

      updateStock(updatedProducts);
      setStockUpdates({});
    };

    const filteredProducts = selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;



    return (
      <>

      <div className="container-fluid justify-content-center align-items-center mt-4" style={{ height: '100vh', width:'85vw', marginLeft:'5%'}}>
          <div className="row text-center">
              <div className="col">
                  <h2 style={{fontWeight:'bold'}}>Stocks Management</h2>
              </div>
          </div>


          <div className="row border justify-content-end align-items-end mt-4">
              <div className="col-5 justify-content-end align-items-end mb-3">
              <label htmlFor="categoryFilter" className="form-label">
                Filter by Category:
              </label>
              <select
                id="categoryFilter"
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {Array.from(new Set(products.map((product) => product.category))).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
        </div>
      


          <div className="row mt-5">
                  <div className="col-lg-10 col-md-8 col-sm-6 py-4 mx-auto " style={{backgroundColor:'#F2F2F2', borderRadius: '25px', width: '89%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'  }}>
                      <div className='table-responsive'>
                      <table className=' text-center' style={{width:'100%', fontSize:'90%'}}>

                      <thead>
                        <tr>
                          <th>Product ID</th>
                          <th>Name</th>
                          <th>Current Stocks</th>
                          <th>Update</th>
                        </tr>
                      </thead>

                      <tbody>
                        {filteredProducts.map((product) => (
                          <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>
                              <input
                                type="number"
                                className="form-control"
                                value={stockUpdates[product.id] || ''}
                                onChange={(e) => handleUpdateStock(product.id, parseFloat(e.target.value))}
                                placeholder="Add Stock"
                              />
                              <button className="btn btn-sm btn-secondary" style={{ borderRadius: '15px', width: '30%' }}>Edit</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                          
                        
                          
                      </table>
                      </div>
                  </div>
          </div>




      </div>
      </>
    );
  };
    
    export default StockManagement;
    