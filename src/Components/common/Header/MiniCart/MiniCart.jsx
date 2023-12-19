import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartdata } from '../../../../Redux/Cart/CartData';
import { deletefromcart } from '../../../../Redux/Cart/DeleteFromCart';
import styles from './MiniCart.module.css';  // Import the CSS module
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { check_token } from '../../../../Redux/GenerateLoginToken/GrenerateLoginTokenSlice';

function MiniCart({ cartBtnToggle }) {
    const dispatch = useDispatch();

    useEffect(() => {
        let cartId = localStorage.getItem('cartId');
        let customerCartId=localStorage.getItem('CustomerCartId')
        let token = localStorage.getItem('customerToken')
        // for login customer cart
        if (token !== "undefined" && token !== null && token !== "") {
            dispatch(cartdata(customerCartId)).then(() => dispatch(check_token()));
        } else {
            
            dispatch(cartdata(cartId)).then(()=>dispatch(check_token()))
        }

    },[cartBtnToggle]);

    const { status, guestCartData, errorMessage } = useSelector((state) => state.cartDataSlice);
    const { CustomerCartData } = useSelector((state) => state.customercart)
    const { isLogin } = useSelector((state) => state.generatelogintoken)
    // console.log("minicartjsx", guestCartData.items?.length);

    const handelDeleteclick = (uid) => {
        console.log("onclick uid", uid);
        let cartId = localStorage.getItem('cartId');
        let token = localStorage.getItem('customerToken')
        let customerCartId=localStorage.getItem('CustomerCartId')
        if (token !== "undefined" && token !== null && token !== "") {
            dispatch(deletefromcart({ uid, customerCartId })).then(() => dispatch(cartdata(customerCartId))).catch((error) => {
                // Handle any error that occurs during the dispatch
                console.error("Error deleting product:", error);
            });
        }else{
        dispatch(deletefromcart({ uid, cartId })).then(() => dispatch(cartdata(cartId))).catch((error) => {
            // Handle any error that occurs during the dispatch
            console.error("Error deleting product:", error);
        });
    }
    };
    const MiniCartContentGuest = () => {
        return (
            <div className={cartBtnToggle ? styles.closeMiniCart : styles.openMiniCart}>
                {guestCartData?.items?.length == 0 || guestCartData == null ? (
                    <p>No data in cart</p>
                ) : (
                    <>
                        <div className={styles.miniCartParent}>
                            <div className={styles.miniCartTop}>
                                <div className={styles.miniCartTopL}>
                                    <span>{guestCartData?.items?.length}</span>
                                    <p>Item in Bag</p>
                                </div>
                                <div className={styles.miniCartTopR}>
                                    <p>Cart Sub-total</p>
                                    <h2>{guestCartData?.prices?.grand_total?.currency} {guestCartData?.prices?.grand_total?.value}</h2>
                                </div>
                            </div>
                            <button className={styles.miniCartCheckoutBtn}>
                                <div>
                                    Proceed to Checkout
                                </div>
                            </button>

                            <div className={styles.miniCartLine}></div>

                            <div className={styles.cartProductContainer}>
                                {guestCartData?.items?.map((value, index) => (
                                    <div key={index}>
                                        <div className={styles.miniCartProduct}>
                                            <div className={styles.miniCartProductParent}>
                                                <div className={styles.miniCartProductImg}>
                                                    <img src={value?.product?.image.url} alt="" />
                                                </div>
                                                <div className={styles.miniCartProductDetails}>
                                                    <p>{value?.product?.name}</p>
                                                    <h3>{value?.prices?.row_total?.currency} {value?.prices?.row_total?.value}</h3>
                                                    <div className={styles.miniCartUtil}>
                                                        <div className={styles.miniCartQty}>
                                                            <p>Qty:</p>
                                                            <input type="number" value={value?.quantity} />
                                                        </div>
                                                        <div className={styles.miniCartEdit}>
                                                            <button onClick={() => handelDeleteclick(value.uid)}><MdDelete size={20} /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.miniCartLine}></div>
                            <div className={styles.minicartLastSec}>
                                <Link to="/YourBag">View and Edit Bag</Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }
    const MiniCartContentCustomer = () => {
        return (
            <div className={cartBtnToggle ? styles.closeMiniCart : styles.openMiniCart}>
                {CustomerCartData?.items?.length == 0 ?(
                    <p>No data in cart</p>
                ) : (
                    <>
                        <div className={styles.miniCartParent}>
                            <div className={styles.miniCartTop}>
                                <div className={styles.miniCartTopL}>
                                    <span>{CustomerCartData?.items?.length}</span>
                                    <p>Item in Bag</p>
                                </div>
                                <div className={styles.miniCartTopR}>
                                    <p>Cart Sub-total</p>
                                    <h2>{CustomerCartData?.prices?.grand_total?.currency} {CustomerCartData?.prices?.grand_total?.value}</h2>
                                </div>
                            </div>
                            <button className={styles.miniCartCheckoutBtn}>
                                <div>
                                    Proceed to Checkout
                                </div>
                            </button>

                            <div className={styles.miniCartLine}></div>

                            <div className={styles.cardProductContainer}>
                                {CustomerCartData?.items?.map((value, index) => (
                                    <div key={index}>
                                        <div className={styles.miniCartProduct}>
                                            <div className={styles.miniCartProductParent}>
                                                <div className={styles.miniCartProductImg}>
                                                    <img src={value?.product?.image.url} alt="" />
                                                </div>
                                                <div className={styles.miniCartProductDetails}>
                                                    <p>{value?.product?.name}</p>
                                                    <h3>{value?.prices?.row_total?.currency} {value?.prices?.row_total?.value}</h3>
                                                    <div className={styles.miniCartUtil}>
                                                        <div className={styles.miniCartQty}>
                                                            <p>Qty:</p>
                                                            <input type="number" value={value?.quantity} />
                                                        </div>
                                                        <div className={styles.miniCartEdit}>
                                                            <button onClick={() => handelDeleteclick(value.uid)}><MdDelete size={20} /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.miniCartLine}></div>
                            <div className={styles.minicartLastSec}>
                                <Link to="">View and Edit Bag</Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }
    return (
        <>
            { MiniCartContentGuest()}
            {/* if the customer token present then   */}
        </>
    );
}

export default MiniCart;
