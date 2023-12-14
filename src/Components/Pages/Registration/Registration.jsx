import React, { useEffect, useState } from 'react'
import { TiTick } from "react-icons/ti";
import styles from "./Registration.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { createnewcustomer } from '../../../Redux/Registration/RegistrationSlice';
import Toast from '../../common/Toast/Toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../../common/Loader/Loader';

function Registration() {
  const [showToast, setShowToast] = useState(false);
  const { status,errorMessage,redirectToLogin } = useSelector((state) => state.registerNewCustomer)
  console.log("reg",status);
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: ""

  })
  const [error, setError] = useState({})
  const handlechange = (event) => {
    let name = event.target.name;
    let value = event.target.value

    
    if (name === "first_name") {
      if (value.length === 0) {
        setError({ ...error, first_name: "@first name required" });
        setUser({ ...user, first_name: "" });
      } else {
        setError({ ...error, first_name: "" });
        setUser({ ...user, first_name: value });
      }
    }
    if (name === "last_name") {
      if (value.length === 0) {
        setError({ ...error, last_name: "@first name required" });
        setUser({ ...user, last_name: "" });
      } else {
        setError({ ...error, last_name: "" });
        setUser({ ...user, last_name: value });
      }
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (name === "email") {
        if (value.length === 0) {
            setError({ ...error, email: "enter email" });
            setUser({ ...user, email: "" });
        } else if (!emailRegex.test(value)) {
            setError({ ...error, email: "invalidemail" });
            setUser({ ...user, email: value });
        } else {
            setError({ ...error, email: "" });
            setUser({ ...user, email: value });
        }
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "passwordrequired" });
        setUser({ ...user, password: "" });
      } else if (!passwordRegex.test(value)) {
        setError({ ...error, password: "invalidpassword" });
        setUser({ ...user, password: value });
      } else {
        setError({ ...error, password: "" });
        setUser({ ...user, password: value });
      }
    }
    if (name === "confirm_password") {
      if (value.length === 0) {
        setError({ ...error, confirm_password: "passwordrequired" });
        setUser({ ...user, confirm_password: "" });
      } else if (value !== user.password) {
        setError({ ...error, confirm_password: "Passwords do not match" });
        setUser({ ...user, confirm_password: value });
      }
      else {
        setError({ ...error, confirm_password: "" });
        setUser({ ...user, confirm_password: value });
      }
    }
  }
  const redirect=()=>{
     console.log("ridirecttoLogin",redirectToLogin);
     navigate(`${redirectToLogin}`)
  }

useEffect(()=>{
  redirect()
},[redirectToLogin])

  const sendData = async (e) => {
    e.preventDefault();
    setShowToast(false);
  
    // Check if there are no errors
    if (
      !error.first_name &&
      !error.last_name &&
      !error.email &&
      !error.password &&
      !error.confirm_password
    ) {
      const userData = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
      };
  
      try {
        // Dispatch the data using your dispatch function
        console.log(userData);
        await dispatch(createnewcustomer(userData));
        // Handle success, show a success message, or navigate somewhere
        setShowToast(true);
      } catch (error) {
        // Handle the error appropriately
        console.log("Error creating a new customer:", error);
        // You might want to show an error message to the user
      }
    } else {
      // If there are errors, you might want to handle them (e.g., show an error message)
      console.log("Form has errors. Please fix them.");
    }
  };
  

  return (
    <>
      <div className={styles.wholePage}>

        <div className={styles.leftPart}>
          <h1>REGISTER</h1>
          <div className={styles.socialAccount}>
            <div className={styles.facebook}>
              <button>Sign in with Facebook</button>
            </div>
            <div className={styles.google}>
              <button>Sign in with Google</button>
            </div>
          </div>
          <div>
            or
          </div>
          <div className={styles.formSection}>
            <h3>YOUR NAME</h3>
            <input type="text" placeholder='First Name' name='first_name' onChange={handlechange} />
            <span style={{ color: "red" }}>{error.first_name}</span>
            <input type="text" placeholder='Last Name' name='last_name' onChange={handlechange} />
            <span style={{ color: "red" }}>{error.last_name}</span>
            <input type="date" name="" id="" />
            <p>We collect date of birth to comply with our Reebok privacy policy. Plus you will get a surprise from us on your birthday!</p>
          </div>
          <div className={styles.formSection2}>
            <h3>LOGIN DETAILS</h3>
            <input type="text" placeholder='Email' name='email' onChange={handlechange} />
            <span style={{ color: "red" }}>{error.email}</span>
            <input type="text" placeholder='Password' name='password' onChange={handlechange} />
            <span style={{ color: "red" }}>{error.password}</span>
            <input type="text" placeholder='Confirm Password' name='confirm_password' onChange={handlechange} />
            <span style={{ color: "red" }}>{error.confirm_password}</span>
            <div className={styles.checkboxLabel}>
              <input type="checkbox" name="checkbox1" id="checkbox1" />
              <label htmlFor="checkbox1">
                By clicking Sign Up, you confirm that you have read and acknowledged the Privacy Notice. You provide your contact information so we can inform you about Reebok products and services which are tailored for you. You can stop us from communicating with you at any time (see below for instructions). HOW?
              </label>
            </div>

            <div className={styles.checkboxLabel}>
              <input type="checkbox" name="checkbox2" id="checkbox2" />
              <label htmlFor="checkbox2"> I have read and accepted Terms & conditions and the Reebok privacy policy </label>
            </div>

          </div>
            {
            status=="loading"? <Loader/> 
            :
            <button className={styles.buttonPrimary} onClick={sendData}>Join for Free</button> 
            }
          
        </div>

        <div className={styles.rightPart}>
          <h1>CREATE AN ACCOUNT</h1>
          <p>A single global login to enjoy our services:</p>
          <div className={styles.createAccountSec2}>
            <p>Faster checkout with your saved address and payment details</p>
            <p>Access your complete order history</p>
            <p>Create and save your wishlist to help you keep track of your most-wanted items</p>
          </div>
        </div>

      </div>
      {showToast? <Toast message={errorMessage} />:""}
    </>
  );
}

export default Registration