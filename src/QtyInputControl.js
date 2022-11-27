class QtyInputControl extends HTMLElement {
  static get observedAttributes() {
    return ['count'];
  }
  currentvalue = 0;
  maxValue = 10;
  minValue = 0;
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
        padding: 48%;
        margin: 0;
        background: red;
        color: white;
        text-decoration: none;
        text-align: center;
        font-size: x-large;
        line-height: 10%;
        border: 2px solid red;
      }
      .adjustBtnClass {
        padding-left: 25%;
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
    .spantag {
      padding-top: 35%;
    }
    span {
        display: block;
        width: 25px;
        height: 31px;
        margin: 0;
        background: red;
        color: white;
        text-decoration: none;
        text-align: center;
        font-size: larger;
        border: 2px solid red;
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

      </style>
        <header>
          <div class="divcontainer">
            <ul>
              <li> <button id="dec"class="btnClass">-</button></li>
              <li> <span id="qty" class="spantag" type="text">0</span></li>      
              <li> <button class="btnClass adjustBtnClass" id="inc" >+</button></li>
            </ul>
          </div>
        </header>
        `;

  }
  connectedCallback() {
    this.minValue = this.getAttribute("min");
    console.log('set the minnvalue to ', this.minValue);
    this.maxValue = this.getAttribute("max");
    console.log('set the maxvalue to ', this.maxValue);
    this.attachedListener(this.shadowRoot);
  }

  attachedListener(root) {
    let spanElement = "";
    
    for (let elm of root.querySelectorAll("li")) {
      const btnlst = elm.querySelectorAll("button");
      const spanlst = elm.querySelectorAll("span");

      if (spanlst.length > 0) {
        spanElement = spanlst[0];
      }
      console.log(spanElement);
      if (btnlst.length > 0) {
        for (let btn of btnlst) {
          //console.log("anchorid",btn.getAttribute('id'))
          console.log("ids", btn.getAttribute('id'))
          const idLists = btn.getAttribute('id');

          // eslint-disable-next-line no-loop-func
          btn.addEventListener("click", () => {
            console.log("qty change click happened", this.currentvalue);
            if (idLists === 'inc') {
              if ((this.maxValue - this.currentvalue > 0)) {
                this.currentvalue = this.currentvalue + 1;
                spanElement.innerText = this.currentvalue;
              }
            }
            else if (idLists === 'dec') {
              if (this.currentvalue > this.minValue) {
                this.currentvalue = this.currentvalue - 1;
                spanElement.innerText = this.currentvalue;
              }
            } else if (idLists === '') {
              console.error("invalid action: either it need to be increments or decrements");
            }
          }
          );
        }
      }
    }
  }

}
if (!customElements.get('qty-input')) {
  customElements.define('qty-input', QtyInputControl);
}
