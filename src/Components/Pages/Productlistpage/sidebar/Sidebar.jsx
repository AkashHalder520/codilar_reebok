import React, { useEffect, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import styles from "./Sidebar.module.css"
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { ProductPriceFilter } from '../../../../Redux/Products/ProductPriceFilterSlice'
import { FaMinus, FaPlus } from 'react-icons/fa';
import Productlist from '../Productlist';
export default function Sidebar({ toggle, toggleMenu }) {
  const dispatch = useDispatch()
  const [priceRange, setPriceRange] = useState([0, 100]); // Initial price range values
  const handleSliderChange = (values) => {
    setPriceRange(values);
  };

  const [toggel, setToggle] = useState(false)
  const handleToggel = () => {
    setToggle(!toggel)
    console.log(toggel);
  }
  const renderDescription=()=>{
    return(
      <>
      <div className={styles.pricesliderpadding}>
      <label>Price Range</label>
          <Slider
            range
            min={0}
            max={1000}
            value={priceRange}
            onChange={handleSliderChange}
          />

          <div>
            {/* Display selected price range */}
            Price: {priceRange[0]} - {priceRange[1]}
          </div>
      </div>
      </>
    )
  }

  //sending the current value and final value to redux slice
  // let min=priceRange[0];
  // let max=priceRange[1];
// console.log("slider price range",priceRange);
//   useEffect(() => {
//     dispatch(ProductPriceFilter(priceRange))
//   }, [priceRange])
  

  useEffect(() => {
    let timeoutId;

    // Set a timeout to dispatch the action after 1000 milliseconds (1 second)
    timeoutId = setTimeout(() => {
      dispatch(ProductPriceFilter(priceRange));
    }, 1000);

    // Clear the timeout if the component unmounts or if priceRange changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [priceRange]);


// console.log("asdfasdf",priceRange)
  return (
    <>
      <div className={toggle ? styles.sidenavopen : styles.sidenav}>
      <button className={styles.closebtn} onClick={toggleMenu}>
        <IoIosCloseCircleOutline size={30} />
      </button>

      <div id={styles.priceslider}>
        <div className={styles['desc-title']}>
          <div>Price Range</div>
          <button onClick={handleToggel}>{toggel ? <FaMinus size={20} /> : <FaPlus size={20} />}</button>
        </div>
        <div className={toggel ? styles['desc-main'] : styles.hidden}>{renderDescription()}</div>
      </div>
    </div>


    </>
  )
}
