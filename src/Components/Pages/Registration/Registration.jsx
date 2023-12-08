import React from 'react'
import { TiTick } from "react-icons/ti";
import styles from "./Registration.module.css"
function Registration() {
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
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
                <input type="date" name="" id=""  />
                <p>We collect date of birth to comply with our Reebok privacy policy. Plus you will get a surprise from us on your birthday!</p>
              </div>
              <div className={styles.formSection2}>
                <h3>LOGIN DETAILS</h3>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Password'/>
                <input type="text" placeholder='Confirm Password'/>
                <input type="checkbox" name="checkbox1" id="" />
                <label htmlFor="checkbox1">By clicking Sign Up, you confirm that you have read and acknowledged the Privacy Notice. You provide your contact information so we can inform you about Reebok products and services which are tailored for you. You can stop us from communicating with you at any time (see below for instructions). HOW? </label>
                <input type="checkbox" name="checkbox2" id="" />
                <label htmlFor="checkbox2"> I have read and accepted Terms & conditions and the Reebok privacy policy </label>
              </div>
    
              <button>join for free</button>
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
        </>
      );
}

export default Registration