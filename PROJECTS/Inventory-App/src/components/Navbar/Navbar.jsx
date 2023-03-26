import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from "./styles.module.css";

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div className={styles.navbar}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">Wender.in</span>
            <div style={{margin:"0 20px"}}>
                <Link className="navLink" to="/products">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart ({items.length})
                </Link>
                <Link className="navLink" to="/">
                   Admin
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
