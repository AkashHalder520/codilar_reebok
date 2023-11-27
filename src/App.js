
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/common/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/common/Footer/Footer";
import Productlist from "./Components/Pages/Productlistpage/Productlist";
import ProductDetailsPage from './Components/Pages/ProductDetailsPage/ProductDetailsPage';
import { useEffect,useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OfflinePage from './Components/common/Offline';
function App() {
  const [status, setStatus] = useState(!navigator.onLine);
  const [msg, setMsg] = useState('');

  useEffect(() => {

    if(navigator.onLine) // After first time renders...
    {
      setStatus(false);
      setMsg('You are Online and Connected with Internet');
    }
    const onlineHandler = () => {
      setStatus(false);
      setMsg('You are Online and Connected with Internet');
      toast.success('You are Online and Connected With Internet', {
        theme: 'colored',
        autoClose: 5000,
      });
    };

    const offlineHandler = () => {
      setStatus(true);
      setMsg('You are Offline and Please Check Your Internet');
      toast.error('You are Offline and Please Check Your Internet', {
        theme: 'colored',
        autoClose: 5000,
      });
    };

    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);

    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);

  return (
<>
<ToastContainer/>
  <Router>
    <Header/>
    <Routes>
    
      <Route exact path="/" element={status?<OfflinePage/>:<Home/>}/>
      <Route path="/productList" element={<Productlist/>} />
      <Route path="/ProductDetailsPage/:url_key" element={<ProductDetailsPage/>} />
      {/*<Route path="*" element={<NotFound/>}/>*/}
    </Routes>
    <Footer/>
  </Router>

</>
  );
}

export default App;
