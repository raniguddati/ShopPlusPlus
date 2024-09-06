import { Outlet, Link } from "react-router-dom";
import './navbar.css';
import { useState, useEffect } from 'react';
import Cart from "../cart/card";
import Profile from "../profile/profle";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({ isAdmin: false }); // Default to not being an admin

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        if (token !== null) {
            setIsLoggedIn(true);
            if (user) {
                setUserData(user);
                // Assuming the user object has an isAdmin property
                setUserData(prevState => ({ ...prevState, isAdmin: user.isAdmin }));
            }
        }
    }, []);


    // Step 2: Create Event Handlers
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    return (
        <>
            <div className="navbar bg-shop-blue text-shop-black font-card-font">
                <div className="navbar-start ">
                    <div className="dropdown">
                        {/* Trigger button */}
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
                            {/* SVG Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* Menu Content */}
                        {isMenuOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2">
                                <li><Link to="/" onClick={closeMenu}><h1 className="white-text">Home</h1></Link></li>
                                <li><Link to="/motorcycles" onClick={closeMenu}><h1>Motorcycles</h1></Link></li>
                                <li><Link to="/accessories" onClick={closeMenu}><h1>Accessories</h1></Link></li>
                                <li><Link to="/aboutus" onClick={closeMenu}><h1>About Us</h1></Link></li>
                                <li><Link to="/contactus" onClick={closeMenu}><h1>Contact Us</h1></Link></li>
                                {isLoggedIn && (
                                    <>
                                        {userData.isAdmin && (
                                            <>
                                                <li><Link to="/addproduct" onClick={closeMenu}><h1>Add Product</h1></Link></li>
                                            </>
                                        )}
                                    </>
                                )}
                            </ul>
                        )}
                    </div>
                    {/* ShopPlusPlus Link */}
                    <Link to="/" className="btn btn-ghost text-xl">ShopPlusPlus</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/"> <h1>Home</h1> </Link></li>
                        <li>
                            <Link to="/motorcycles"> <h1>Motorcycles</h1> </Link>
                        </li>
                        <li>
                            <Link to="/accessories"> <h1>Accessories</h1> </Link>
                        </li>
                        <li>
                            <Link to="/aboutus"> <h1>About Us</h1> </Link>
                        </li>
                        <li>
                            <Link to="/contactus">  <h1>Contact Us</h1> </Link>
                        </li>
                        {isLoggedIn && (
                            <>
                                {userData.isAdmin && (
                                    <>
                                        <li><Link to="/addproduct"><h1>Add Product</h1></Link></li>
                                    </>
                                )}
                            </>
                        )}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Cart />
                    <Profile />
                </div>
            </div >
            <Outlet />

        </>
    );
}




