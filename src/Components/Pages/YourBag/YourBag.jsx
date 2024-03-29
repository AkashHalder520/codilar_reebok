import styles from './YourBag.module.css'; // Import the module CSS styles
import payImg from './Mediamodifier-Design-Template.png'
import { ReactCompomponent as MySVG } from './logo.svg'
import { cartdata } from '../../../Redux/Cart/CartData';
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deletefromcart } from '../../../Redux/Cart/DeleteFromCart';
function YourBag() {
    const dispatch = useDispatch()

    useEffect(() => {
        let cartId = localStorage.getItem('cartId');
        let customerCartId = localStorage.getItem('CustomerCartId')
        let token = localStorage.getItem('customerToken')
        // for login customer cart
        if (token !== "undefined" && token !== null && token !== "") {
            dispatch(cartdata(customerCartId))
        } else {

            dispatch(cartdata(cartId))
        }

    }, []);

    const handelDeleteclick = (uid) => {
        console.log("onclick uid", uid);
        let cartId = localStorage.getItem('cartId');
        let token = localStorage.getItem('customerToken')
        let customerCartId = localStorage.getItem('CustomerCartId')
        if (token !== "undefined" && token !== null && token !== "") {
            dispatch(deletefromcart({ uid, customerCartId })).then(() => dispatch(cartdata(customerCartId))).catch((error) => {
                // Handle any error that occurs during the dispatch
                console.error("Error deleting product:", error);
            });
        } else {
            dispatch(deletefromcart({ uid, cartId })).then(() => dispatch(cartdata(cartId))).catch((error) => {
                // Handle any error that occurs during the dispatch
                console.error("Error deleting product:", error);
            });
        }


    };

    const { status, guestCartData, errorMessage } = useSelector((state) => state.cartDataSlice);
    return (
        <>
            <div className={styles.wholepage}>
                <div className={styles.leftside}>

                    <div className={styles.title}>
                        <div className={styles.mobileviewbtn}>
                            <h1>YOUR BAG</h1>
                            <button className={styles.buttonPrimary} >Checkout</button>
                        </div>
                        <p>TOTAL({guestCartData?.items?.length}ITEMS) <strong>AED 540</strong></p>

                        <div className={styles.cardProductContainer}>
                            {guestCartData?.items?.map((value, index) => (
                                <div className={styles.product}>
                                    <div className={styles.productleftside}>
                                        <img src="https://www.reebok.ae/media/catalog/product/cache/01fdd345c6f81bba265f2c333f5521c2/i/i/ii0794_1.jpg" alt="" />
                                    </div>
                                    <div className={styles.productrightside}>
                                        <div className={styles.productrightsidedetails}>
                                            <p>{value?.product?.name}</p>
                                            <p>{value?.prices?.row_total?.currency} {value?.prices?.row_total?.value}</p>
                                            <div className={styles.cartcancel}>
                                               <button onClick={() => handelDeleteclick(value.uid)}><IoIosClose /></button> 
                                                </div>
                                        </div>
                                        <div className={styles.productrightsideqty}>
                                            <select name="" id="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.productleftsidecheckout}>
                            <button className={styles.buttonPrimaryCheckout} >Checkout</button>
                            <button className={styles.buttonPrimaryupdate} >Update Shopping Bag</button>
                        </div>
                        <div className={styles.addGiftCard}>
                            <label>Apply Giftcard</label>
                            <input type="text" placeholder='Enter the gift card code' />
                        </div>
                        <div className={styles.addGiftCardStatus}>
                            <button className={styles.buttonPrimaryCheckout} >Apply</button>
                            <button className={styles.buttonPrimaryCheckoutWhite} >Check Status</button>
                        </div>
                    </div>
                </div>
                <div className={styles.rightside}>
                    <button className={styles.buttonPrimary} >Checkout</button>
                    <div className={styles.ordersummary}>
                        <h2>ORDER SUMMARY</h2>
                        <div className={styles.items}>
                            <p>{guestCartData?.items?.length} ITEMS</p>
                            <p>{guestCartData?.prices?.grand_total?.currency} {guestCartData?.prices?.grand_total?.value}</p>
                        </div>
                        <div className={styles.items}>
                            <p>SHIPPING (ESTIMATED SHIPPING RATE)</p>
                            <p>AED 0.0</p>
                        </div>
                        <div className={styles.items}>
                            <p>VAT</p>
                            <p>AED AED 23.24</p>
                        </div>
                        <div className={styles.items}>
                            <p><strong>ORDER TOTAL</strong></p>
                            <p>{guestCartData?.prices?.grand_total?.currency} {guestCartData?.prices?.grand_total?.value}</p>
                        </div>
                        <p>(INCLUSIVE OF VAT)</p>
                    </div>
                    <input className={styles.promo} type="text" placeholder='Enter Your Promo Code' />
                    <div className={styles.paymentIn}>
                        <p>or 4 interest-free payments of <strong>AED 122.00</strong>. No fees. Shariah-compliant.</p>
                        <img src={payImg} alt="" />
                    </div>
                    <button className={styles.buttonPrimaryx} >Checkout</button>
                    <div className={styles.paymentMethod}>
                        <h5>ACCEPTED PAYMENT METHODS</h5>
                        <img src="https://www.reebok.ae/media/wysiwyg/payment-method.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default YourBag