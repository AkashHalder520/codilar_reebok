import React, { useEffect, useState } from 'react'
import styles from "./Login.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { check_token, generatelogintoken } from '../../../Redux/GenerateLoginToken/GrenerateLoginTokenSlice'
// import { customerdetails } from '../../../Redux/CustomerDetails/CustomerDetailsLoggedinSlice'
import Toast from '../../common/Toast/Toast'
import { resetRedirect } from '../../../Redux/Registration/RegistrationSlice'
import { customercart } from '../../../Redux/Cart/CustomerCartSlice'


function Login() {
    // const [msg, setMsg] = useState('');
    const [showToast, setShowToast] = useState(false);
    const { isLogin,errorMessage } = useSelector((state) => state.generatelogintoken)

    console.log("loginpageislogin", isLogin);
    const navigate = useNavigate()
    const [user, setUser] = useState({

        email: "",
        password: "",


    })
    const [error, setError] = useState({})
    const dispatch = useDispatch()
//reset the redirect from register to login
dispatch(resetRedirect())


    const handelChange = (event) => {
        let name = event.target.name;
        let value = event.target.value
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
    }

const redirectUser=()=>{
    console.log("s",isLogin);
    let token = localStorage.getItem("customerToken");
    if (token !== "undefined" && token !== null && token !== "") {
        dispatch(customercart())
        navigate('/');
      }
}
    const sendData = async(e) => {
       
        e.preventDefault();
        
        setShowToast(false)
        // Check if there are no errors
        if (!error.email && !error.password) {
          const userData = {
            email: user.email,
            password: user.password,
          };
    
          try {
            // Dispatch the data using your dispatch function
            console.log(userData);
            console.log("isLogin before dispatch:", isLogin);
            setShowToast(false)
             dispatch(generatelogintoken(userData)).then(()=>{
              
                // dispatch(check_token());  
                  setShowToast(true);
                  redirectUser()
                  
             });
             console.log("isLogin after dispatch:", isLogin);
            //  redirectUser();
            // Redirect logic here (success)
            // 
        
          } catch (error) {
            console.log("Login failed. Handle the error appropriately.");
            // Handle login failure, show error message if needed
          }
        } else {
          console.log("Form has errors. Please fix them.");
        }
      };
    return (
        <>
            <div className={styles.wholePage}>

                <div className={styles.leftPart}>

                    <div className={styles.formSection2}>
                        <h1>LOG IN</h1>
                        <input type="text" placeholder='Email' name='email' onChange={handelChange} />
                        <span style={{ color: "red" }}>{error.email}</span>
                        <input type="text" placeholder='Password' name='password' onChange={handelChange} />
                        <span style={{ color: "red" }}>{error.password}</span>
                        <div className={styles.checkboxLabel}>
                            <input type="checkbox" name="checkbox1" id="checkbox1" />
                            <label htmlFor="checkbox1">
                                Keep me logged in
                            </label>
                        </div>



                    </div>

                    <button className={styles.buttonPrimary} onClick={sendData}>Log in</button>
                    <div className={styles.or}>
                        or
                    </div>
                    <div className={styles.socialAccount}>
                        <div className={styles.facebook}>
                            <button>Sign in with Facebook</button>
                        </div>
                        <div className={styles.google}>
                            <button>Sign in with Google</button>
                        </div>
                    </div>

                </div>

                <div className={styles.rightPart}>
                    <h1>CREATE AN ACCOUNT</h1>
                    <p>A single global login to enjoy our services:</p>
                    <div className={styles.createAccountSec2}>
                        <p>Faster checkout with your saved address and payment details</p>
                        <p>Access your complete order history</p>
                        <p>Create and save your wishlist to help you keep track of your most-wanted items</p>
                    </div>
                    <Link to="/Registration">
                        <button className={styles.buttonPrimary}>Register</button>
                    </Link>
                </div>

            </div>
            {console.log("toast",showToast)}
            {/* {console.log("toastmsg",)} */}
            {showToast? <Toast message={errorMessage} />:""}
        </>
    )
}

export default Login