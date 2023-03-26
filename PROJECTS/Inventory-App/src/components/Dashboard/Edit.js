import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ products, selectedproduct, setproducts, setIsEditing }) => {
  const id = selectedproduct.id;

  const [title, settitle] = useState(selectedproduct.title);
  const [createdBy, setcreatedBy] = useState(selectedproduct.createdBy);
  const [image, setimage] = useState(selectedproduct.image);
  const [price, setprice] = useState(selectedproduct.price);
  const [createdAt, setcreatedAt] = useState(selectedproduct.createdAt);

  const handleUpdate = e => {
    e.preventDefault();

    if (!title || !createdBy || !image || !price || !createdAt) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const product = {
      id,
      title,
      createdBy,
      image,
      price,
      createdAt,
    };

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1, product);
        break;
      }
    }

    localStorage.setItem('products_data', JSON.stringify(products));
    setproducts(products);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${product.title} ${product.createdBy}'s data has been Updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit product</h1>
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
        <label htmlFor="image">Image Link</label>
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
        <label htmlFor="createdAt">Update At</label>
        <input
          id="createdAt"
          type="date"
          name="createdAt"
          value={createdAt}
          onChange={e => setcreatedAt(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
