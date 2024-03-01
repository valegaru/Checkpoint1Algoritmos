import * as components from "./components/indexPadre.js"
import { productsData } from "./data/data.js";

class AppContainer extends HTMLElement {

    constructor() {
      super(); 
      this.attachShadow({mode:'open'});
    }
    
    connectedCallback() {
      this.render();
    }
   
  
    render(){
        productsData.forEach((element)=>{
            this.shadowRoot.innerHTML+=`
            <product-merch
            title="${element.title}"
            description="${element.description}"
            image="${element.image}"
            value="${element.value}"
            instock="${element.inStock.quantity}"></product-merch>
            <info-product
            materials="${element.details.materials}"
            brand="${element.details.brand}"
            origin="${element.details.origin}"
            sizesavailable="${element.details.sizesAvailable}"
            "></info-product>
            `
        })
      
    }
  
  }
  
  customElements.define('app-container', AppContainer)
