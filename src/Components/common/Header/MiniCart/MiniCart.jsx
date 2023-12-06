import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guestcart } from '../../../../Redux/Cart/GuestCart'
import { deletefromcart } from '../../../../Redux/Cart/DeleteFromCart'

function MiniCart({ cartBtnToggle }) {

    const dispatch = useDispatch()
   
    useEffect(() => {
        let cartId = localStorage.getItem('cartId')
        dispatch(guestcart(cartId))
    },[])
    const { status, guestCartData, errorMessage } = useSelector((state) => state.guestCartData)
    console.log("minicartjsx", guestCartData.cart);

    
    const handelDeleteclick=(uid)=>{
        console.log("onclick uid",uid);
        let cartId = localStorage.getItem('cartId')
        dispatch(deletefromcart({uid,cartId})).then(() => dispatch(guestcart(cartId))) .catch((error) => {
            // Handle any error that occurs during the dispatch
            console.error("Error deleting product:", error);
          });

    }
    return (
        <>
            <div className={cartBtnToggle ? "closeMiniCart" : "openMiniCart"}>
                {guestCartData.cart?.items?.length === 0 ? (
                    <p>No data in cart</p>
                ) : (
                    <>
                        <div className="mini-cart-parent">
                            <div className="mini-cart-top">
                                <div className="mini-cart-top-l">
                                    <span>{guestCartData.cart?.items?.length}</span>
                                    <p>Item in Bag</p>
                                </div>
                                <div className="mini-cart-top-r">
                                    <p>Cart Sub-total</p>
                                    <h2>{guestCartData.cart?.prices?.grand_total?.currency} {guestCartData.cart?.prices?.grand_total?.value}</h2>
                                </div>
                            </div>

                            <div className="mini-cart-checkout-btn">
                                Proceed to Checkout
                            </div>

                            <div className="mini-cart-line"></div>

                            {guestCartData?.cart?.items?.map((value, index) => (
                                <div key={index}>
                                    <div className="mini-cart-product">
                                        <div className="mini-cart-product-parent">
                                            <div className="mini-cart-product">
                                                <div className="mini-cart-product-img">
                                                    <img src={value?.product?.image.url} alt="" />
                                                </div>
                                                <div className="mini-cart-product-details">
                                                    <p>{value?.product?.name}</p>
                                                    <h3>{value?.prices?.row_total?.currency} {value?.prices?.row_total?.value}</h3>
                                                    <div className="mini-cart-util">
                                                        <div className="mini-cart-qty">
                                                            <p>Qty:</p>
                                                            <input type="number" value={value?.quantity} />
                                                        </div>
                                                        <div className="mini-cart-edit">
                                                            <button onClick={()=>handelDeleteclick(value.uid)}>Delete</button>
                                                            {/* <button>aa</button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mini-cart-line"></div>
                                </div>
                            ))}


                        </div>
                    </>
                )}
            </div>
        </>


    )
}

export default MiniCart