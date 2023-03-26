import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './styles.module.css';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { productData } from '../../data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [products, setproducts] = useState(productData);
  const [selectedproduct, setSelectedproduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('products_data'));
    if (data !== null && Object.keys(data).length !== 0) setproducts(data);
  }, []);

  const handleEdit = id => {
    const [product] = products.filter(product => product.id === id);

    setSelectedproduct(product);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [product] = products.filter(product => product.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${product.title} by ${product.createdBy}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const productsCopy = products.filter(product => product.id !== id);
        localStorage.setItem('products_data', JSON.stringify(productsCopy));
        setproducts(productsCopy);
      }
    });
  };

  return (
    <div className="styles.container" style={{ backgroundColor: '#4e54c8',padding:'2rem', margin:'2rem',borderRadius:'5px'}}>
        <div style={{ backgroundColor: 'white',padding:'2rem', margin:'2rem',borderRadius:'5px'}}>
        {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            products={products}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          products={products}
          setproducts={setproducts}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          products={products}
          selectedproduct={selectedproduct}
          setproducts={setproducts}
          setIsEditing={setIsEditing}
        />
      )}
        </div>
      </div>
  );
};

export default Dashboard;
