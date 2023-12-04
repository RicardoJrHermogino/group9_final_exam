import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faTachometerAlt, faBox, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const TopBox = () => {
  return (
    <div className="d-flex justify-content-end align-items-center p-3" style={{ backgroundColor: '#374149' }}>
      <div className="mr-auto">
        <span className="text-white me-3">Welcome, User!</span>
        <FontAwesomeIcon icon={faBell} className="text-white me-3" />
        <FontAwesomeIcon icon={faUser} className="text-white" />
      </div>
    </div>
  );
};

export default Topbox;





// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCubes, faExchangeAlt, faChartBar, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Pages/Dashboard';
// import ProductManagement from './Pages/ProductManagement';
// // import CategoryManagement from './Pages/CategoryManagement';
// import StockManagement from './Pages/StockManagement';
// import TransactionManagement from './Pages/TransactionManagement';
// import TransactionReport from './Pages/TransactionReport';

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
      <div className="justify-content-end align-items-center p-3 border fixed-top end-0" style={{ backgroundColor: '#374149', width: '100%', height: '14%' }}>
        {/* Content of your fixed-top div */}
      </div>
      <div className="d-flex flex-column flex-sm-row overflow-hidden" style={{ backgroundColor: '#1e272e', minHeight: '100vh', paddingTop: '105px' }}>
        {/* 
          Added flex classes to make the Tabs responsive:
          - flex-column for stacking on smaller screens
          - flex-sm-row for side-by-side on larger screens (sm stands for small)
        */}
        <Tabs
          defaultActiveKey="dashboard"
          id="vertical-tab-example"
          className="p-3 mb-2 fs-5"
          variant="pills"
          style={{ backgroundColor: '#374149', flex: '1' }}
        >
          <Tab eventKey="dashboard" title={<FontAwesomeIcon icon={faHome} />}>
            <Dashboard />
          </Tab>
          <Tab eventKey="products" title={<FontAwesomeIcon icon={faCubes} />}>
            {/* <ProductManagement/> */}
          </Tab>
          <Tab eventKey="transaction" title={<FontAwesomeIcon icon={faExchangeAlt} />}>
            {/* <TransactionManagement /> */}
          </Tab>
          <Tab eventKey="Stock" title={<FontAwesomeIcon icon={faCubes} />}>
            {/* <StockManagement /> */}
          </Tab>
          <Tab eventKey="report" title={<FontAwesomeIcon icon={faFileAlt} />}>
            {/* <TransactionReport /> */}
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default App;
  




<div className="border fixed-top" style={{ backgroundColor: '#374149', width: '100%', height: '14%' }}>
<div className='row border py-4'>
  <div className='col-3 border'>
    sdfjkjsldgfklsdkjg
  </div><div className='col border'>
    sdfjkjsldgfklsdkjg
  </div><div className='col border'>
    sdfjkjsldgfklsdkjg
  </div>
</div>
<div className='row border'>
  <div className='col border'>
    sdfjkjsldgfklsdkjg
  </div><div className='col border'>
    sdfjkjsldgfklsdkjg
  </div><div className='col border'>
    sdfjkjsldgfklsdkjg
  </div>
</div>
</div>

<div className="d-flex" style={{ backgroundColor: '#1e272e', minHeight: '100vh', paddingTop: '105px' }}>
<Tabs
  defaultActiveKey="dashboard"
  id="vertical-tab-example"
  className="p-3 mb-2 fs-5 flex-column"
  variant="pills"
  style={{ backgroundColor: '#374149', width: '80px' }}
>
  <Tab eventKey="dashboard" title={<FontAwesomeIcon icon={faHome} />} className="mb-3">
    <Dashboard />
  </Tab>
  <Tab eventKey="products" title={<FontAwesomeIcon icon={faCubes} />} className="mb-3">
    {/* <ProductManagement/> */}
  </Tab>
  <Tab eventKey="products" title={<FontAwesomeIcon icon={faCubes} />} className="mb-3">
    {/* <CAtegoryManagement/> */}
  </Tab>
  <Tab eventKey="transaction" title={<FontAwesomeIcon icon={faExchangeAlt} />} className="mb-3">
    {/* <TransactionManagement /> */}
  </Tab>
  <Tab eventKey="Stock" title={<FontAwesomeIcon icon={faCubes} />} className="mb-3">
    {/* <StockManagement /> */}
  </Tab>
  <Tab eventKey="report" title={<FontAwesomeIcon icon={faFileAlt} />} className="mb-3">
    {/* <TransactionReport /> */}
  </Tab>
</Tabs>

{/* Content Area */}
<div>
  {/* Your main content goes here */}
</div>
</div>