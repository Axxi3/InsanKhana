import React from 'react';

export default function MyButton(props) {
  const { CategoryName, click } = props;     
  // let buttonStyles = {
  //   backgroundColor: 'white'
  // };    
  
  // const [activeclass,setactiveclass]=useState(buttonStyles)  
  // useEffect(()=>{ 
  //   if(active===CategoryName){   
  //     console.log("this is active",active)  
  //     buttonStyles = {
  //       backgroundColor: '#F2AC18'
  //     };  
  //     setactiveclass(buttonStyles)
  //   } else {    
  //     buttonStyles = {
  //       backgroundColor: 'white'
  //     };  
  //     setactiveclass(buttonStyles)
  //   }
  // },[active])
  

  return (
    <div className="Mybutton" onClick={() => click(CategoryName)} >
      <button>{CategoryName}</button>
    </div>
  );
}
