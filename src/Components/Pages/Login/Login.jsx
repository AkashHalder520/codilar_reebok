import React, { useState } from 'react'
import styles from "./Login.module.css"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { generatelogintoken } from '../../../Redux/GenerateLoginToken/GrenerateLoginTokenSlice'


function Login() {
    const [user, setUser] = useState({

        email: "",
        password: "",


    })
    const [error, setError] = useState({})
    const dispatch = useDispatch()
    const handelChange = (event) => {
        let name = event.target.name;
        let value = event.target.value
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "enter the valid email" });
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

    const sendData = (e) => {
        e.preventDefault();

        // Check if there are no errors
        if (

            !error.email &&
            !error.password

        ) {

            const userData = {
                email: user.email,
                password: user.password,
            };
            // Dispatch the data using your dispatch function
            console.log(userData);
            dispatch(generatelogintoken(userData));
        } else {
            // If there are errors, you might want to handle them (e.g., show an error message)
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
        </>
    )
}

export default Login