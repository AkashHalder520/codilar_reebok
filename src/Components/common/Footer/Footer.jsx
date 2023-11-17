import React from 'react';
import './Footer.css'
import {FaFacebook, FaInstagram} from "react-icons/fa";

function Footer(props) {
    return (
        <>
            <div className="newsletter">
                <div className="text">
                    PAIR UP WITH US AND GET <br/>15% 0FF
                </div>
                <div className="newsletterbtn">
                    <button>Sign up for newsletter -></button>
                </div>
            </div>


            <div className="footer">

                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>PRODUCTS</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">affiliate program</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>SPORTS</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">shipping</a></li>
                                <li><a href="#">returns</a></li>
                                <li><a href="#">order status</a></li>
                                <li><a href="#">payment options</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>COLLECTIONS</h4>
                            <ul>
                                <li><a href="#">watch</a></li>
                                <li><a href="#">bag</a></li>
                                <li><a href="#">shoes</a></li>
                                <li><a href="#">dress</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>SUPPORT</h4>
                            <ul>
                                <li><a href="#">watch</a></li>
                                <li><a href="#">bag</a></li>
                                <li><a href="#">shoes</a></li>
                                <li><a href="#">dress</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>FOLLOW US</h4>
                            <div class="social-links">
                                <a href="#"><FaFacebook size={30}/></a>
                                <a href="#"><FaInstagram size={30}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="copyright_first">
                    <ol className="footer-legal">
                        <li className="footer-legal-item">
                            <a href="/privacy-notice">Privacy Notice</a>
                        </li>
                        <li className="footer-legal-item">
                            <a href="/terms-conditions">Terms &amp; Conditions</a>
                        </li>
                        <li className="footer-legal-item">
                            <a href="/sitemap">Sitemap</a>
                        </li>
                    </ol>
                </div>
                <div className="copyright_second">
                    <p>Seller: Evolution RBK Athleisure LLC, Dubai UAE | Operator of the website and Copyright:2023
                        Evolution RBK Athleisure LLC.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;