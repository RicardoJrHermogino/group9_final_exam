// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCubes, faExchangeAlt, faChartBar, faFileAlt, faBoxOpen} from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Pages/Dashboard';
import ProductManagement from './Pages/ProductManagement';
import CategoryManagement from './Pages/CategoryManagement';
import TransactionManagement from './Pages/TransactionManagement';
import StockManagement from './Pages/StockManagement';
import TransactionReport from './Pages/TransactionReport';

import { Modal, Button } from 'react-bootstrap';

function App() {
  const initialProducts = [
    { id: 'PROD-GRP9-1', name: 'Hamburger', price: 50, stock: 300, category: 'Foods' },
    { id: 'PROD-GRP9-2', name: 'Laptop', price: 23000, stock: 10, category: 'TechWares' },
    { id: 'PROD-GRP9-3', name: 'White T-Shirt', price: 120, stock: 40, category: 'Clothes' }
    // Add more products as needed
  ];

  const initialCategories = ['Consumables', 'Clothes', 'TechWares'];

  const [products, setProducts] = useState(initialProducts);
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState(initialCategories);
  const [showModal, setShowModal] = useState(false);

  const handleCatList = (arrayFromAddCateg) => {
    setCategories(arrayFromAddCateg);
  };

  const addProduct = (newProduct) => {
    if (newProduct.price > 0 && newProduct.stock > 0){
      setProducts([...products, newProduct]);
    }
    else{
      alert('Please input valid price or stocks')
    }
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
  };

  const updateStock = (productsToUpdate) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        const updatedProduct = productsToUpdate.find((p) => p.id === product.id);
        return updatedProduct ? { ...product, stock: updatedProduct.stock } : product;
      })
    );
  };

  const completeTransaction = (newTransactions) => {
    setTransactions((prevTransactions) => [...prevTransactions, ...newTransactions]);
  };

  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  console.log(categories)
  const deleteCategory = (category) => {
    const isCategoryUsed = products.some((product) => product.category === category);

    if (isCategoryUsed) {
      alert(`Cannot delete category "${category}" as it is associated with one or more products.`);
      return;
    }

    setCategories(categories.filter((c) => c !== category));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  const [isReportsHovered, setReportsHovered] = useState(false);
  const reportsButtonStyles = {
    cursor: 'pointer',
    width: '85%',
    borderRadius: '20px',
    minHeight: '85%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: 'solid black 1px',
    maxWidth: '200px',
  };
  

  const salesData = [30, 40, 25, 50, 49, 21, 70, 51, 60, 40, 20, 15];

  

  return (
    <>
<div className='border' style={{ width: '100%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.10)' }}>
                  <div className='row border py-2'>
                    <div className='col' >
                      <h2 className='ms-3' style={{fontWeight:'bolder'}}>Group 9</h2>
                    </div>
                    <div className='col-2' >
                    <div
                      className={`py-1 ${isReportsHovered ? 'hovered' : ''}`}
                      onClick={toggleModal}
                      onMouseEnter={() => setReportsHovered(true)}
                      onMouseLeave={() => setReportsHovered(false)}
                      style={{ ...reportsButtonStyles,
                        transform: isReportsHovered ? 'scale(1.05)' : 'scale(1)', }}
                      >                      
                      <FontAwesomeIcon className='ms-3' icon={faFileAlt}style={{ color: 'black' }} />
                        <span style={{fontSize:'13px'}} className='ms-3'>Transaction Reports</span>
                      </div>
                    </div>

                  </div>


                  <div className='row py-1' style={{borderTop: 'solid gray 1px'}}>
                      <div className='col-1' style={{width:'100px'}} >

                        </div>
                        <div className='col-9' >
                        </div>
                        <div className='col-2' >

                            <span className='ms-3 ' style={{fontSize:'15px'}}>Filter  Products Category</span>

                        </div>
                  </div>
        </div>

        <div className="d-flex" style={{ height: '90vh', flexGrow: 1 }}>
        <Tabs
          defaultActiveKey="dashboard"
          id="vertical-tab-example"
          className="p-3 mb-2 fs-5 flex-column"
          variant="pills"
          style={{
            flex: '0 0 auto', // This ensures the navigation bar doesn't grow
            width: '90px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
        >
              <Tab eventKey="dashboard" title={
                <div className="d-flex align-items-center mb-3 mt-5">
                    <FontAwesomeIcon icon={faHome} style={{ color: 'black' }} />
                </div>
              }>
                <Dashboard
                    products={products}
                    categories={categories}
                    addProduct={addProduct}
                    deleteProduct={deleteProduct}
                    updateProduct={updateProduct}
                    updateStock={updateStock}
                    transactions={transactions}
                  />
              </Tab>
              <Tab eventKey="products" title={
                <div className="d-flex align-items-center mb-3 mt-4">
              <FontAwesomeIcon icon={faBoxOpen} style={{ color: 'black' }}/>
                </div>
                } >
                <ProductManagement 
                  products={products}
                  categories={categories}
                  addProduct={addProduct} 
                  deleteProduct={deleteProduct}
                  updateProduct={updateProduct}
                  updateStock={updateStock}/>
              </Tab>
              <Tab eventKey="category" title={
              <div className="d-flex align-items-center mb-3 mt-4">
              <FontAwesomeIcon icon={faChartBar} style={{ color: 'black' }} />
              </div>
              } >
                <CategoryManagement onSendArrayToCateg={handleCatList} 
                categories={categories} 
                setCategories={setCategories} 
                addCategory={addCategory} 
                deleteCategory={deleteCategory}/>
              </Tab>
              <Tab eventKey="Stock" title={
              <div className="d-flex align-items-center mb-3 mt-4">
              <FontAwesomeIcon icon={faCubes} style={{ color: 'black' }}/>
              </div>
              }>
                <StockManagement products={products} 
                updateStock={updateStock}/>
              </Tab>
              <Tab eventKey="transaction" title={
              <div className="d-flex align-items-center mb-3 mt-4">
              <FontAwesomeIcon icon={faExchangeAlt} style={{ color: 'black' }}/>
              </div>
              } >
                <TransactionManagement products={products} 
                updateStock={updateStock} 
                completeTransaction={completeTransaction}/>
              </Tab>
              
              <Tab eventKey="report" title={
              <div className="d-flex align-items-center mb-3 mt-4">
              <FontAwesomeIcon icon={faFileAlt}style={{ color: 'black' }} />
              </div>
              }>
                <TransactionReport transactions={transactions}/>
              </Tab>
            </Tabs>
        </div>


        <Modal
          show={showModal}
          onHide={toggleModal}
          dialogClassName="modal-dialog-scrollable modal-dialog-centered modal-fullscreen"
        >
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TransactionReport transactions={transactions} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>




    </>
  );
}

export default App;
  

