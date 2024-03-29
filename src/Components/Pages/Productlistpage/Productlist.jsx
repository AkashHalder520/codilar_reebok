import { IoIosCloseCircleOutline } from "react-icons/io";
import React, { useEffect, useState } from "react";

// import "./Productlist.css";
import styles from './Productlist.module.css';

import { useDispatch, useSelector } from "react-redux";
// import { productlist } from "../../../Redux/Products/Productlistslice";
import Sidebar from "./sidebar/Sidebar";
import { Link } from "react-router-dom";
import Loader from "../../common/Loader/Loader";

function Productlist(props) {
  // filter and sort button toggle side bar secton
  const [toggle, setToggle] = useState(false);
  const toggleMenu = (event) => {
    event.preventDefault();
    setToggle(!toggle);
    console.log("Toggle:", toggle);
  };


  const [currentPage, setCurrentPage] = useState(1);// current page initially 1



  // const dispatch = useDispatch();
  const { productsData, status, errorMessage } = useSelector((state) => state.productsfilter);
  //fetching filtered data
  // const priceFilterData = useSelector((state) => state.productsfilter);
  console.log("filterdata", productsData);
  console.log("status_plp", status);
  // console.log("product data:--",productsData);


  // useEffect(() => {
  //   dispatch(productlist());
  // }, []);



  const productsPerPage = 12;// for displayin number of products in a single page
  const indexOfLastProduct = currentPage * productsPerPage; // eg:-2*12 =24(this is the last index) for the 2nd page
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;// eg 24-12=12(this is the first index) for 2nd page 
  const currentProducts =
    productsData?.data?.products?.items && // &&  is is used if the data is comming 
    productsData.data.products.items.slice(indexOfFirstProduct, indexOfLastProduct);
  console.log(currentProducts);

  // if (status=='failed'){
  //   console.log("errorstate",errorMessage);
  //   }


  const renderProducts = () => {
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
      'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/h/s/hs9141_1.jpg',
      'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/l/il4489_1.jpg',
      'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/i/ii0798_1.jpg',
      'https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/i/ii0794_1.jpg',
    ];
    return (
      <>
        {status=='loading' ? <Loader/> 
        
        : 
        (

          currentProducts &&
          currentProducts.map((value, index) => (
            <Link className={styles.linktag} to={`/ProductDetailsPage/${value.url_key}`}>
            <div className={styles.card}>
              <div className={styles.cardimg}>

                <img src={productImage[index]} alt="Avatar" className={styles.productImage} />
                <div className={styles.price}>
                  <p>{value.price.regularPrice.amount.currency} {value.price.regularPrice.amount.value}</p>
                </div>
              </div>


              <div className={styles.container}>
                <div className={styles.miniimage}>
                  <img src="https://www.reebok.ae/media/catalog/product/cache/db19b5fd0fc44ac5bd08c7d29d518a2a/i/l/il4489_1.jpg" alt="Avatar" className={styles.miniimage} />
                </div>
                <p>1 Color</p>
                <p>{value.name}</p>
                <p className={styles.title}>Clothing</p>
              </div>
            </div>
            </Link>
          ))

        )
        }
        

      </>
    );
  };


  const pageNumbers = [];
  const totalPages = Math.ceil(productsData?.data?.products?.items?.length / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // const renderPageNumbers = pageNumbers.map((number) => (
  //   <div key={number} onClick={() => setCurrentPage(number)}>
  //     {number}
  //   </div>
  // ));

  const renderPageNumbers = (
    <select value={currentPage} onChange={(e) => setCurrentPage(Number(e.target.value))}>
      {pageNumbers.map((number) => (
        <option key={number} value={number}>
          {number}
        </option>
      ))}
    </select>
  );
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }


  return (
    <>

      <Sidebar toggle={toggle} toggleMenu={toggleMenu} />
      {/* sending the initial toggle to other sidebar component and also passing the function */}


      <div>
        <div className={styles.plp_heading}>
          <div className={styles.plp_title}>
            <h1>NEW ARRIVALS</h1>
          </div>
          <div className={styles.fliter}>
            <button onClick={toggleMenu}>Filter & sort</button>
          </div>
        </div>

        <div className={styles.plp_data}>
          {status === 'failed' ? (
            <div id="errmsg">
              <h2>{errorMessage}</h2>
            </div>
          ) : (
            renderProducts()
          )}
        </div>

        <div id={styles['page-numbers']}>
          {renderPageNumbers} of {pageNumbers.length}
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Productlist;
