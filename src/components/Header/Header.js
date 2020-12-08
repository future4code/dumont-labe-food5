import back from "../../assets/back.svg";
import { HeaderContainer } from "./styled-Header";
import React from "react";
export function Header(props) {
  // Header usado na aplicação toda
  // Recebe props de titulo
  return (
    <HeaderContainer>
      <h1>{props.text}</h1>
      <img src={back} />
    </HeaderContainer>
  );
}
