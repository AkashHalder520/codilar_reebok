import React, { useEffect, useState } from 'react'
// import styles from './ProductDetailsPage.module.css';
import "./ProductDetailsPage.css"
import { useParams } from 'react-router-dom'
import { FaMinus, FaPlus, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { pdp_page } from '../../../Redux/Products/PdpPageSlice';
import { createcart } from '../../../Redux/Cart/CreateCart';
import { addtocart } from '../../../Redux/Cart/AddtoCart';

import Toast from '../../common/Toast/Toast';
import { customercart } from '../../../Redux/Cart/CustomerCartSlice';
import { cartdata } from '../../../Redux/Cart/CartData';
// import Header from '../../common/Header/Header';
function ProductDetailsPage() {
    const [successMessage, setsuccessMessage] = useState('')
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
        // getPdpDetails();
        dispatch(pdp_page(url_key));

    }, []);

    const { pdpData, status, errorMessage } = useSelector((state) => state.pdppage);
    console.log(pdpData, 'pdpData', "status", status);
    const { url_key } = useParams();
    // console.log(url_key);
    useEffect(() => {
        // Check if there is a cartId in local storage
        const CartId = localStorage.getItem('cartId');

        if (CartId) {
            console.log('GuestCart Id present:', CartId);
        } else {
            // If no cartId in local storage, create a new cart
            dispatch(createcart());
        }
    }, []);
    // console.log("pdp lc", cartId);
    let cartId = localStorage.getItem('cartId')

    let customerToken = localStorage.getItem('customerToken')
    let customerCartId = localStorage.getItem('CustomerCartId')
    //check if online or offline with the help of token 




    const [selectedValue, setSelectedValue] = useState({
        cartid: "",
        parentSku: "",
        childSku: ""
    });




    // Event handler to update the selected value
    const handleRadioChange = (event) => {
        let cartId = localStorage.getItem('cartId')
        let customerToken = localStorage.getItem('customerToken')
        let customerCartId = localStorage.getItem('CustomerCartId')

        let value = event.target.value
        setSelectedValue({
            cartid: customerToken && customerToken !== "undefined" ? `${customerCartId}` : `${cartId}`,
            childSku: value,
            parentSku: pdpData?.data?.products?.items[0]?.sku,
        });
    };


    const cartActionToDispatch = customerToken && customerToken !== "undefined"
        ? () => dispatch(customercart())
        : () => dispatch(cartdata(cartId));

    //for Add to bag button handeling

    const handelAddToBag = (event) => {
        event.preventDefault()
        setShowToast(false)
        let cartId = localStorage.getItem('cartId')

        // setSelectedValue({...selectedValue,cartid:cartId})
        dispatch(addtocart(selectedValue)).then(() => {
            cartActionToDispatch()
            setsuccessMessage("Cart updated successfully.")
            setShowToast(true);
        }).catch((error) => {
            // Handle any error that occurs during the dispatch
            console.error("Error deleting product:", error);
        });
    }

    console.log("radiobutton value", selectedValue);
    const [toggel, setToggle] = useState(false)
    const handleToggel = () => {
        setToggle(!toggel)
        console.log(toggel);
    }
    // console.log(pdpData?.data?.products?.items[0]?.name,"heasdf")
    const renderDescription = () => {
        return (
            <>
                <div className="descLeft">
                    <h1>{pdpData?.data?.products?.items[0]?.name}</h1>
                    <p>Once you zip up in this reebok hoodie, you won't want to take it off. It's made from soft dreamblend cotton with built-in stretch. Sweat-wicking speedwick helps keep you cool and dry.</p>
                </div>
                <div className="descRight">
                    <img src="https://www.reebok.ae/media/catalog/product//i/l/il4489_1.jpg" alt="" />
                </div>
            </>
        )
    }
    return (
        <>{status == "rejected" ?
            <div id='errmsg'>
                <h2>{errorMessage}</h2>
            </div>


            :

            <div className='pdp_page'>
                <div className='pdp-main'>
                    <div className='pdp-img'>
                        <div className='pdp-main-img'><img src="https://www.reebok.ae/media/catalog/product/cache/f423feec822ad758c14af550c7d22b56/i/l/il4489_1.jpg" alt="" /></div>
                        <div className='pdp-sub-img'>
                            <div><img src="https://www.reebok.ae/media/catalog/product/cache/f423feec822ad758c14af550c7d22b56/i/l/il4489_1.jpg" alt="" /></div>
                            <div><img src="https://www.reebok.ae/media/catalog/product/cache/f423feec822ad758c14af550c7d22b56/i/l/il4489_2.jpg" alt="" /></div>
                        </div>
                    </div>
                    <div className='pdp-details'>
                        <div className="top">
                            <div className="catagory">Trainng</div>
                            <div className="star"></div>
                        </div>
                        <div className="main">
                            <h1 className='title'>{pdpData?.data?.products?.items[0]?.name}</h1>
                            <p className='price'>{pdpData?.data?.products?.items[0]?.price?.regularPrice?.amount.currency} {pdpData?.data?.products?.items[0]?.price?.regularPrice?.amount.value}</p>
                            <p className="color">CLASSIC MAROON F23</p>
                        </div>
                        <div className="size-details">
                            <div className="size">
                                <div>Size (US)</div>
                                <div>Size Chart</div>
                            </div>
                            <div className="size-chart">
                                {/* {pdpData?.data?.products?.items[0]?.variants?.map((value, index) => (
                                    <select key={index} onChange={handleSelectChange}>
                                        <option value={value?.product?.sku}>{value?.product?.name}</option>
                                    </select>
                                ))} */}
                                {pdpData?.data?.products?.items[0]?.variants?.map((value, index) => (
                                    // <div className="radio-container"  key={index}>
                                    //     <input
                                    //         type="radio"
                                    //         name="size"
                                    //         // id='radio1'

                                    //         className="radio-input"
                                    //         value={value?.product?.sku}
                                    //         onChange={handleRadioChange}
                                    //     />
                                    //     <label for="radio1" class="radio-label">{value?.product?.name}</label>

                                    // </div>
                                    <label className="radio-container" key={index}>
                                        <input
                                            type="radio"
                                            name="size"
                                            className="radio-input"
                                            value={value?.product?.sku}
                                            onChange={handleRadioChange}
                                        />
                                        <div className="label-content">
                                            {value?.product?.name}
                                        </div>
                                    </label>
                                ))}

                                {/* <div>S</div>
                                <div>M</div>
                                <div>L</div>
                                <div>XL</div>
                                <div>2XL</div> */}
                            </div>
                        </div>

                        <div className="add">
                            <button className="addtocartBtn" onClick={handelAddToBag}><div className='adtobag'>Add To Bag</div></button>
                            <div className='hearticon'><FaRegHeart size={40} /></div>
                        </div>
                    </div>
                </div>

                <div className="desc">

                    <div className="desc-title">
                        <div >Description</div>
                        <button onClick={handleToggel}>{toggel ? <FaMinus size={20} /> : <FaPlus size={20} />}</button>
                    </div>

                    <div className={toggel ? 'desc-main' : 'hidden'}>
                        {renderDescription()}
                    </div>

                    <div className="line"></div>
                    <div className="desc-title">
                        <div>Reviews</div>
                        <button></button>
                    </div>
                </div>

            </div>}
            {showToast && <Toast message={successMessage} />}

        </>
    )
}

export default ProductDetailsPage