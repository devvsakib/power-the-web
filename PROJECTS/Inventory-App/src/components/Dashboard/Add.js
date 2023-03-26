import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ products, setproducts, setIsAdding }) => {
  const [title, settitle] = useState('');
  const [createdBy, setcreatedBy] = useState('');
  const [image, setimage] = useState('');
  const [price, setprice] = useState('');
  const [createdAt, setcreatedAt] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (!title || !createdBy || !image || !price || !createdAt) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = products.length + 1;
    const newproduct = {
      id,
      title,
      createdBy,
      image,
      price,
      createdAt,
    };

    products.push(newproduct);
    localStorage.setItem('products_data', JSON.stringify(products));
    setproducts(products);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${title} ${createdBy}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add product</h1>
        <label htmlFor="title">Title of product</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={e => settitle(e.target.value)}
        />
        <label htmlFor="createdBy">Created By</label>
        <input
          id="createdBy"
          type="text"
          name="createdBy"
          value={createdBy}
          onChange={e => setcreatedBy(e.target.value)}
        />
        <label htmlFor="image">Image of product</label>
        <input
          id="image"
          type="url"
          name="image"
          value={image}
          onChange={e => setimage(e.target.value)}
        />
        <label htmlFor="price">Price of product ($)</label>
        <input
          id="price"
          type="number"
          name="price"
          value={price}
          onChange={e => setprice(e.target.value)}
        />
        <label htmlFor="createdAt">Created At</label>
        <input
          id="createdAt"
          type="date"
          name="createdAt"
          value={createdAt}
          onChange={e => setcreatedAt(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
