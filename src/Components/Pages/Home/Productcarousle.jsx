import React, { useEffect, useState } from 'react';


// import "./Productcarousle.module.css"
import { Link } from 'react-router-dom';
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';

import styles from "./Productcarousle.module.css"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Productcarousle() {

  const [productData, setproductData] = useState([]);
  useEffect(() => {
    fetch('graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          {
            products(search: "", pageSize: 10) {
              items {
                id
                name
                sku
                url_key
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
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => setproductData(res?.data.products.items));
  }, []);

  const productImage = [
    'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/l/il4489_1.jpg',
    'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/i/ii0798_1.jpg',
    'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/i/ii0794_1.jpg',
    'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/h/t/ht3703_1.jpg',
    'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/h/s/hs9141_1.jpg',
    'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/l/il4489_1.jpg',
    'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/i/ii0798_1.jpg',
    'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/i/ii0794_1.jpg',
    'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/h/t/ht3703_1.jpg',
    'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/h/s/hs9141_1.jpg',
  ];

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const totalSlides = Math.ceil(productData.length / 1);

  // const nextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  // };

  // const renderProductsInSlide = () => {
  //   return productData.map((product, index) => (
  //     <div
  //       key={index}
  //       className={`${styles['product-item']} ${index < currentSlide * 1 || index >= (currentSlide + 1) * 1 ? styles['hidden'] : ''}`}
  //     >
  //       <img src={productImage[index]} alt={product.name} />
  //       <h3>{product.name}</h3>
  //       <p className={styles['product-price']}>
  //         ${product?.price?.regularPrice?.amount?.currency} {product?.price?.regularPrice?.amount?.value}
  //       </p>
  //     </div>
  //   ));
  // };




  return (<>
    {/*<h2>NEW ARRIVALS</h2>*/}

    {/* <div className={styles['product-slider']}>
      
      <button onClick={prevSlide}>Previous</button>
      <div className={styles['slider-container']}>{renderProductsInSlide()}</div>
      <button onClick={nextSlide}>Next</button>
    </div> */}

    {/* <div className="product-slider">
      <div className="viewall">
        <Link to="/productList">View all</Link>
      </div>
      <button onClick={prevSlide}>Previous</button>
      <div className="slider-container">{renderProductsInSlide()}</div>
      <button onClick={nextSlide}>Next</button>
    </div> */}



    <div className={styles.productSlider}>
      <div className={styles.viewall}>
        <Link to="/productList">View all</Link>
      </div>
      <div>
      <Swiper


        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        // autoplay={true}
        // slidesPerView={1}
        // navigation
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        breakpoints={{
          // when window width is >= 300px
          374: {
            width: 374,
            slidesPerView: 2,
          },
          // 450: {
          //   width: 350,
          //   slidesPerView: 3
          // },
          // 640: {
          //   width: 640,
          //   slidesPerView: 1,
          // },
          // // when window width is >= 768px
          // 768: {
          //   width: 768,
          //   slidesPerView: 2,
          // },

          900: {
            width: 900,
            slidesPerView: 4,
          },
          1920: {
            width: 1920,
            slidesPerView: 6,
          }
        }}


      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
      >
        {productData?.length !== 0 ? (
          <>
            {productData?.map((value, index) => {
              return (<>
                <SwiperSlide>
                  <Link className={styles.atag} to={`/ProductDetailsPage/${value.url_key}`}>
                    {/* <div className="product-card" key={index} >
                      <img
                        src={productImage[index]}
                        alt="Product"
                        className="product-image"

                      />
                      <div className="product-details" key={index}>
                        <p className="product-name">{product?.name}</p>

                        <p className="product-price">${product?.price?.regularPrice?.amount?.currency} {product?.price?.regularPrice?.amount?.value}</p>
                      </div>
                    </div> */}
                    <div className={styles.card}>
                      <div className={styles.cardimg}>

                        <img src={productImage[index]} alt="Avatar" className={styles.productImage} />
                        <div className={styles.price}>
                          <p>{value.price.regularPrice.amount.currency} {value.price.regularPrice.amount.value}</p>
                        </div>
                      </div>


                      <div className={styles.container}>

                        <p>{value.name}</p>
                        <p className={styles.title}>Clothing</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </>);
            })}
          </>) : (

          <div id='errmsg'>
            <h2>Failed to fetch data from api</h2>
          </div>

        )}
      </Swiper>
      </div>
      <button className="arrow-left " id={styles.arrowLeft}><FaArrowLeft size={20} /></button>
    <button className="arrow-right " id={styles.arrowRight}><FaArrowRight size={20} /></button>

    </div>
    
  </>);
}

export default Productcarousle;