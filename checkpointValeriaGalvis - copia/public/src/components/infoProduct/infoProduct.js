class InfoProduct extends HTMLElement {

  constructor() {
      super(); 
      this.attachShadow({mode:'open'});

      this.onButtonClicked= this.onButtonClicked.bind(this);


    }
    
    connectedCallback() {
      this.mount();
    }
   
    static get observedAttributes( ){
      return ['materials','sizesavailable', 'brand', 'origin']
    }
    
    attributeChangedCallback(propValue,oldValue, NewValue) {
      this[propValue]= NewValue;
      this.mount();
    }
  
    mount(){
        this.render();
        this.addListeners();
    }

    addListeners(){
        this.attachShadow.queryselector('button').this.onButtonClicked
    }
    onButtonClicked(){
        this.getAttribute('materials','sizesavailable', 'brand', 'origin');
        this.setAttribute('lonuevo');
        
        
    }


    render(){
      this.shadowRoot.innerHTML=`
      <button>Más detalles</button>
      <p>${this.materials || "Not found"}</p>
      <p>${this.sizesavailable || "Not found"}</p>
      <p>${this.brand || "Not found"}</p>
      <p>${this.origin|| "Not found"}</p>
      `
    }
  
  }
  
  customElements.define('info-product', InfoProduct)
  export default InfoProduct

  