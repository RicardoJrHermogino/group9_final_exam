  import React, { useState } from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  



  const TransactionReport = ({transactions }) => {

      const [sortOrder, setSortOrder] = useState('asc');
      const [selectedCategory, setSelectedCategory] = useState('');
    
      const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      };
    
      // Filter transactions based on the selected category
      const filteredTransactions = selectedCategory
        ? transactions.filter((transaction) => transaction.category === selectedCategory)
        : transactions;
    
      const sortedTransactions = [...filteredTransactions].sort((a, b) => {
        const order = sortOrder === 'asc' ? 1 : -1;
        return order * (a.quantity - b.quantity);
      });
    
      const totalTransactionPrice = transactions.reduce((total, transaction) => {
        return total + transaction.quantity * transaction.price;
      }, 0);
      
    return (
      <>

      <div className="container-fluid justify-content-center align-items-center mt-4" style={{ height: '100vh', width:'85vw', marginLeft:'5%'}}>
            <div className="row text-center">
                <div className="col">
                    <h2 style={{fontWeight:'bold'}}>Transaction Reports</h2>
                </div>
            </div>


        <div className="row border justify-content-end align-items-end mt-4">

                <div className="col-3 mb-3">
                    <button className="ms-5 py-1 d-flex justify-content-center align-items-center"
                     onClick={toggleSortOrder} 
                     style={{fontSize:'12px', borderRadius:'5px', border: 'solid black 1px', width:'90%', height:'30.5px', backgroundColor:'white'}}>
                      <div>Sort by Quantity: <b >{sortOrder === 'asc' ? 'Ascending' : 'Descending'}</b></div>
                    </button>

                </div>


                <div className="col-3 mb-3">
                      <div style={{width:'79%', fontSize:'12px'}}>
                          <label htmlFor="categoryFilter" className="form-label">
                            Filter by Category:
                          </label>
                          <select style={{fontSize:'12px', border:'solid black 1px'}}
                            id="categoryFilter"
                            className="form-select"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                          >
                        <option value="">All Categories</option>
                        {Array.from(new Set(transactions.map((transaction) => transaction.category))).map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                      </div>
                </div>


            </div>

          {filteredTransactions.length === 0 ? (
            <p>No transactions to report</p>
          ) : (

          <div className="row mt-5">
                    <div className="col-lg-10 col-md-8 col-sm-6 py-4 mx-auto " style={{backgroundColor:'#F2F2F2', borderRadius: '25px', width: '89%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'  }}>
                        <div className='table-responsive'>
                        <table className=' text-center' style={{width:'100%', fontSize:'90%'}}>
                              <thead className="thead-light">
                              <tr>
                                  <th>Name</th>
                                  <th>Category</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                  <th>Overall Price</th>
                              </tr>
                              </thead>
                              <tbody>
                                {sortedTransactions.map((transaction, index) => (
                                  <tr key={index}>
                                    <td>{transaction.name}</td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.quantity}</td>
                                    <td>₱{transaction.price}</td>
                                    <td>₱{transaction.quantity * transaction.price}</td>
                                  </tr>
                                ))}
                              </tbody>
                          </table>
                          <div className=" d-flex justify-content-center mt-4">
                              <p>Total Transaction Price: <span className='ms-3'>₱{totalTransactionPrice}</span></p>
                          </div>
                        </div>
                    </div>
            </div>
          
        )}    

      </div>
      </>
    );
  };

  export default TransactionReport;

    