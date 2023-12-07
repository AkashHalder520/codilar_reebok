import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guestcart } from '../../../../Redux/Cart/GuestCart';
import { deletefromcart } from '../../../../Redux/Cart/DeleteFromCart';
import styles from './MiniCart.module.css';  // Import the CSS module
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function MiniCart({ cartBtnToggle }) {
    const dispatch = useDispatch();

    useEffect(() => {
        let cartId = localStorage.getItem('cartId');
        dispatch(guestcart(cartId));
    }, []);

    const { status, guestCartData, errorMessage } = useSelector((state) => state.guestCartData);
    console.log("minicartjsx", guestCartData.cart);

    const handelDeleteclick = (uid) => {
        console.log("onclick uid", uid);
        let cartId = localStorage.getItem('cartId');
        dispatch(deletefromcart({ uid, cartId })).then(() => dispatch(guestcart(cartId))).catch((error) => {
            // Handle any error that occurs during the dispatch
            console.error("Error deleting product:", error);
        });
    };

    return (
        <>
            <div className={cartBtnToggle ? styles.closeMiniCart : styles.openMiniCart}>
                {guestCartData.cart?.items?.length === 0 ? (
                    <p>No data in cart</p>
                ) : (
                    <>
                        <div className={styles.miniCartParent}>
                            <div className={styles.miniCartTop}>
                                <div className={styles.miniCartTopL}>
                                    <span>{guestCartData.cart?.items?.length}</span>
                                    <p>Item in Bag</p>
                                </div>
                                <div className={styles.miniCartTopR}>
                                    <p>Cart Sub-total</p>
                                    <h2>{guestCartData.cart?.prices?.grand_total?.currency} {guestCartData.cart?.prices?.grand_total?.value}</h2>
                                </div>
                            </div>
                            <button className={styles.miniCartCheckoutBtn}>
                                <div>
                                    Proceed to Checkout
                                </div>
                            </button>


                            <div className={styles.miniCartLine}></div>

                            <div className={styles.cardProductContainer}>
                                {guestCartData?.cart?.items?.map((value, index) => (

                                    <div key={index}>
                                        <div className={styles.miniCartProduct}>
                                            <div className={styles.miniCartProductParent}>
                                                {/* <div className={styles.miniCartProduct}> */}
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
                                                                {/* <button>aa</button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                {/* </div> */}
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <div className={styles.miniCartLine}></div>
                            <div className={styles.minicartLastSec} >
                                <Link to="">View and Edit Bag</Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default MiniCart;
