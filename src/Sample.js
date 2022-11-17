
class Sample extends HTMLElement {
  static get observedAttributes() {
      return ['count']
  }
  currentvalue=0;
  increment = 1;
   constructor() {
    super();
 
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
    <style>
    header {
      height: 100%;
      width: 100%;
      padding: 10px 20px;
      background-color: transparent;
      color: #fff;
    }
   header ul {
     display: flex;
  align-items: center;
      list-style: none;
      padding: 0;
      margin: 0;
    }
.btnClass {
    display: block;
    width: 40px;
    height: 30px;
    margin: 0;
    background: red;
    color: white;
    text-decoration: none;
    text-align: center;
    font-size: x-large;
    line-height: 10%;
     border: 2px solid red;

}
#cartadd{
  
  margin-left: 20px;
    height: 15px;
    border-radius: 10px;
    padding-Top: 1%

}

.btnClass:hover {
  cursor: pointer;
} 
#dec {
  border-radius: 7px 0 0 7px;
}
#inc {
  border-radius: 0 7px 7px 0;
}
span {
 display: block;
    width: 25px;
    height: 26px;
    margin: 0;
    background: red;
    color: white;
    text-decoration: none;
    text-align: center;
    font-size: larger;
    border: 2px solid red;
} 
body {
  font-family: Arial, sans-serif;
  background-size: cover;
  height: 100vh;
}

h1 {
  text-align: center;
  font-family: Tahoma, Arial, sans-serif;
  color: #06D85F;
  margin: 80px 0;
}
.button {
  font-size: 1em;
  padding: 10px;
 margin-left:8%;
  border: 2px solid #06D85F;
  border-radius: 20px/50px;
  cursor: pointer;
  transition: all 0.3s ease-out;
    background:red;
    border: 2px solid red;
}

.button:hover {
  background-color: #B71C1C;
}
.divcontainer
{
  display:flex;
}
.popup-container{
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.5);
display:none;
}
.popup-body {
position: absolute;
left: 37%;
right: 37%;
bottom: 30%;
top: 10%;
height:15%;
text-align: center;
margin: auto;
border-radius: 15px;
border-color: black;
background: white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
#popupText
{
  color:blue;
  bottom:30%;
}

.topright {
  position: absolute;
  top: 8px;
  right: 12px;
  font-size:10px;
  height:20%;
  width:12%;
 background:red;
 color:white;
 border: none;
}
  </style>
    <header>
    <div class="divcontainer">
      <ul>
        <li> <button id="dec"class="btnClass">-</button></li>
         <li> <span id="qty" class="spantag" type="text">0</span></li>      
        <li> <button class="btnClass" id="inc" >+</button></li>
         </ul>
        <a class="button cartbtn" id="cartadd" >Add To cart</a> 
      </div>
       <div class="popup-container" id="popupId">
       <div class="popup-body">
      <h2 id="popupText"></h2>
     <button class="topright" id="popupClose">Close X</button>
     </div>
    </div>
    </header>
    `;
 
  }
connectedCallback() {
this.attachedListener(this.shadowRoot);
   
  }
  attachedListener(root) {
   let spanElement="";
   let anchorElement="";
   const anchorlst=root.querySelectorAll("a");
   const popupId=root.querySelector("#popupId"); 
    const popupClose=root.querySelector("#popupClose");
    const popupText=root.querySelector("#popupText"); 
   console.log(anchorlst[0]);
   anchorElement=anchorlst[0];
   anchorElement.addEventListener("click",()=>
   {
   popupId.style.display = 'block';
    popupText.innerText=this.currentvalue +"  " + "items added to cart";
   
   })
   popupClose.addEventListener("click",()=>
   {

    popupId.style.display = 'none';

   })
      for (let elm of root.querySelectorAll("li")) {
       const btnlst=elm.querySelectorAll("button");
       const spanlst=elm.querySelectorAll("span");
        
       if(spanlst.length > 0)
       {
      spanElement=spanlst[0];

       }
         
       console.log(spanElement);
       if(btnlst.length > 0) {
        for(let btn of btnlst)
        {
           //console.log("anchorid",btn.getAttribute('id'))
     console.log("ids",btn.getAttribute('id'))
           const idLists=btn.getAttribute('id');
           
// eslint-disable-next-line no-loop-func
btn.addEventListener("click", () =>
       {
     
       console.log(this.currentvalue);
         if(idLists ==='inc')
    {
       
       if(( this.currentvalue > 0) &&(this.currentvalue < 100))
       {
        this.currentvalue=this.currentvalue + this.increment;
       spanElement.innerText=this.currentvalue;

       }
    }
     else if(idLists ==='dec')
    {
      
         if( this.currentvalue >= 0)
       {
        this.currentvalue=this.currentvalue - this.increment;
       spanElement.innerText=this.currentvalue;

       }           
    } else if(idLists === ''){
      
    }
       }
       
     );
        }

       }
      
    }

  }
  
}
if (!customElements.get('counter-wc')) {
  customElements.define('counter-wc', Sample);
}
