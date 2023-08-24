import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import Background from '../component/Background';
import Trust from '../component/Trust';
import Fooditems from '../component/Fooditems';  
import Alter from "../component/Alert"
import { useNavigate } from 'react-router-dom';
export default function Home(props) {  
  const Navigate=useNavigate()
  const [login, setLogin] = useState(false);
   
  useEffect(() => {
    const auth = localStorage.getItem('authToken');
console.log(auth)
    if (auth === null) {
      setLogin(false); // Set login to false when authToken is not present
      console.log(login); // This will still show the previous value of login (useState is asynchronous)
    } else {
      setLogin(true);  
      console.log(auth); 
      // This will show the previous value of login (useState is asynchronous)
    }   
    console.log("This is orderrrrrrrrrr "+ props.order)  
  }, [login]); // Empty dependency array means this effect runs only once on mount
    
  useEffect(()=>{ 
    if(props.order){ 
Navigate("/")
    }
  })
  
  return (   
    <>  

    {
      props.order ===true && ( 
        <Alter message="Order Confirmed, Enjoy your order"/>
      )
    }
      <Navbar login={login}/>
      <Background />
      <Trust />
      <Fooditems />  
      
    </>
  );
}
