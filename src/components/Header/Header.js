import back from "../../assets/back.svg";
import { HeaderContainer } from "./styled-Header";
import React from "react";
import { goBack } from "../../router/Coordinator";
import { useHistory } from "react-router-dom";

  // Header usado na aplicação toda
  // Recebe props de titulo
export function Header(props) {
  const history = useHistory()
  
  return (
    <HeaderContainer>
      <h1>{props.text}</h1>
      {/* Quando icone back é clicado ele aciona a função goBack, que volta para página anterior */}
      <img src={back} onClick={()=>goBack(history)}/>
    </HeaderContainer>
  );
}
