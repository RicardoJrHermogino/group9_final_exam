import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';


const CategoryManagement = ({ onSendArrayToCateg, categories, setCategories, addCategory, deleteCategory }) => {

    const [newCategory, setNewCategory] = useState('');
    const [newCategName, setNewCategName] = useState('')
    const [categToEdit, setCategToEdit] = useState(-1)
    const [showEditModal, setShowEditModal] = useState(false);


    useEffect(() => {
      onSendArrayToCateg(categories);
    }, [categories, onSendArrayToCateg]);
  
    const handleAddCategory = () => {
      if (newCategory.trim() !== '') {
        addCategory(newCategory.trim());
        setNewCategory('');
      }
    };
  
    const handleDeleteCategory = (category) => {
      if (window.confirm(`Are you sure you want to delete the category "${category}"?`)) {
        deleteCategory(category);
      }
    };
  
    function handleInputChange(e) {
      setNewCategName(e.target.value);
    }
  
    function editfunc(cat) {
      const indexNo = categories.findIndex((cate) => cate === cat);
    
      if (indexNo !== -1 && newCategName.trim() !== '') {
        const updatedCatList = [...categories];
        updatedCatList[indexNo] = newCategName.trim();
    
        setCategories(updatedCatList);
        setCategToEdit(-1);
        setNewCategName('');
        setShowEditModal(false);
      } else {
        // Handle the case where the input is empty
        alert('Category name cannot be empty.');
      }
    }
  
    const openEditModal = (index) => {
      setCategToEdit(index);
      setShowEditModal(true);
    };
  
    const closeEditModal = () => {
      setCategToEdit(-1);
      setShowEditModal(false);
    };
    

  return (
    <>

    <div className="container-fluid border justify-content-center align-items-center mt-4" style={{width: '301%'}}>
        <div className="row text-center">
            <div className="col">
                <h2 style={{fontWeight:'bold'}}>Category Management</h2>
            </div>
        </div>
        
        <div className="row p-5 mt-4 mx-auto " style={{ borderRadius: '25px', width: '50%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            
            <div className="col-lg-8 col-md-4 col-sm 10 ">
                <span>Category</span>
                <input type="text" className="form-control px-4" id="newCategory"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)} 
                style={{ borderRadius:'15px', border:'solid gray 0.5px'}} required/>
            </div>


        
            <div className="col-lg-4">
                <button onClick={handleAddCategory} className='btn btn-secondary' 
                style={{ width:'100%', height:'35px', fontSize:'15px', border: 0, borderRadius:'18px', marginTop:'13%'}}>Add</button>
            </div>
        </div>








        <div className="row mt-5">
                <div className="col-lg-10 col-md-8 col-sm-6 py-4 mx-auto" style={{ borderRadius: '25px', width: '89%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'  }}>
                    <table className=' text-center' style={{width:'100%', fontSize:'90%'}}>
                        
                        <thead>
                        <tr>
                        <th>Categories</th>
                        <th>Update</th>
                        </tr>
                        </thead>
                        <br/>

                        <tbody>
                          {categories.map((category, index) => (
                            <tr key={index}>
                              <td>{category}</td>
                              <td>
                                <button
                                  onClick={() => openEditModal(index)}
                                  className="btn btn-sm btn-secondary"
                                  style={{ borderRadius: '15px', width: '30%' }}
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDeleteCategory(category)}
                                  className="btn btn-sm btn-secondary"
                                  style={{ borderRadius: '15px', width: '30%' }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>

                       
                    </table>
                </div>

                <Modal show={showEditModal} onHide={closeEditModal} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Category</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input className='form-control' value={newCategName} onChange={(e) => handleInputChange(e)} />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={closeEditModal}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={() => editfunc(categories[categToEdit])}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
        </div>




    </div>
    </>

  );
};

export default CategoryManagement;