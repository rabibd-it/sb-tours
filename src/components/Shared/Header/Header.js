import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
import logo from '../../../images/logo.png';
import noPhoto from '../../../images/no-photo.jpg';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img
                            src={logo}
                            alt={'SB Tours and Travels Agency'}
                            title={'SB Tours and Travels Agency'}
                            style={{ height: "50px" }}
                        />
                        <span className="text-uppercase">SB Tours</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerMain" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerMain">
                        <ul className="navbar-nav col-lg-auto me-lg-auto justify-content-center">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about-us" className="nav-link" activeClassName="active">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tours
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <NavLink to="/tour/domestic" className="dropdown-item" activeClassName="active">Domestic Tours</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/tour/international" className="dropdown-item" activeClassName="active">International Tours</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/hotels" className="nav-link" activeClassName="active">Hotel</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact-us" className="nav-link" activeClassName="active">Contact Us</NavLink>
                            </li>
                        </ul>
                        {
                            user.email ? <span className="d-flex">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuAdmin" data-bs-toggle="dropdown" aria-expanded="false">
                                        Admin Panel
                                    </button>
                                    <ul className="dropdown-menu" id="dropdownMenuAdmin">
                                        <li>
                                            <NavLink to="/admin/sliders" className="dropdown-item" activeClassName="active">Manage Sliders</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/admin/services" className="dropdown-item" activeClassName="active">Manage Services</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/admin/tours" className="dropdown-item" activeClassName="active">Manage Tours</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/admin/hotels" className="dropdown-item" activeClassName="active">Manage Hotels</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown text-end mx-3">
                                    <a href="" className="d-block text-white text-decoration-none dropdown-toggle" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={user.photoURL ? user.photoURL : noPhoto} width="32" height="32" className="rounded-circle" />
                                        <span className="mx-2">{user.displayName}</span>
                                    </a>
                                    <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser">
                                        <li>
                                            <NavLink to="/profile" className="dropdown-item" activeClassName="active">Profile</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/profile/update" className="dropdown-item" activeClassName="active">Update Profile</NavLink>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <NavLink to="/profile/my-order" className="dropdown-item" activeClassName="active">My Orders</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/profile/all-order" className="dropdown-item" activeClassName="active">All Orders</NavLink>
                                        </li>
                                        <li>
                                            <a href="#" onClick={logOut} className="dropdown-item">Sign Out</a>
                                        </li>
                                    </ul>
                                </div>
                            </span>
                                :
                                <div className="text-end">
                                    <Link to="/login" className="btn btn-default me-2">Sign In</Link>
                                    <Link to="/register" className="btn btn-primary">Sign Up</Link>
                                </div>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;