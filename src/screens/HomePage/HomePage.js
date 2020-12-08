import { HomePageContainer } from "./styled-HomePage";
import logoIFuture from "../../assets/iFuture-logo.svg";
import React from "react";
export function HomePage() {
  // Home, página que aparecer quando a aplicação é aberta

  return (
    <HomePageContainer>
      <img src={logoIFuture} />
    </HomePageContainer>
  );
}
