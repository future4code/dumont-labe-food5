import React from "react";
import "./App.css";
import GlobalState from "./global/GlobalState";
import { Router } from "./router/router";
import FeedPage from "./screens/feedPage";
import RestaurantDetailsPage from "./screens/RestaurantDetailsPage";

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
