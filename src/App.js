import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/common/Header/Header";
import Footer from "./Components/common/Footer/Footer";
import { useEffect, useState } from 'react';
import Toast from './Components/common/Toast/Toast';
import AppRoutes from './Routes';
import { check_token } from './Redux/GenerateLoginToken/GrenerateLoginTokenSlice';
import { useDispatch } from 'react-redux';

function App() {
  const [status, setStatus] = useState(!navigator.onLine);
  const [msg, setMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const dispatch=useDispatch()
  useEffect(() => {

    if (navigator.onLine) // After first time renders...
    {
      setStatus(false);
      setMsg('You are Online and Connected with Internet');
    }
    const onlineHandler = () => {
      setStatus(false);
      setMsg('You are Online and Connected with Internet');
      // toast.success('You are Online and Connected With Internet', {
      //   theme: 'colored',
      //   autoClose: 5000,
      // });
      setShowToast(true);
    };

    const offlineHandler = () => {
      setStatus(true);
      setMsg('You are Offline and Please Check Your Internet');
      // toast.error('You are Offline and Please Check Your Internet', {
      //   theme: 'colored',
      //   autoClose: 5000,
      // });
      // <Toast message="Permanent Toast for 5 seconds" />
      setShowToast(false)
    };

    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);

    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);

  //for checking online or offline
  useEffect(() => {
    dispatch(check_token())
   }, [])

  return (
    <>


      <Router>
        <Header />
        <AppRoutes status={status} />
        <Footer />
      </Router>

      {showToast && <Toast message={msg} />}
    </>
  );
}

export default App;
