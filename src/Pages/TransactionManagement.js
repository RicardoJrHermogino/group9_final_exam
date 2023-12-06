  import React, { useState } from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

  import { Modal, Button } from 'react-bootstrap';



  const TransactionManagement = ({ products, updateStock, completeTransaction: completeTransactionProp }) => {
    const [transactions, setTransactions] = useState([]);
    const [quantityInputs, setQuantityInputs] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showModal, setShowModal] = useState(false);

    const addToTransaction = (productId, quantity) => {
      const existingProduct = transactions.find((item) => item.id === productId);
    
      if (existingProduct) {
        const updatedTransaction = transactions.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + parseInt(quantity, 10) } : item
        );
    
        setTransactions(updatedTransaction);
    
        // Clear the quantity input for the added product
        setQuantityInputs((prevInputs) => ({ ...prevInputs, [productId]: '' }));
      } else {
        const productToAdd = products.find((product) => product.id === productId);
    
        if (productToAdd && productToAdd.stock >= parseInt(quantity, 10) && parseInt(quantity, 10) > 0) {
          const updatedTransaction = [...transactions, { ...productToAdd, quantity: parseInt(quantity, 10) }];
          setTransactions(updatedTransaction);
    
          // Clear the quantity input for the added product
          setQuantityInputs((prevInputs) => ({ ...prevInputs, [productId]: '' }));
          alert('Successfully added to cart')
        } else {
          alert('Invalid product or insufficient stock!');
        }
      }
    };
    

    const removeFromTransaction = (productId) => {
      const updatedTransaction = transactions.filter((item) => item.id !== productId);
      setTransactions(updatedTransaction);
    };

    const handleCompleteTransaction = () => {
      if (transactions.length === 0) {
        alert('There is no currently selected items. Add to proceed.');
        return;
      }

      const isStockAvailable = transactions.every((item) => {
        const productToAdd = products.find((product) => product.id === item.id);
        return productToAdd.stock - item.quantity >= 0;
      });

      if (!isStockAvailable) {
        alert('Insufficient stock for one or more items in the transaction!');
        return;
      }

      // Update the stock and create the new transaction array
      const updatedProducts = products.map((product) => {
        const transactionItem = transactions.find((item) => item.id === product.id);

        if (transactionItem) {
          return {
            ...product,
            stock: product.stock - transactionItem.quantity,
          };
        }

        return product;
      });

      updateStock(updatedProducts);

      completeTransactionProp(transactions);
      setTransactions([]);
    };

    const getCurrentStock = (productId) => {
      const selectedProduct = products.find((product) => product.id === productId);
      return selectedProduct ? selectedProduct.stock : 0;
    };

    const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory && product.stock > 0)
    : products.filter((product) => product.stock > 0);

    const toggleModal = () => {
      setShowModal(!showModal);
    };


    return (
      <>

      <div className="container-fluid justify-content-center align-items-center mt-4" style={{ height: '100vh', width:'85vw', marginLeft:'5%'}}>
          <div className="row text-center">
              <div className="col">
                  <h2 style={{fontWeight:'bold'}}>Transaction Management</h2>
              </div>
          </div>



          <div className="row  justify-content-end align-items-end mt-2" style={{fontSize:'14px'}}>
              
              <div className="col-1 justify-content-end align-items-end mb-3" onClick={toggleModal} style={{ cursor: 'pointer' }}>
                <div>
                  <FontAwesomeIcon className='ms-5' style={{ height: '25px' }} icon={faShoppingCart} />
                </div>
              </div>
              
              
              
              <div className="col-3 justify-content-end align-items-end mb-3">
                    <div style={{width:'79%'}}>
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
                            {Array.from(new Set(products.map((product) => product.category))).map((category) => (
                              <option key={category} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                    </div>
              </div>

            
        </div>
      


          <div className="row">
                  <div className="col-lg-10 col-md-8 col-sm-6 py-4 mx-auto " style={{backgroundColor:'#F2F2F2', borderRadius: '25px', width: '89%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'  }}>
                      <div className='table-responsive'>
                      <table className=' text-center' style={{width:'100%', fontSize:'90%'}}>

                      <thead>
                      <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Current Stock</th>
                        <th>Quantity</th>
                        <th>Add to Cart</th>
                      </tr>
                    </thead>
                    

                    <tbody>
                      
                        {filteredProducts.map((product) => (
                          <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>₱{product.price}</td>
                            <td>{getCurrentStock(product.id)}</td>
                            <td>
                            <input
                              type="number"
                              className="form-control"
                              value={quantityInputs[product.id] || ''}
                              onChange={(e) =>
                                setQuantityInputs((prevInputs) => ({ ...prevInputs, [product.id]: e.target.value }))
                              }
                              placeholder="Quantity"
                            />
                          </td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => addToTransaction(product.id, quantityInputs[product.id])}
                            >
                              Add to Cart
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                          
                        
                          
                      </table>
                      </div>
                  </div>

                  <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Cart Items</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {transactions.length === 0 ? (
                      <p>There is no currently selected items. Add to proceed.</p>
                    ) : (
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {transactions.map((item) => (
                            <tr key={item.id}>
                              <td>{item.name}</td>
                              <td>{item.quantity}</td>
                              <td>₱{item.quantity * item.price}</td>
                              <td>
                                <button className="btn btn-danger" onClick={() => removeFromTransaction(item.id)}>
                                  Remove
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                      
                    </Modal.Body>
                    <Modal.Footer>
                    {transactions.length > 0 && (
                        <button className="btn btn-success" onClick={handleCompleteTransaction}>
                          Place order
                        </button>
                      )}
                      <Button variant="secondary" onClick={toggleModal}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>

          </div>




      </div>
      </>
    );
  };
    
    export default TransactionManagement;
    