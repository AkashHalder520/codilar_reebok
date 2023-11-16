import React, {useEffect, useState} from 'react';
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";

import {Swiper, SwiperSlide} from "swiper/react";
import "./productcarousle.css"
function Productcarousle(props) {
    const [productData, setproductData] = useState([])
    useEffect(() => {
        fetch('graphql', {
            method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
                query: `{
        products(search: "", pageSize: 10) {
          items {
            id
            name
            sku
            price {
              regularPrice {
                amount {
                  value
                  currency
                }
              }
            }
            image {
              url
            }
          }
        }
      }`
            })
        })
            .then(res => res.json())
            .then(res => setproductData(res?.data.products.items));


    }, [])

    console.log(productData.length)

    const productImage=[
        "https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/l/il4489_1.jpg",
        "https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/i/ii0798_1.jpg",
        "https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/i/ii0794_1.jpg",
        "https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/h/t/ht3703_1.jpg",
        "https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/h/s/hs9141_1.jpg",
        "https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/l/il4489_1.jpg",
        "https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/i/ii0798_1.jpg",
        "https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/i/ii0794_1.jpg",
        "https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/h/t/ht3703_1.jpg",
        "https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/h/s/hs9141_1.jpg",

    ]



    return (<>
        {/*<h2>NEW ARRIVALS</h2>*/}
        <div className="product-slider">
            <h2>NEW ARRIVALS</h2>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination,  A11y]}
                spaceBetween={0}
                slidesPerView={5}
                navigation


                //   onSwiper={(swiper) => console.log(swiper)}
                //   onSlideChange={() => console.log("slide change")}
            >
                {productData?.length !== 0 ? (<>
                    {productData?.map((product, index) => {
                        return (<>
                            <SwiperSlide>
                                <div className="product-card" key={index} style={{margin: "0px 50px"}}>
                                    <img
                                        src={productImage[index]}
                                        alt="Product"
                                        className="product-image"
                                    />
                                    <div className="product-details">
                                        <p className="product-name">{product?.name}</p>

                                        <p className="product-price">${product?.price?.regularPrice?.amount?.currency} {product?.price?.regularPrice?.amount?.value}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>);
                    })}
                </>) : ("")}
            </Swiper>
        </div>
    </>);
}

export default Productcarousle;