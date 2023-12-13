  import React, { useState } from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Modal, Button } from 'react-bootstrap';
  import toast from 'react-hot-toast';



  const ProductManagement = ({ products, categories, addProduct, updateProduct, deleteProduct }) => {

// ----------------------------------------------------------------------------------------------------------------------------
    const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', category: '' });
    const [editingProduct, setEditingProduct] = useState(null);
    const [productID, setProductID] = useState(4);
// ----------------------------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------------------------
// Dini na part ang pag add san product

    const handleAddProduct = () => {
      if (newProduct.name && newProduct.price !== '' && newProduct.stock !== '' && newProduct.category) {
        // Check for duplicate products
        const checkDupsProds = products.some(
          (product) =>
            product.name === newProduct.name 
        );
    
        if (!checkDupsProds) {
                    // ing aasign ang unique ID sa kada panibago na product
          let string = 'PROD-GRP9-';
          let c = string + productID;
          const newProductWithId = { ...newProduct, id: c };
          addProduct(newProductWithId);
          
          // Ing iincrement ang ID para sa mahunod na product na maa-add
          setProductID((prevProductID) => prevProductID + 1);
    
          setNewProduct({ name: '', price: '', stock: '', category: '' });

        } else {
          setNewProduct({ name: '', price: '', stock: '', category: '' });
          toast.error("A product you're trying to add already exists.");
        }
      }
    };


// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------
    // Ing dedelete ang specific na product base sa kaniya ID

      const handleDeleteProduct = (productId) => {
        deleteProduct(productId);
      };
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------
      // Ing ing-eedt ang specific na product
      const startEditing = (product) => {
        setEditingProduct({ ...product });
      };


      const handleUpdateProduct = () => {
        if (editingProduct && editingProduct.name && editingProduct.price !== '' && editingProduct.stock !== '' && editingProduct.category) {
          if (editingProduct.price >= 0 && editingProduct.stock >= 0){

          updateProduct({ ...editingProduct });
          setEditingProduct(null);
          toast.success("Product successfully updated.")
          }
          else{
            toast.error("Encountered negative inputs")
          }
        }
        else{
          toast.error("Please fill out the inputs.")
        }
      };
// ----------------------------------------------------------------------------------------------------------------------------    
    return (
      <>

      <div className="Container-fluid justify-content-center align-items-center mt-4">
          <div className="row text-center">
              <div className="col">
                  <h2 style={{fontWeight:'bold'}}>Product Management</h2>
              </div>
          </div>
          
          <div className="row p-5 mt-4 mx-auto" style={{ borderRadius: '25px', width: '90%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
              
              <div className="col-lg-2 col-md-4 col-sm 10 ">
                  <span className='ms-2'>Product ID</span>
                  <input
                    readOnly
                    type="text"
                    id="prodID"
                    className="form-control"
                    value={"PROD-GRP9-" + productID}
                    style={{  borderRadius: '15px', border: 'solid gray 0.5px' }}
                    required
                  />

              </div>

              <div className="col-lg-2 col-md-4 col-sm 10 ">
                  <span className='ms-2'>Name</span>
                  <input type="text" id="editProductName" className="form-control px-3"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder='Product name'
                  style={{ borderRadius:'15px', border:'solid gray 0.5px'}} required/>
              </div> 

              <div className="col-lg-2 col-md-4 col-sm 10 ">
                  <span className='ms-2'>Price</span>
                  <input type="number" id="productPrice" className="form-control px-3" min={1}
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || '' })}
                  placeholder='Product price'
                  style={{ borderRadius:'15px', border:'solid gray 0.5px'}}/>
              </div>

              <div className="col-lg-2 col-md-6 col-sm 10 ">
                  <span className='ms-2'>Stocks</span>
                  <input type="number" id="productStock" className="form-control px-3" min={1}
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: parseFloat(e.target.value) || '' })}
                  placeholder='Product stock'
                  style={{ borderRadius:'15px', border:'solid gray 0.5px'}}/>
              </div>  

              <div className="col-lg-2 col-md-6 col-sm 10 ">
                  <span className='ms-2'>Category</span>
                  <select
                        className='px-4'
                        id="productCategory"
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                        style={{ borderRadius:'15px', width:'100%', height:'38px', border:'solid gray 0.5px'}}
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
                  <div className='Container '>
                          <div className='row  d-flex justify-content-center align-items-center '>
                            <div className='col-6'>
                                  <span className='ms-2'>Product ID</span>
                                  <input
                                    readOnly
                                    type="text"
                                    id="prodID"
                                    className="form-control px-4"
                                    value={editingProduct.id}
                                    style={{  borderRadius: '18px', border: 'solid gray 0.5px' }}
                                    required
                                  />
                            </div>
                          </div>

                          <div className='row  d-flex justify-content-center align-items-center p-3'>
                              <div className='col-6'>
                                    <span className='ms-2'>Name:</span>
                                    <input
                                      type="text"
                                      id="editProductName"
                                      className="form-control"
                                      value={editingProduct.name}
                                      onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                                      placeholder="Product Name"
                                      style={{  borderRadius: '18px', border: 'solid gray 0.5px' }}                                      required
                                    />
                              </div>
                              <div className='col-6'>
                                    <span className='ms-2'>Price:</span>
                                    <input
                                      type="number"
                                      id="editProductPrice"
                                      className="form-control"
                                      value={editingProduct.price}
                                      onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) || '' })}
                                      placeholder="Product Price"
                                      style={{  borderRadius: '18px', border: 'solid gray 0.5px' }}
                                      required
                                    />
                              </div>
                          </div>


                          <div className='row  d-flex justify-content-center align-items-center p-3'>
                              <div className='col-6'>
                                      <span className='ms-2'>Stock:</span>
                                      <input
                                        type="number"
                                        id="editProductStock"
                                        className="form-control"
                                        value={editingProduct.stock}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, stock: parseFloat(e.target.value) || '' })}
                                        placeholder="Product Stock"
                                        style={{  borderRadius: '18px', border: 'solid gray 0.5px' }}
                                        required
                                      />
                              
                              </div>
                              <div className='col-6'>
                                    <span className='ms-2'>Category:</span>
                                    <select
                                      id="editProductCategory"
                                      className="form-select"
                                      value={editingProduct.category}
                                      onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                                      required
                                      style={{  borderRadius: '18px', border: 'solid gray 0.5px' }}
                                    >
                                      <option value="" disabled>Select a category</option>
                                      {categories.map((category) => (
                                        <option key={category} value={category}>
                                          {category}
                                        </option>
                                      ))}
                                    </select>
                              </div>
                          </div>

                      

                      

                      
                      </div>
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
                                  <td><b>{product.id}</b></td>
                                  <td>{product.name}</td>
                                  <td>₱{product.price}</td>
                                  <td>{product.stock}</td>
                                  <td>{product.category}</td>
                                  <td> 
                                  <button onClick={() => startEditing(product)} className="btn btn-sm btn-secondary" style={{ borderRadius: '15px', border:'0', width: '30%' }}>
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