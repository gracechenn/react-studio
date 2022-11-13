import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import CartItem from "./components/CartItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const[cart, setCart] = useState(new Map()); 
  const[cartTotal, setTotal] = useState(0);
  const[cartItems, setCartItems] = useState([]);

  const bakery = bakeryData.map((item) => ( // TODO: map bakeryData to BakeryItem components
        <div> 
          {BakeryItem(item)}
          <button onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      ));
  
  const addToCart = (item) => {
    if (cart.has(item.name)) {
      let count = cart.get(item.name) + 1;
      cart.set(item.name, count)
    }
    else {
      setCart(cart.set(item.name, 1));
    }
    setTotal(cartTotal + item.price);
    console.log(cart)
    };

  

  return (
    <div className="App">
      <div id="content">
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        {bakery}
      </div>
      <div id="cart">
        <h2>Cart</h2>
        {/* {cart.map((item, count) => ( // TODO: map bakeryData to BakeryItem components
        <p>{count} x {item}</p> // replace with BakeryItem component
        ))} */}
        {
          Array.from(cart, ([item, count]) => <p>{count} x {item}</p>)
        }
        Total: {cartTotal}
      </div>
    </div>
  );
}

export default App;
