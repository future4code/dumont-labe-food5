import React from "react";
import "./App.css";
import GlobalState from "./global/GlobalState";
import { Router } from "./router/router";
import CartPage from './screens/CartPage/CartPage'

function App() {
  return (
    // <GlobalState>
    //   <Router />
    // </GlobalState>
    <div>
      <CartPage/>
    </div>
  );
}

export default App;
