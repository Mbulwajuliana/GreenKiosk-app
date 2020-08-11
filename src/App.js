import React from 'react';
import logo from './logo.svg';
import './App.css';

class Orders extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type: "FRESH FRUITS & VEGES",
      name:["Oranges","Mangoes","Pineapples","Apples","Bananas",],
      quantity:[3,2,2,5,4],
      price:[100,200,150,250,120]

      
     };
    }
render() {
  return (
    <fragment>
        <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#Fruits">Fruits</a>
  <a href="#Vegetables">Vegetables</a>
  <a href="#Blog">Blog</a>
</div>




    <div className="cont">
      <h1>{this.state.type}</h1>
      <div className="quote">
       <h2>"Home of fresh produce"</h2>
      </div>
    <div className="Oranges">
      <img src="https://cdn.cdnparenting.com/articles/2018/06/691064353-H-1024x700.jpg"></img>
      <p>Name:{this.state.name[0]}</p>
      <p>Quantity:{this.state.quantity[0]}</p>
      <p>Ksh:{this.state.price[0]}</p>
      <button className="add-to-cart" onClick="saveItem()">
      Add To Cart
      </button>
    </div>

    <div className="Mangoes">
      <img src="https://bit.ly/3fERL7q"></img>
      <p>Name:{this.state.name[1]}</p>
      <p>Quantity:{this.state.quantity[1]}</p>
      <p>Ksh:{this.state.price[1]}</p>
      <button className="add-to-cart" onClick="saveItem()">
       Add To Cart
      </button>
    </div>

    <div className="Pineapples">
      <img src="https://bit.ly/3gNthtX" height="160px"></img>
      <p>Name:{this.state.name[2]}</p>
      <p>Quantity:{this.state.quantity[2]}</p>
      <p>Ksh:{this.state.price[4]}</p>
      <button className="add-to-cart" onClick="saveItem()">
      Add to Cart
      </button>
    </div>

    <div className="Apples">
      <img src="https://bit.ly/3gLGumZ"></img>
      <p>Name:{this.state.name[4]}</p>
      <p>Quantity:{this.state.quantity[4]}</p>
      <p>Ksh:{this.state.price[2]}</p>
      <button className="add-to-cart" onClick="saveItem()">
       Add to Cart
      </button>
    </div>

    <div className="Bananas">
      <img src="https://bit.ly/31C7XkM"></img>
      <p>Name:{this.state.name[4]}</p>
      <p>Quantity:{this.state.quantity[4]}</p>
      <p>Ksh:{this.state.price[3]}</p>
      <button className="add-to-cart" onClick="saveItem()">
       Add to Cart
      </button>
    </div>
   </div>
  
</fragment>
  );
 }
}

export default Orders;
