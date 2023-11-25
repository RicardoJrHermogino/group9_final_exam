import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductManagement = ({ products, categories, addProduct, updateProduct, deleteProduct }) => {

 
  
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', category: '' });
  const [editingProduct, setEditingProduct] = useState(null);


  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock && newProduct.category) {
      addProduct({ ...newProduct, id: Date.now().toString() });
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
    if (editingProduct && editingProduct.name && editingProduct.price && editingProduct.stock && editingProduct.category) {
      updateProduct(editingProduct);
      setEditingProduct(null);
    }
  };

  return (
    <div>
     
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          placeholder="Product Name"
          required
        />
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          placeholder="Product Price"
          required
        />
        <label htmlFor="productStock">Product Stock:</label>
        <input
          type="number"
          id="productStock"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
          placeholder="Product Stock"
          required
        />
        <label htmlFor="productCategory">Product Category:</label>
        <select
          id="productCategory"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          required
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      {/* Edit Product Form */}
      {editingProduct && (
        <div>
          <label htmlFor="editProductName">Edit Product Name:</label>
          <input
            type="text"
            value={editingProduct.name}
            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
          />
          <label htmlFor="editProductPrice">Edit Product Price:</label>
          <input
            type="number"
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
          />
          <label htmlFor="editProductStock">Edit Product Stock:</label>
          <input
            type="number"
            value={editingProduct.stock}
            onChange={(e) => setEditingProduct({ ...editingProduct, stock: e.target.value })}
          />
          <label htmlFor="editProductCategory">Edit Product Category:</label>
          <select
            value={editingProduct.category}
            onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
          >
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
          <button onClick={handleUpdateProduct}>Update Product</button>
        </div>
      )}

      
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>Product ID:</strong> {product.id}<br />
            <strong>Name:</strong> {product.name} - 
            <strong> Price:</strong> ₱{product.price} - 
            <strong> Stock:</strong> {product.stock} - 
            <strong> Category:</strong> {product.category}
            <button onClick={() => startEditing(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;