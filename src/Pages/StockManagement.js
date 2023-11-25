import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from '../Components/Sidebar';
// import Topbox from '../Components/Topbox';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBox, faBoxes, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';


const StockManagement = ({ updateStock }) => {
  const [productId, setProductId] = useState('');
  const [newStock, setNewStock] = useState('');

  const handleUpdateStock = () => {
    if (productId && newStock) {
      updateStock(productId, newStock);
      setProductId('');
      setNewStock('');
    }
  };

  return (
    <div>
      <h2>Stock Management</h2>
      <div>
        <label htmlFor="productId">Product ID:</label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="Product ID"
        />
        <label htmlFor="newStock">New Stock:</label>
        <input
          type="number"
          id="newStock"
          value={newStock}
          onChange={(e) => setNewStock(e.target.value)}
          placeholder="New Stock"
        />
        <button onClick={handleUpdateStock}>Update Stock</button>
      </div>
    </div>
  );
};
  
  export default StockManagement;
  