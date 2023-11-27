import React, { useEffect, useState } from 'react'
import "./ProductDetailsPage.css"
import { useParams } from 'react-router-dom'
import { FaMinus, FaPlus, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { pdp_page } from '../../../Redux/Products/PdpPageSlice';
// import Header from '../../common/Header/Header';
function ProductDetailsPage() {

    const dispatch = useDispatch()
    useEffect(() => {
        // getPdpDetails();
        dispatch(pdp_page(url_key));
    }, []);
    const { pdpData, status } = useSelector((state) => state.pdppage);
    console.log(pdpData, 'pdpData', "status", status);
    const { url_key } = useParams();

    console.log(url_key);

    const [toggel, setToggle] = useState(false)
    const handleToggel = () => {
        setToggle(!toggel)
        console.log(toggel);
    }
// console.log(pdpData?.data?.products?.items[0]?.name,"heasdf")
    const renderDescription = () => {
        return (
            <>
                <div className="desc-l">
                    <h1>{pdpData?.data?.products?.items[0]?.name}</h1>
                    <p>Once you zip up in this reebok hoodie, you won't want to take it off. It's made from soft dreamblend cotton with built-in stretch. Sweat-wicking speedwick helps keep you cool and dry.</p>
                </div>
                <div className="desc-r">
                    <img src="https://www.reebok.ae/media/catalog/product//i/l/il4489_1.jpg" alt="" />
                </div>
            </>
        )
    }
    return (
        <>
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
                                <div>S</div>
                                <div>M</div>
                                <div>L</div>
                                <div>XL</div>
                                <div>2XL</div>
                            </div>
                        </div>

                        <div className="add">
                            <div className='adtobag'>Add To Bag</div>
                            <div className='hearticon'><FaRegHeart size={40} /></div>
                        </div>
                    </div>
                </div>

                <div className="desc">
                    
                    <div className="desc-title">
                        <div >Description</div>
                        <button onClick={handleToggel}>{toggel?<FaMinus size={20} />:<FaPlus size={20}/>}</button>
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

            </div>
        </>
    )
}

export default ProductDetailsPage