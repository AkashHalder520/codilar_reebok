import React, { useEffect, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import styles from "./Sidebar.module.css"
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import { useDispatch } from 'react-redux';
import { setPriceRangeRedux } from '../../../Redux/Products/ProductPriceFilterSlice'
import { FaMinus, FaPlus } from 'react-icons/fa';
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
            max={100}
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
  useEffect(() => {
    dispatch(setPriceRangeRedux(priceRange))
  }, [priceRange])


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
