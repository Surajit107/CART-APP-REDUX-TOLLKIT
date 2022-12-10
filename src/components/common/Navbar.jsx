import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { cartData } = useSelector((state) => state.cart)
    return (
        <>
            <nav className="navbar navbar-expand shadow p-3 mb-5 bg-light">
                <div className="container">
                    <Link className="navbar-brand fw-semibold" to="/">HOME</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold fs-5" to="/products">PRODUCTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold fs-5" to="/cart">CART ({cartData.length})</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;