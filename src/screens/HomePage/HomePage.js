import { HomePageContainer } from "./styled-HomePage";
import logoIFuture from "../../assets/iFuture-logo.svg";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../../router/Coordinator";

// Home, página que aparece quando a aplicação é aberta
export function HomePage() {
  const history = useHistory();

  useEffect(() => {
    waitAndGoToLogin();
  }, []);

  // Função que espera 3 segundos para mudar para página de Login
  const waitAndGoToLogin = () => {
    setTimeout(function () {
      goToLoginPage(history);
    }, 3000);
  };
  return (
    <HomePageContainer>
      <img src={logoIFuture} alt="Logo IFuture"/>
    </HomePageContainer>
  );
}
