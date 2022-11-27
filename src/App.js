import React, { useRef } from 'react';
import './QtyInputControl.js';
import "./App.css";

export default function App() {

  const showcase = {
    margin: '5% 25% 0 36%',
  }

  const [showPopup, setShowPopup] = React.useState(false); 
  const [statusMsg, setStatusMsg] = React.useState("success msg"); 

  const counterElement = useRef(null);

  function addToCart() {
    console.log("add to cart button is clicked", counterElement.current.currentvalue);
    setShowPopup(true);
    setStatusMsg(counterElement.current.currentvalue + " items added to cart");
  }

  function popupClose() {
    setShowPopup(false);
  }

  return (
    <div style={showcase}>
      <h2 className="title">Quantity Input Control by React Webcomponent</h2>
      <div className="greyborderline">
        <div className="row" >
          <img className="imageblock" src={require("../src/assets/papaya.png")} alt="Qty Image" />
        </div>
        <div className="row formcenter" >
            <qty-input class="qtywebcomponent" ref={counterElement} min={0} max={10}></qty-input>
            <button className="button cartbtn" id="cartadd" onClick={addToCart}>Add to cart</button>
        </div>
      </div>
      { showPopup ? <div className="popup-container" id="popupId">
        <div className="popup-body">
          <h2 id="popupText">{statusMsg}</h2>
          <button className="topright" id="popupClose" onClick={popupClose}>X</button>
        </div> 
      </div> : '' }
      <p className='description'>Quantity input control in the above shopping item is created by the react web component. It has been plugged into the shopping item box. When add to cart of the e-commerce web client is clicked, the outer addToCart button takes the current quantity value. Quantity input control web component has facility to provide minimum and maximum quantity.</p>
    </div>
  );
}
