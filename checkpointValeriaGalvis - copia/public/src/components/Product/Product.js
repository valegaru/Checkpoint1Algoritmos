class Product extends HTMLElement {

  constructor() {
    super(); 
    this.attachShadow({mode:'open'});
  }
  
  connectedCallback() {
    this.render();
  }
 
  static get observedAttributes( ){
    return ['title','description', 'value', 'instock', 'image']
  }
  
  attributeChangedCallback(propValue,oldValue, NewValue) {
    this[propValue]= NewValue;
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML=`
    <img src="${this.image|| "Not found"}"></img>
    <h1>${this.title || "Not found"}</h1>
    <p>${this.description|| "Not found"}</p>
    <h2>${this.value|| "Not found"}</h2>
    <h2>${this.instock|| "No disponible"}</h2> 
    `
    //
  }

}

customElements.define('product-merch', Product)
export default Product