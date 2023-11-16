import React, {useEffect, useState} from 'react'
import './Header.css'
import logo from '../../../image/reebok-logo-white.jpeg'
import {MdOutlineShoppingBag} from "react-icons/md";
import {FaRegHeart, FaSearch} from "react-icons/fa";
import {HiViewList} from "react-icons/hi";


export default function Header() {


    const [toggle, setToggle] = useState(false);
    const [headerData, setheaderData] = useState([])
    const toggleMenu = (event) => {
        event.preventDefault(); // Prevent the default behavior of the button
        setToggle(!toggle);
        console.log("Toggle:", toggle);
    };
    useEffect(() => {
        fetch('graphql', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                query: `{
  categoryList(filters:{ids:{eq:"467"}}){
    uid,
    name,
    id,
    level,
    children_count
    children {
      id
      level
      name
      path
      url_path
      url_key
      image
      children_count
      description
      children {
        id
        level
        name
        path
        url_path
        url_key
        image
        description
      }
    }
  }
}`
            })
        })
            .then(res => res.json())
            .then(res => setheaderData(res?.data?.categoryList[0]?.children))



    }, [])

    const renderDropdown = (dropdownData) => {
        return (
            <ul className="dropdown">
                {dropdownData.map((child, idx) => (
                    <li key={idx}>
                        <a href={`#${child.path}`}>{child.name}</a>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            {/*<div className="header-container">*/}
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
                        <a href="">Newsletter Signup</a>
                        <a className="header_account_link cms-page-l"
                           href="https://www.reebok.ae/customer/account/login/">Log In</a>
                    </div>
                </div>
                <div className="header-main">
                    <button className="toggleButton" onClick={toggleMenu}><HiViewList size={20}/></button>
                    <div className="logo">
                        <img src={logo} alt='Logo'></img>
                    </div>


                    <ul className="nav">
                        {
                            (headerData?.length !== 0) ? (
                                headerData?.map((item) => {
                                    if (item?.children_count!=0) {
                                        // console.log(item.name);
                                        return(
                                            <>
                                        <li><a href="#">{item.name}</a>
                                            {renderDropdown(item.children)}
                                        </li>
                                            </>
                                        );
                                    }
                                })
                            ) : ""
                        }

                        {/*<li><a href="#">Home</a></li>*/}
                        {/*<li><a href="#">Shop</a></li>*/}
                        {/*<li><a href="#">Categories</a></li>*/}
                        {/*<li><a href="#">Contact</a></li>*/}
                    </ul>


                    <div className="search-bar">
                        <input type="text" className="search-input" placeholder="Search..."/>
                        <button><FaSearch size={20}/></button>
                    </div>

                    <div className="user-links">
                        <a href="#"><FaRegHeart size={20}/> </a>
                        <a href="#"><MdOutlineShoppingBag size={20}/></a>
                    </div>

                </div>
                <div className={toggle ? "sidebar colapse" : "sidebar"}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

            </div>
            {/*</div>*/}
        </>
    )
}
