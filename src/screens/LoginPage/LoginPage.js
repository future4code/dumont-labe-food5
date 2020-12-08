import logoIFuture from "../../assets/iFuture-red-logo.svg";
import React from "react";
import { Input } from "../../components/Input/Input";
import { LoginPageContainer, Logo } from "./styled-LoginPage";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { goToSignUpPage } from "../../router/Coordinator";
import { useHistory } from "react-router-dom";

// Página de Login do Usuário
export function LoginPage() {
  const history = useHistory()
  return (

      <LoginPageContainer>
        <Logo src={logoIFuture} />
        <h1>Entrar</h1>
        <Input label="E-mail" placeholder="email@email.com" type="email" />
        <Input
          label="Senha"
          placeholder="Mínimo 6 caracteres"
          type="password"
        />
        <Button text="Entrar" />
        <p>
          Não possui cadastro? <strong onClick={()=>goToSignUpPage(history)}>Clique aqui.</strong>
        </p>
      </LoginPageContainer>
    
  );
}
