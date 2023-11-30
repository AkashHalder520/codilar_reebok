import React from 'react'

function MiniCart({cartBtnToggle}) {
  return (
   <>
   <div className={cartBtnToggle ? "closeMiniCart" : "openMiniCart"}>
                    <div className="mini-cart-parent">
                        <div className="mini-cart-top">
                            <div className="mini-cart-top-l">
                                <span>1</span>
                                <p>Item in Bag</p>
                            </div>
                            <div className="mini-cart-top-r">
                                <p>Cart Sub-total</p>
                                <h2>AED 139.00</h2>
                            </div>
                        </div>

                        <div className="mini-cart-checkout-btn">
                            Proceed to Checkout
                        </div>
                    </div>
                    <div className="mini-cart-line"></div>

                    <div className="mini-cart-product">
                        <div className="mini-cart-product-parent">
                            <div className="mini-cart-product">
                                <div className="mini-cart-product-img">
                                    <img src="https://www.reebok.ae/media/catalog/product/cache/2f545d46b6c4c37dc793d8a74ea52f3f/h/s/hs7899_1.jpg" alt="" />
                                </div>
                                <div className="mini-cart-product-details">
                                    <p>Performance Certified Vector Men's Jacket</p>
                                    <h3>AED 499.00</h3>
                                    <div className="mini-cart-util">
                                        <div className="mini-cart-qty">
                                            <p>Qty:</p>
                                            <input type="text" />
                                        </div>
                                        <div className="mini-cart-edit">
                                            <i>aa</i>
                                            <i>aa</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mini-cart-line"></div>

                </div>
   </>
  )
}

export default MiniCart