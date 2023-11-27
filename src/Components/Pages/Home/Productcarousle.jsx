import React, { useEffect, useState } from 'react';


import styles from "./Productcarousle.module.css"
import { Link } from 'react-router-dom';
function Productcarousle() {

  const [productData, setproductData] = useState([])
  useEffect(() => {
    fetch('graphql', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
        query: `{
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
      }`
      })
    })
      .then(res => res.json())
      .then(res => setproductData(res?.data.products.items));


  }, [])

  console.log(productData.length)

  const productImage = [
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

  const [currentSlide, setCurrentSlide] = useState(0);

  const productsPerPage = 5;
  const totalSlides = Math.ceil(productData.length / productsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const renderProductsInSlide = () => {
    const start = currentSlide * productsPerPage;
    const end = start + productsPerPage;

    return productData.slice(start, end).map((product, index) => (
      <div key={index} className="product-item">
        <img src={productImage[index]} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="product-price">${product?.price?.regularPrice?.amount?.currency} {product?.price?.regularPrice?.amount?.value}</p>
      </div>
    ));
  };


  return (<>
    {/*<h2>NEW ARRIVALS</h2>*/}
    <div className={styles['product-slider']}>
        <div className={styles['viewall']}>
          <Link to="/productList">View all</Link>
        </div>
        <button onClick={prevSlide}>Previous</button>
        <div className={styles['slider-container']}>{renderProductsInSlide()}</div>
        <button onClick={nextSlide}>Next</button>
      </div>

    {/* <div className="product-slider">
      <div className="viewall">
        <Link to="/productList">View all</Link>
      </div>
      <button onClick={prevSlide}>Previous</button>
      <div className="slider-container">{renderProductsInSlide()}</div>
      <button onClick={nextSlide}>Next</button>
    </div> */}




{/* <Swiper

        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        autoplay={true}
        // slidesPerView={1}
        navigation
        breakpoints={{
          // when window width is >= 300px
          300: {
            width: 300,
            slidesPerView: 1,
          },
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },

          900: {
            width: 900,
            slidesPerView: 4,
          },
          1150: {
            width: 1150,
            slidesPerView: 5,
          }
        }}


      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
      >
        {productData?.length !== 0 ? (
          <>
            {productData?.map((product, index) => {
              return (<>
                <SwiperSlide>
                  <Link to={`/ProductDetailsPage/${product.url_key}`}>
                    <div className="product-card" key={index} >
                      <img
                        src={productImage[index]}
                        alt="Product"
                        className="product-image"

                      />
                      <div className="product-details" key={index}>
                        <p className="product-name">{product?.name}</p>

                        <p className="product-price">${product?.price?.regularPrice?.amount?.currency} {product?.price?.regularPrice?.amount?.value}</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </>);
            })}
          </>) : ("")}
      </Swiper> */}

  </>);
}

export default Productcarousle;