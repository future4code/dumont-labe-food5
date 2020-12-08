import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "../screens/HomePage/HomePage";
import { LoginPage } from "../screens/LoginPage/LoginPage";
import React from "react";
import { AddAddressPage } from "../screens/AddAddresPage/AddAddressPage";
import { SignUpPage } from "../screens/SignUpPage/SignUpPage";
import CartPage from "../screens/CartPage";
import FeedPage from "../screens/feedPage";
import ProfileEditUserPage from "../screens/ProfileEditUserPage";
import ProfilePageEditAdress from "../screens/ProfilePageEditAdress";
import RestaurantDetailsPage from "../screens/RestaurantDetailsPage";
export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/addaddress">
          <AddAddressPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/editprofile">
          <ProfileEditUserPage />
        </Route>
        <Route exact path="/editaddress">
          <ProfilePageEditAdress />
        </Route>
        <Route exact path="/restaurantdetails">
          <RestaurantDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
