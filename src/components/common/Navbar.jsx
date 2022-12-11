import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { cartData } = useSelector((state) => state.cart)
    return (
        <>
            <nav className="navbar shadow p-3 mb-5 bg-light">
                <div className="container-fluid">
                    <div>
                        <Link className="navbar-brand fw-semibold mx-4" to="/">HOME</Link>
                        <Link className="navbar-brand fw-semibold mx-3" to="/products">PRODUCTS</Link>
                    </div>
                    <div className="d-flex mx-5" role="search">
                        <Link className="nav-link fw-semibold fs-5" to="/cart">
                            <i className="fa-solid fa-cart-shopping"></i>{cartData.length ? <sup>&nbsp;({cartData.length})</sup> : null}
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;