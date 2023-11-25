// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCubes, faExchangeAlt, faChartBar, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Pages/Dashboard';
import ProductManagement from './Pages/ProductManagement';
// import CategoryManagement from './Pages/CategoryManagement';
import StockManagement from './Pages/StockManagement';
import TransactionManagement from './Pages/TransactionManagement';
import TransactionReport from './Pages/TransactionReport';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((currentProducts) => {
      return currentProducts.map((product) => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        }
        return product;
      });
    });
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const completeTransaction = (completedTransactions) => {
    const totalTransactionPrice = completedTransactions.reduce((total, transaction) => {
      return total + transaction.quantity * transaction.price;
    }, 0);

    setTransactions([...transactions, ...completedTransactions]);

    

    console.log('Total Transaction Price:', totalTransactionPrice);
  };

  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  const updateCategory = (index, updatedCategory) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = updatedCategory;
    setCategories(updatedCategories);
  };

  const deleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const updateStock = (productId, newStock) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, stock: newStock } : product
    );
    setProducts(updatedProducts);
  };





  return (
    <>
      <div className="d-flex justify-content-end align-items-center p-3" style={{ backgroundColor: '#374149' }}>
      <div className="mr-auto">
        <span className="text-white me-3">Welcome, User!</span>
      </div>
    </div>
      <div className="d-flex overflow-hidden" style={{ backgroundColor: '#1e272e', minHeight: '100vh' }}>
        <Tabs
          defaultActiveKey="dashboard"
          id="vertical-tab-example"
          className="p-3 mb-2 fs-5 flex-column"
          variant="pills"
          style={{ backgroundColor: '#374149', flexWrap: 'nowrap' }}
        >
          <Tab eventKey="dashboard" title={<FontAwesomeIcon icon={faHome} />}>
            <Dashboard />
          </Tab>
          <Tab eventKey="products" title={<FontAwesomeIcon icon={faCubes} />}>  
          <ProductManagement/>
          </Tab>
          <Tab eventKey="transaction" title={<FontAwesomeIcon icon={faExchangeAlt} />}>
            <TransactionManagement />
          </Tab>
          <Tab eventKey="Stock" title={<FontAwesomeIcon icon={faCubes} />}>
            <StockManagement />
          </Tab>
          <Tab eventKey="report" title={<FontAwesomeIcon icon={faFileAlt} />}>
            <TransactionReport />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default App;
