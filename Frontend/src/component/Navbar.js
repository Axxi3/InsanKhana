import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Card from './Card';
export default function Navbar (props) {    
  const login =props.login 
  const [credentials, setcredentials] = useState("");    
  const [fooditem,setfooditem]=useState([])  

  const  getfooditem= async ()=> { 
    let getfooditem=await fetch("https://insankhana.onrender.com/getfood",{ 
    method:"GET"
  })  
 const response=await getfooditem.json()    
 console.log("This is response")
  console.log(response)  
  setfooditem(response)   
  
  }  

  useEffect(()=> {   
    getfooditem()
   },[])

  const changeValue = (event) => {
    setcredentials( event.target.value);
   
  };  
 
  // const optionsData = [
  //   {
  //     half: "170",
  //     full: "300",
  //   }
  // ];
  return (
    <div> 
    <ul className='Navlist'>
        <li className='Active' ><NavLink  exact to="/">Home</NavLink> </li>
        <li ><NavLink  exact to="/about">About</NavLink> </li>  
        { 
        login && ( 
          <li ><NavLink  exact to="/cart">My Account</NavLink> </li>
        )
        
        }
       
        <li ><NavLink  exact to="/contactus">Contact us</NavLink> </li>    
        
        { !login && (
        <li>
          <NavLink exact to="/login"><button>Get started</button></NavLink>
        </li>)}   
        <form className="d-flex" role="search" name='search'>
        <input className="form-control me-2 searcher" type="search"  onChange={changeValue}placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </ul>       
    <div className="navdiv">  
    <div className="resultshower">    

    {credentials.length !== 0 &&
    fooditem.length !== 0 &&
    fooditem[0].filter((item) => item.name.toLowerCase().includes(credentials)).map((data) => {
      console.log( "hjjjj");
      return (
        <Card
          key={data._id} // Assuming you have a unique identifier like '_id' for each item
          name={data.name}
          link={data.img}
          description={data.description}
          Array={data.options[0]}
        />
      );
    })} 
            
    </div>
    </div>
   
    </div>
  )
}
