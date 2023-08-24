import React, { useEffect, useState } from 'react';
import loader from '../component/Orderloader.gif';
import { useNavigate } from 'react-router-dom';
import tick from '../component/OrderTick.gif';

export default function OrderConfirmed() {
  const navigate = useNavigate();
  const [showHome, setShowHome] = useState(false);  
  const [Goback,setGoback]=useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowHome(true);
    }, 4500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setGoback(true);
    }, 8000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
 

  if(Goback) { 
    navigate("/")
  }

  return (
    <>
      {!showHome && (
        <div className="orderConfirm">
          <img src={loader} alt="loading" className="Loader" />
          <p>Order is being Cooked.......</p>
        </div>
      )}

      {showHome && (
        <div className="orderConfirm">
          <img src={tick} alt="loading" className="Loader" />
          <p>Order is Cooked, It will be Delivered Soon</p>
        </div>
      )}
    </>
  );
}
