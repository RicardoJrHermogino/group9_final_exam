import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from '../Components/Sidebar';
// import Topbox from '../Components/Topbox';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBox, faBoxes, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';


const TransactionManagement = ({ products, updateStock, completeTransaction: completeTransactionProp }) => {
    const [transactions, setTransactions] = useState([]);
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');
  
   
    const addToTransaction = () => {
      const productToAdd = products.find((product) => product.id === productId);
      if (productToAdd && productToAdd.stock >= parseInt(quantity, 10) && parseInt(quantity, 10) > 0) {
        const updatedTransaction = [...transactions, { ...productToAdd, quantity: parseInt(quantity, 10) }];
        setTransactions(updatedTransaction);
  
        const updatedStock = productToAdd.stock - parseInt(quantity, 10);
        updateStock(productId, updatedStock);
  
        setProductId('');
        setQuantity('');
      } else {
        alert('Invalid product or insufficient stock!');
      }
    };
  
    const removeFromTransaction = (productId) => {
      const updatedTransaction = transactions.filter((item) => item.id !== productId);
      setTransactions(updatedTransaction);
  
      const productToAdd = products.find((product) => product.id === productId);
      const updatedStock = productToAdd ? productToAdd.stock + quantity : 0;
      updateStock(productId, updatedStock);
    };
  
    const handleCompleteTransaction = () => {
      completeTransactionProp(transactions);
      setTransactions([]);
    };
  
    return (
      <div>
        <h2>Transaction Management</h2>
        <div>
          <label htmlFor="productId">Product ID:</label>
          <input
            type="text"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Product ID"
          />
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
          />
          <button onClick={addToTransaction}>Add to Transaction</button>
        </div>
  
        <h3>Transaction Items</h3>
        <ul>
          {transactions.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => removeFromTransaction(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
  
        <button onClick={handleCompleteTransaction}>Complete Transaction</button>
      </div>
    );
  };
  
  export default TransactionManagement;
  