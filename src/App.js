// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './Style.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCubes, faExchangeAlt, faChartBar, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Pages/Dashboard';
import ProductManagement from './Pages/ProductManagement';
import CategoryManagement from './Pages/CategoryManagement';
import TransactionManagement from './Pages/TransactionManagement';
import StockManagement from './Pages/StockManagement';
import TransactionReport from './Pages/TransactionReport';

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Product from './Pages/product';
// import Home from './Pages/home';
// import NavbarComponent from './Pages/navbar';
// import Stock from './Pages/stock';
// import Transactions from './Pages/transactions';
// import Reports from './Pages/reports';
// import CategoryManagement from './Pages/category';
// import 'bootstrap/dist/css/bootstrap.min.css';


// import TransactionReport from './Pages/TransactionReport';

function App() {
  const initialProducts = [
    { id: '1', name: 'Hamburger', price: 50, stock: 300, category: 'Consumables' },
    { id: '2', name: 'Laptop', price: 2000, stock: 10, category: 'TechWares' },
    { id: '3', name: 'White T-Shirt', price: 120, stock: 40, category: 'Clothes' }
    // Add more products as needed
  ];

  const initialCategories = ['Consumables', 'Clothes', 'TechWares'];

  const [products, setProducts] = useState(initialProducts);
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState(initialCategories);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
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

  const deleteCategory = (category) => {
    const isCategoryUsed = products.some((product) => product.category === category);

    if (isCategoryUsed) {
      alert(`Cannot delete category "${category}" as it is associated with one or more products.`);
      return;
    }

    setCategories(categories.filter((c) => c !== category));
  };
  

  return (
    <>
        <div style={{ width: '100%', height: '18%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.10)' }}>
                  <div className='row border py-2'>
                  <div className='col-1 border' style={{width:'100px'}} >

                    </div>
                    <div className='col-9 border' >
                      <h2 style={{fontWeight:'bolder'}}>Group 9</h2>
                    </div>
                    <div className='col-2' >
                      <div className='border '>
                        <span className='ms-5'>Dashboard</span>
                      </div>
                    </div>

                  </div>
                  <div className='row border'>
                  <div className='col-2 py-' >
                      <div className='border'>
                        Transaction Reports
                      </div>
                    </div>
                  </div>
        </div>

        <div className="d-flex" style={{ height: '85vh'}}>
            <Tabs
              defaultActiveKey="dashboard"
              id="vertical-tab-example"
              className="p-3 mb-2 fs-5 flex-column"
              variant="pills"
              style={{ width: '90px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}
            >
              <Tab eventKey="dashboard" title={<FontAwesomeIcon icon={faHome} />} >
                <Dashboard />
              </Tab>
              <Tab eventKey="products" title={<FontAwesomeIcon icon={faCubes} />} >
                <ProductManagement 
                  products={products}
                  categories={categories}
                  addProduct={addProduct} 
                  deleteProduct={deleteProduct}
                  updateProduct={updateProduct}
                  updateStock={updateStock}/>
              </Tab>
              <Tab eventKey="category" title={<FontAwesomeIcon icon={faCubes} />} >
                <CategoryManagement categories={categories} addCategory={addCategory} deleteCategory={deleteCategory}/>
              </Tab>
              <Tab eventKey="transaction" title={<FontAwesomeIcon icon={faExchangeAlt} />} >
                <TransactionManagement products={products} updateStock={updateStock} completeTransaction={completeTransaction}/>
              </Tab>
              <Tab eventKey="Stock" title={<FontAwesomeIcon icon={faCubes} />}>
                <StockManagement products={products} updateStock={updateStock}/>
              </Tab>
              <Tab eventKey="report" title={<FontAwesomeIcon icon={faFileAlt} />}>
                <TransactionReport transactions={transactions}/>
              </Tab>
            </Tabs>
        </div>




    </>
  );
}

export default App;
  

