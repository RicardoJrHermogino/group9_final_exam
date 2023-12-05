  import React, { useState } from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Modal, Button } from 'react-bootstrap';




  const ProductManagement = ({ products, categories, addProduct, updateProduct, deleteProduct }) => {
    const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', category: '' });
    const [editingProduct, setEditingProduct] = useState(null);
    const [productID, setProductID] = useState(1);

    const handleAddProduct = () => {
      if (newProduct.name && newProduct.price !== '' && newProduct.stock !== '' && newProduct.category) {
        let string = 'PROD-GRP9-';
        let c = string + productID;

        const newProductWithId = { ...newProduct, id: c };
        addProduct(newProductWithId);

        // Increment product ID for the next product
        setProductID((prevProductID) => prevProductID + 1);
        setNewProduct({ name: '', price: '', stock: '', category: '' });
      }
    };
    
      const handleDeleteProduct = (productId) => {
        deleteProduct(productId);
      };
    
      const startEditing = (product) => {
        setEditingProduct({ ...product });
      };
    
      const handleUpdateProduct = () => {
        if (editingProduct && editingProduct.name && editingProduct.price !== '' && editingProduct.stock !== '' && editingProduct.category) {
          updateProduct({ ...editingProduct });
          setEditingProduct(null);
        }
      };
    
    return (
      <>

      <div className="Container-fluid justify-content-center align-items-center mt-4">
          <div className="row text-center">
              <div className="col">
                  <h2 style={{fontWeight:'bold'}}>Product Management</h2>
              </div>
          </div>
          
          <div className="row p-5 mt-4 mx-auto" style={{ backgroundColor:'#F2F2F2', borderRadius: '25px', width: '90%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
              
              <div className="col-lg-2 col-md-4 col-sm 10 ">
                  <span>Product ID</span>
                  <input
                    readOnly
                    type="text"
                    id="prodID"
                    className="form-control"
                    value={"PROD-GRP9-" + productID}
                    style={{ backgroundColor: '#F2F2F2', borderRadius: '15px', border: 'solid gray 0.5px' }}
                    required
                  />

              </div>

              <div className="col-lg-2 col-md-4 col-sm 10 ">
                  <span>Name</span>
                  <input type="text" id="editProductName" className="form-control"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  style={{backgroundColor:'#F2F2F2', borderRadius:'15px', border:'solid gray 0.5px'}} required/>
              </div> 

              <div className="col-lg-2 col-md-4 col-sm 10 ">
                  <span>Price</span>
                  <input type="number" id="productPrice" className="form-control" min={1}
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || '' })}
                  style={{backgroundColor:'#F2F2F2', borderRadius:'15px', border:'solid gray 0.5px'}}/>
              </div>

              <div className="col-lg-2 col-md-6 col-sm 10 ">
                  <span>Stocks</span>
                  <input type="number" id="productStock" className="form-control" min={1}
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: parseFloat(e.target.value) || '' })}
                  style={{backgroundColor:'#F2F2F2', borderRadius:'15px', border:'solid gray 0.5px'}}/>
              </div>  

              <div className="col-lg-2 col-md-6 col-sm 10 ">
                  <span>Category</span>
                  <select
                        className='px-4'
                        id="productCategory"
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                        style={{backgroundColor:'#F2F2F2', borderRadius:'15px', width:'100%', height:'38px', border:'solid gray 0.5px'}}
                        required
                  >
                          <option value="" disabled>Select a category</option>
                          {categories.map((category) => (
                              <option key={category} value={category}>{category}</option>
                          ))}
              </select>
              </div>


              <div className="col-lg-2 col-md-12 ">
                  <button className='btn btn-secondary' 
                  onClick={handleAddProduct} 
                  style={{ width:'100%', height:'35px', fontSize:'15px', border: 0, borderRadius:'18px', marginTop:'13%'}}>Add</button>
              </div>


              {editingProduct && (
                  <Modal show={true} onHide={() => setEditingProduct(null)}>
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <span>Product ID</span>
                  <input
                    readOnly
                    type="text"
                    id="prodID"
                    className="form-control"
                    value={"PROD-GRP9-" + productID}
                    style={{ backgroundColor: '#F2F2F2', borderRadius: '15px', border: 'solid gray 0.5px' }}
                    required
                  />
                      <label htmlFor="editProductName" className="form-label mt-2">
                        Product Name:
                      </label>
                      <input
                        type="text"
                        id="editProductName"
                        className="form-control"
                        value={editingProduct.name}
                        onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                        placeholder="Product Name"
                        required
                      />

                      <label htmlFor="editProductPrice" className="form-label mt-2">
                        Price:
                      </label>
                      <input
                        type="number"
                        id="editProductPrice"
                        className="form-control"
                        value={editingProduct.price}
                        onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) || '' })}
                        placeholder="Product Price"
                        required
                      />

                      <label htmlFor="editProductStock" className="form-label mt-2">
                        Stock:
                      </label>
                      <input
                        type="number"
                        id="editProductStock"
                        className="form-control"
                        value={editingProduct.stock}
                        onChange={(e) => setEditingProduct({ ...editingProduct, stock: parseFloat(e.target.value) || '' })}
                        placeholder="Product Stock"
                        required
                      />

                      <label htmlFor="editProductCategory" className="form-label mt-2">
                        Category:
                      </label>
                      <select
                        id="editProductCategory"
                        className="form-select"
                        value={editingProduct.category}
                        onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                        required
                      >
                        <option value="" disabled>Select a category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="success" onClick={handleUpdateProduct}>
                        Update Product
                      </Button>
                      <Button variant="secondary" onClick={() => setEditingProduct(null)}>
                        Cancel
                      </Button>
                    </Modal.Footer>
                  </Modal>
                )}
              </div>




          <div className="row mt-5">
                  <div className="col-lg-10 col-md-8 col-sm-6 py-4 mx-auto" style={{backgroundColor:'#F2F2F2', borderRadius: '25px', width: '89%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'  }}>
                      <table className=' text-center' style={{width:'100%', fontSize:'90%'}}>
                          <thead>
                          <tr>

                          <th>Product ID</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Stocks</th>
                          <th>Category</th>
                          <th>Actions</th>
                          </tr>
                          </thead>
                          <br/>
                          

                          <tbody>

                          {products.map((product) => (
                              <tr key={product.id}>
                                  <td>{product.id}</td>
                                  <td>{product.name}</td>
                                  <td>₱{product.price}</td>
                                  <td>{product.stock}</td>
                                  <td>{product.category}</td>
                                  <td> 
                                  <button onClick={() => startEditing(product)} className="btn btn-sm btn-secondary" style={{ borderRadius: '15px', width: '30%' }}>
                                    Edit
                                  </button>
                                  <button onClick={() => handleDeleteProduct(product.id)} className="btn btn-sm btn-secondary" style={{ borderRadius: '15px', width: '30%' }}>
                                    Delete
                                  </button>  
                                  </td>
                              </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
          </div>




      </div>
      </>

    );
  };

  export default ProductManagement;