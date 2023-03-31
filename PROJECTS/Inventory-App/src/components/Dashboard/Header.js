import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


const Header = ({ setIsAdding, setIsAuthenticated }) => {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

  const handleUpload = async (e) => {
		e.preventDefault();
		try {
      		const data = JSON.parse(localStorage.getItem('products_data'));
			const url = "http://localhost:8080/api/product/create";
			Swal.fire({
				icon: 'success',
				title: 'Updated!',
				text: `Data has been Updated in the database.`,
				showConfirmButton: false,
				timer: 1500,
			});
			await axios.post(url, data);
		} catch (error) {
			console.log(error);
		}
	};
  
	
  
  return (
    <header>
      <h1>Inventory Management</h1>
	  <div style={{display: "flex", margin:"0"}}>
						<Link to="/login" style={{ alignSelf: "flex-start",color: "#4e54c8" }}>
							<p style={{ padding: "0 5px" }}>Login Page</p>
						</Link>
						|
						<Link to="/products" style={{ alignSelf: "flex-start",color: "#4e54c8" }}>
							<p style={{ padding: "0 5px" }}>Product Page</p>
						</Link>
		</div>
      <div style={{ marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add Item</button>
        <button className="muted-button" onClick={handleLogout}>
					Logout
				</button>
        <button className="muted-button" onClick={handleUpload}>
					Upload On Database
				</button>
      </div>
    </header>
  );
};

export default Header;
