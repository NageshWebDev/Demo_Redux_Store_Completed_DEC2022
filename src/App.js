import React from "react";
import CartItems from "./DisplayCartItems/CartItems";
import Navbar from "./Navbar/Navbar";
import Products from "./Shop/Products";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <CartItems />
      <Products />
    </React.Fragment>
  );
}

export default App;