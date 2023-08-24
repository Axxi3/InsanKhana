import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Leftinfo from "./Leftinfo";

export default function MyProfile() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);   
  const [orderButton,setOrderButton]=useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    getCartItem();
  }, []);

  useEffect(() => {
    // Calculate the total price when the cart changes
    const newTotalPrice = cart.reduce(
      (total, item) => total + parseFloat(item.price),
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const getCartItem = () => {
    const data = localStorage.getItem("cart");

    if (data) {
      try {
        const cartItems = JSON.parse(data);
        setCart(cartItems);   
       
        if(cartItems.length===0) { 
          setOrderButton(false)
        }  
        else { 
          setOrderButton(true)
        }
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }   


  };

  const change = (e, price) => {
    console.log(price);
    if (e === 0) {
      setTotalPrice(parseInt(totalPrice) - parseInt(price));
    } else {
      const a = parseInt(totalPrice);
      const b = a + parseInt(price);
      console.log(b);
      setTotalPrice(b);
    }
  };  


  const orderDeDo =()=> {   
    localStorage.removeItem('cart');
    navigate("/orderconfirm");
  }  
  const CartMeinDalo=()=>{ 
    navigate("/");
  }

  return (
    <div className="heroinfo">
      <Leftinfo />
      <div className="rightforparentcart">
        <div className="profile">
          <h1>Your Cart</h1>
          <div className="scroller">
            {cart && Array.isArray(cart) && cart.length !== 0 ? (
              cart.map((data, index) => (
                <Cart
                  name={data.name}
                  img={data.img}
                  option={data.option}
                  price={data.price}
                  change={change}
                  index={index}
                />
              ))
            ) : (
              <div>
                {console.log("from render", cart)}
                No items in the cart
              </div>
            )}
          </div>
          <h2>Total Price: {totalPrice}</h2>  
          { 
          orderButton===false && ( 
            <div className="fullscreenForButton"> 
          <button type="button" class="btn btn-info placeorder" onClick={CartMeinDalo}>
             Your Cat is Empty!!, Lets add something.
          </button>
            </div>
          )
          }    

          { 
          orderButton===true && ( 
            <div className="fullscreenForButton"> 
            <button type="button" class="btn btn-warning placeorder" onClick={orderDeDo}>
               Place Order
            </button>
            </div>
          )
          }

         
        
           
        </div>
      </div>
    </div>
  );
}
