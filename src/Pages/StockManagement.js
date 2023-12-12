  import React, { useState } from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Modal, Button } from 'react-bootstrap';

  const StockManagement = ({ products, updateStock }) => {
    const [stockUpdates, setStockUpdates] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleUpdateStock = (productId, newStock) => {
      setStockUpdates((prevUpdates) => ({ ...prevUpdates, [productId]: newStock }));
    };

    const EditStock = (product) => {
      setSelectedProduct(product);
      setShowModal(true);
    };

    const handleModalClose = () => {
      setShowModal(false);
      setSelectedProduct(null);
    };

    const applyStockUpdates = () => {
      // Check if any stock input is blank or empty or less than 0
      for (const productId in stockUpdates) {
        const stockValue = stockUpdates[productId];
    
        if (
          stockValue === undefined ||
          stockValue === null ||
          isNaN(stockValue) ||
          stockValue < 0
        ) {
          // Show an alert if any input is not a valid non-negative number
          alert('Please enter a valid non-negative stock value.');
          return; // Stop further execution of the function
        }
      }
    
      // If all inputs are valid, proceed with applying the stock updates
      const updatedProducts = products.map((product) => ({
        ...product,
        stock: stockUpdates[product.id] !== undefined ? stockUpdates[product.id] : product.stock,
      }));
    
      // Update the stock and reset state
      updateStock(updatedProducts);
      setStockUpdates({});
      handleModalClose(); // Close the modal
    };

    const filteredProducts = selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;


      return (
        <>

        <div className="container-fluid justify-content-center align-items-center mt-4" style={{ height: '100vh', width:'85vw', marginLeft:'5%'}}>
            <div className="row  text-center">
                <div className="col">
                    <h2 style={{fontWeight:'bold'}}>Stocks Management</h2>
                </div>
            </div>

            <div className="row  justify-content-end align-items-end mt-2" style={{fontSize:'14px'}}>
            <div className="col-3  justify-content-end align-items-end mb-3">
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
        


            <div className="row mt-1">
                    <div className="col-lg-10 col-md-8 col-sm-6 py-4 mx-auto " style={{ borderRadius: '25px', width: '89%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'  }}>
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
                              <td style={{ fontWeight:'bolder'}}>{product.stock}</td>
                              <td>
                                <button onClick={() => EditStock(product)} className="btn btn-sm btn-secondary" style={{ borderRadius: '15px', width: '40%' }}>Edit</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                            
                          

                        </table>
                        </div>
                    </div>
            </div>

            <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Stock</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label htmlFor="newStock" className="form-label">
                New Stock:
              </label>
              <input
                type="number"
                id="newStock"
                className="form-control"
                value={stockUpdates[selectedProduct?.id] !== undefined ? stockUpdates[selectedProduct?.id] : ''}
                onChange={(e) => handleUpdateStock(selectedProduct?.id, e.target.value === '' ? '' : parseInt(e.target.value, 10))}
                placeholder='Enter new stock'
              />

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalClose}>
                Close
              </Button>
              <Button variant="primary" onClick={applyStockUpdates}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>




        </div>
        </>
      );
    };
      
      export default StockManagement;
      