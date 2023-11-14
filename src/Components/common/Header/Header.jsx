import React, {useState} from 'react'
import './Header.css'
import logo from '../../../image/reebok-logo-white.jpeg'
import { MdOutlineShoppingBag } from "react-icons/md";
import {FaRegHeart, FaSearch} from "react-icons/fa";
import {HiViewList} from "react-icons/hi";

export default function Header() {


    const [toggle, setToggle] = useState(false);
    const toggleMenu = (event) => {
        event.preventDefault(); // Prevent the default behavior of the button
        setToggle(!toggle);
        console.log("Toggle:", toggle);
    };


    return (
<>

        <div className="header-container" >
            <div className="header">
                <div className="header-top">
                    <div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true">
                        <div className="h-top-text">
                            <div className="header-text">
                                <a href="https://www.reebok.ae/shippings" className="frist-link" id="text-top">Free
                                    Delivery on purchase above AED 250</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-middle">
                    <div className="h-links">
                        <a href="https://www.reebok.ae/returns" className="cms-page-l">return &amp; refund</a>
                        <a href="" >Newsletter Signup</a>
                        <a className="header_account_link cms-page-l" href="https://www.reebok.ae/customer/account/login/">Log In</a>
                    </div>
                </div>
                <div className="header-main">
                    <button className="toggleButton" onClick={toggleMenu}><HiViewList size={20}/></button>
                    <div className="logo">
                        <img src={logo} alt='Logo'></img>
                    </div>



                    <ul className="nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>





                    <div className="search-bar">
                        <input type="text" className="search-input" placeholder="Search..."/>
                            <button > <FaSearch size={20}/> </button>
                    </div>

                    <div className="user-links">
                        <a href="#" ><FaRegHeart size={20} /> </a>
                        <a href="#"><MdOutlineShoppingBag size={20}/></a>
                    </div>

                </div>
                <div className={toggle?"sidebar colapse":"sidebar"}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

            </div>
        </div>
</>
    )
}
