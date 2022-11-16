import React, {useRef } from 'react';
import'./Sample.js';

export default function App() {
  const counterElement = useRef(null);
  return (
   
      <div className='col-md-12'>
       <div className="row" > 
       <div className='col-md-2'></div>
        <div className="container" style={{marginTop:'9%', display:'flex',marginLeft:'36%'}}>
        <div className='col-md-8'>
   <div>
  <img className="imageblock" style={{height:'250px'}} src={require("../src/assets/papaya.png")} alt="" />
   </div>
     <div>
    <counter-wc  ref={counterElement}>
    </counter-wc>
    </div> 
    </div>
    </div>
    <div className='col-md-2'></div>
        </div>
    </div>
 
     
    
    
  );
}
