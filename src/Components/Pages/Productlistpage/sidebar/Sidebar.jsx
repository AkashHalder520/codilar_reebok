import React, { useEffect, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import styles from "./Sidebar.module.css"
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { ProductPriceFilter } from '../../../../Redux/Products/ProductPriceFilterSlice'
import { FaMinus, FaPlus } from 'react-icons/fa';
import Productlist from '../Productlist';
import { useParams } from 'react-router-dom';
export default function Sidebar({ toggle, toggleMenu }) {
  const dispatch = useDispatch()
  const [priceRange, setPriceRange] = useState([0, 100]); // Initial price range values
  const handleSliderChange = (values) => {
    setPriceRange(values);
  };
  const { category_type } = useParams()
  console.log("sidebar", category_type);

  const [toggel, setToggle] = useState(false)
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);
  const [toggle7, setToggle7] = useState(false);

  const handleToggel = () => {
    setToggle(!toggel)
    // console.log(toggel);
  }
  const handleToggel2 = () => {
    setToggle2(!toggle2)
    // console.log(toggel);
  }
  const handleToggel3 = () => {
    setToggle3(!toggle3)
    // console.log(toggel);
  }
  const handleToggel4 = () => {
    setToggle4(!toggle4)
    // console.log(toggel);
  }
  const handleToggel5 = () => {
    setToggle5(!toggle5)
    // console.log(toggel);
  }
  const handleToggel6 = () => {
    setToggle6(!toggle6)
    // console.log(toggel);
  }
  const handleToggel7 = () => {
    setToggle7(!toggle7)
    // console.log(toggel);
  }

  const renderDescription = () => {
    return (
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
      dispatch(ProductPriceFilter({ priceRange, category_type }));
    }, 1000);

    // Clear the timeout if the component unmounts or if priceRange changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [priceRange, category_type]);


  // console.log("asdfasdf",priceRange)
  return (
    <>
      <div className={toggle ? styles.sidenavopen : styles.sidenav}>
        <div className={styles.title}>
          <h3>Filter & Sort</h3>

          <button className={styles.closebtn} onClick={toggleMenu}>
            <IoIosCloseCircleOutline size={30} />
          </button>
        </div>
        <div className={styles.line}></div>
        {/* <div className={styles.SortBy}>
            <div className={styles['SortBy-title']}>
              <div>Sort By</div>
              <button onClick={handleToggel}>{toggel ? <FaMinus size={20} /> : <FaPlus size={20} />}</button>
            </div>
        </div> */}
        <div id={styles.priceslider}>
          <div className={styles['desc-title']}>
            <div>Price Range</div>
            <button onClick={handleToggel}>{toggel ? <FaMinus size={20} /> : <FaPlus size={20} />}</button>
          </div>
          <div className={toggel ? styles['desc-main'] : styles.hidden}>{renderDescription()}</div>
        </div>

        <div className={styles.line}></div>

        <div id={styles.priceslider}>
          <div className={styles['desc-title']}>
            <div>Short By</div>
            <button onClick={handleToggel2}>{toggle2 ? <FaMinus size={20} /> : <FaPlus size={20} />}</button>
          </div>
          <div className={toggle2 ? styles['desc-main'] : styles.hidden}>
            <div className={styles.shortBy}>

              <div className={styles.shortByElements}>
                <p>New collection </p>
              </div>
              <div className={styles.shortByElements}>
                <p>Price low to high</p>
              </div>
              <div className={styles.shortByElements}>
                <p>Price high to low</p>
              </div>
              <div className={styles.shortByElementsl}>
                <p>Our Pics</p>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.line}></div>

        <div id={styles.priceslider}>
          <div className={styles['desc-title']}>
            <div>Category</div>
            <button onClick={handleToggel3}>{toggle3 ? <FaMinus size={20} /> : <FaPlus size={20} />}</button>
          </div>
          <div className={toggle3 ? styles['desc-main'] : styles.hidden}>
            <div className={styles.category}>

              <input type="text" placeholder='search' />
              <div className={styles.category_type}>
                <input type="checkbox" name="radioAccessories" id="radioAccessories" />
                <label htmlFor="radioAccessories">Accessories</label>
              </div>
              <div className={styles.category_type}>
                <input type="checkbox" name="radioAccessories" id="radioAccessories" />
                <label htmlFor="radioAccessories">Clothing</label>
              </div>
              <div className={styles.category_type}>
                <input type="checkbox" name="radioAccessories" id="radioAccessories" />
                <label htmlFor="radioAccessories">Shoes</label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>

        <div id={styles.priceslider}>
          <div className={styles['desc-title']}>
            <div>Size(us)</div>
            <button onClick={handleToggel4}>{toggle4 ? <FaMinus size={20} /> : <FaPlus size={20} />}</button>
          </div>
          <div className={toggle4 ? styles['desc-main'] : styles.hidden}>
            <div className={styles.category}>
              <div className={styles['grid-container']}>
                <div className={styles['grid-item']}>1</div>
                <div className={styles['grid-item']}>2</div>
                <div className={styles['grid-item']}>3</div>
                <div className={styles['grid-item']}>4</div>
                <div className={styles['grid-item']}>5</div>
                <div className={styles['grid-item']}>6</div>
                <div className={styles['grid-item']}>7</div>
                <div className={styles['grid-item']}>8</div>
                <div className={styles['grid-item']}>9</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.line}></div>

        
      </div>


    </>
  )
}
