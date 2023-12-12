import styles from './YourBag.module.css'; // Import the module CSS styles
import payImg from './Mediamodifier-Design-Template.png'
import { ReactCompomponent as MySVG } from './logo.svg'
function YourBag() {
    return (
        <>
            <div className={styles.wholepage}>
                <div className={styles.leftside}>
                    <div className={styles.title}>
                        <h1>YOUR BAG</h1>
                        <p>TOTAL(2ITEMS) <strong>AED 540</strong></p>
                        <div className={styles.product}>
                            <div className={styles.productleftside}>
                                <img src="https://www.reebok.ae/media/catalog/product/cache/01fdd345c6f81bba265f2c333f5521c2/i/i/ii0794_1.jpg" alt="" />
                            </div>
                            <div className={styles.productrightside}>
                                <div className={styles.productrightsidedetails}>
                                    <p>No Matter The Distance Short Sleeve Men's T-Shirt</p>
                                    <p>AED 139.00</p>
                                    <div className={styles.cartcancel}>x</div>
                                </div>
                                <div className={styles.productrightsideqty}>
                                    <select name="" id="">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productleftsidecheckout}>
                            <button className={styles.buttonPrimaryCheckout} >Checkout</button>
                            <button className={styles.buttonPrimaryCheckout} >Update Shopping Bag</button>
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
                            <p>2 ITEMS</p>
                            <p>AED 464.76</p>
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
                            <p>AED 488.00</p>
                        </div>
                        <p>(INCLUSIVE OF VAT)</p>
                    </div>
                    <input className={styles.promo} type="text" placeholder='Enter Your Promo Code' />
                    <div className={styles.paymentIn}>
                        <p>or 4 interest-free payments of <strong>AED 122.00</strong>. No fees. Shariah-compliant.</p>
                        <img src={payImg} alt="" />
                    </div>
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