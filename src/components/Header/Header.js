import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()

    return (
        <div className="container">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h1>Fast-Vip</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="item" to="/services">Services</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="item" to="/about">About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="item" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="item" to="/delivery">Delivery</Link>
                            </li>
                            <li className="nav-item mx-3">
                                {
                                    user?.email ?
                                        <Link className="item" to="/login">Login</Link> :
                                        <button type="button" class="btn btn-primary">Log Out</button>

                                }
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="item" to="/login">{user?.displayName}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;