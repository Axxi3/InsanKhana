 import React, { useState, useEffect } from 'react';
import MyButton from './MyButton';
import Card from './Card';  
import Loading from './Loading';  
import Footer from '../component/Footer';
export default function Fooditems() {    
  const [category,setcategpry]=useState("All")
  const [food,setfood]=useState([])  
  const [fooditem,setfooditem]=useState([])   
  const [dataloaded,setdataloaded]=useState(true)
  const  getfoodcategory= async ()=> {   
    setdataloaded(false)
    let foodCategory=await fetch(`https://insankhana.onrender.com/getcategory`,{ 
    method:"GET"
  })  
  
  foodCategory=await foodCategory.json()  
  console.log(foodCategory)  
  setfood(foodCategory)
  }



  const  getfooditem= async ()=> { 
    let fooditem=await fetch("https://insankhana.onrender.com/getfood",{ 
    method:"GET"
  })  
  fooditem=await fooditem.json()  
  console.log(fooditem)  
  setfooditem(fooditem)   
setdataloaded(true)
  }   

  useEffect(()=> { 
   getfoodcategory()   
   getfooditem()
  },[])
  
console.log(food)

 
function clicked(eaa) {  
  
   setcategpry(eaa)
  
}


  return (
    <div className="light">
      <h1 className="trusted text ">Food items</h1>   
      <div className="slider">   
      { 
        dataloaded ===false && ( 
          <Loading/>
        )
      }   
      {
         dataloaded && food.length !== 0 ? food[0].map((data) => { 
            return(  
              <MyButton CategoryName={data.CategoryName}  key={data._id} click={clicked} active={category}/>
            );
          }) : <div>hello world</div>
        }
      </div> 
     
     <div className="cards"> 
     {category ==="All" &&
          fooditem.length !== 0 ? fooditem[0].map((data) => { 
            return( 
              <Card name={data.name} link={data.img} description={data.description} Array={data.options[0]} key={data._id} />
            );
          }) : <div></div>
        }  
        {category !=="" &&
          fooditem.length !== 0 ? fooditem[0].filter((item)=> item.CategoryName.includes(category)).map((data) => { 
            return( 
              <Card name={data.name} link={data.img} description={data.description} Array={data.options[0]} key={data._id} />
            );
          }) : <div></div>
        }
     </div>  
     <Footer/>
    </div>
  );
}
