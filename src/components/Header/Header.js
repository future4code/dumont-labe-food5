import back from "../../assets/back.svg";
import {
  HeaderContainer,
  SmallContainer,
  TitleContainer,
} from "./styled-Header";
import React from "react";
import { goBack, goToLoginPage } from "../../router/Coordinator";
import { useHistory, Route } from "react-router-dom";

// Header usado na aplicação toda
// Recebe props de titulo
export function Header(props) {
  const history = useHistory();

  const onClickRemoveToken = () => {
    localStorage.removeItem("token");
    console.log("REMOVIDO");
    goToLoginPage(history);
  };

  return (
    <HeaderContainer>
      <SmallContainer>
        <img src={back} onClick={() => goBack(history)} />
      </SmallContainer>
      <SmallContainer>
        <Route exact path={["/login", "signup"]}>
          <TitleContainer></TitleContainer>
        </Route>
        <Route exact path={"/feed"}>
          <TitleContainer>IFuture</TitleContainer>
        </Route>
        <Route exact path={"/restaurantdetails/:id"}>
          <TitleContainer>Restaurante</TitleContainer>
        </Route>
        <Route exact path={"/cart"}>
          <TitleContainer>Carrinho</TitleContainer>
        </Route>
        <Route exact path={"/profile"}>
          <TitleContainer>Meu Perfil</TitleContainer>
        </Route>
        <Route exact path={"/editprofile"}>
          <TitleContainer>Editar</TitleContainer>
        </Route>
        <Route exact path={"/editaddress", "/addaddress"}>
          <TitleContainer>Endereço</TitleContainer>
        </Route>
      </SmallContainer>
      <SmallContainer>
      <p onClick={onClickRemoveToken}>Logout</p>
      </SmallContainer>
    </HeaderContainer>
  );
}
