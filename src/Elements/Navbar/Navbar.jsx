import React from 'react'
import "./Navbar.css"

import { IoSearchOutline } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillPersonFill } from "react-icons/bs";

import logo from "../../assets/logo.svg";
import icon from "../../assets/icon.svg";



const Navbar = () => {
    return (
        <nav>
            <div className="nav__left">
                <a href="#">
                    <img src={logo} alt={logo} />
                    <img src={icon} alt={logo} />
                </a>
                <input type="text" placeholder='Search a Product' />
                <IoSearchOutline />
            </div>

            <div className="nav__right">
            <BsFillPersonFill/>
                <span>
                    {/* SignIn/SignUp */}
                </span>

                <div className='cart' >
                    <div className="items">
                        <p>12 products</p>
                        <h5>QR 123.00</h5>
                    </div>
                    <FaShoppingCart />
                </div>

            </div>
        </nav>
    )
}

export default Navbar