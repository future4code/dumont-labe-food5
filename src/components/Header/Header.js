import back from "../../assets/back.svg";
import { HeaderContainer } from "./styled-Header";
import React from "react";
import { goBack, goToLoginPage } from "../../router/Coordinator";
import { useHistory } from "react-router-dom";

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
      <img src={back} onClick={() => goBack(history)} />
      <h1>{props.text}</h1>
      {/* Quando icone back é clicado ele aciona a função goBack, que volta para página anterior */}
      <p onClick={onClickRemoveToken}>Logout</p>
    </HeaderContainer>
  );
}
