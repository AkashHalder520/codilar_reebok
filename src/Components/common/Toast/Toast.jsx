import React, { useEffect, useState } from 'react'
import styles from './Toast.module.css'
import ReactDOM from 'react-dom';
const Toast = ({ message }) => {
  
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 5000);
  
      return () => clearTimeout(timeout);
    }, []);
  console.log("toastmessage",message);

    return ReactDOM.createPortal(
        <div className={`${styles.toastdiv} ${visible ? styles.visible : styles.hidden}`}>
          <div className={`${styles.toast} ${!visible && styles.hidden}`}>
            <p>{message}</p>
          </div>
        </div>,
        document.getElementById('toast-root') // Create a div with this ID outside your main root
      );
  };
  
  
  export default Toast;