import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from '../Components/Sidebar';
// import Topbox from '../Components/Topbox';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBox, faBoxes, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';


const TransactionReport = ({ transactions }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    return order * (a.quantity - b.quantity);
  });

  const totalTransactionPrice = transactions.reduce((total, transaction) => {
    return total + transaction.quantity * transaction.price;
  }, 0);

  return (
    <div>
      <h2>Transaction Report</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.id}</td>
              <td>{transaction.name}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.quantity * transaction.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Total Transaction Price: {totalTransactionPrice}</p>
        <button onClick={toggleSortOrder}>
          Sort by Quantity {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
        </button>
      </div>
    </div>
  );
};

export default TransactionReport;

  