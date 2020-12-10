import logoIFuture from "../../assets/iFuture-red-logo.svg";
import React, { useContext } from "react";
import { Input } from "../../components/Input/Input";
import { LoginPageContainer, Logo } from "./styled-LoginPage";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { goToSignUpPage } from "../../router/Coordinator";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

// Página de Login do Usuário
export function LoginPage() {
  useUnprotectedPage();
  const history = useHistory()
  const {states, setters, requests} = useContext(GlobalStateContext)

  const onChangeSetEmail = (event) => {
    setters.setEmail(event.target.value);
  };
  const onChangeSetPassword = (event) => {
    setters.setPassword(event.target.value);
  };

  return (
    <LoginPageContainer>
      <Logo src={logoIFuture} />
      <h1>Entrar</h1>
      <Input
        label="E-mail"
        placeholder="email@email.com"
        type="email"
        onChange={onChangeSetEmail}
        value={states.email}
      />
      <Input
        label="Senha"
        placeholder="Mínimo 6 caracteres"
        type="password"
        onChange={onChangeSetPassword}
        value={states.password}
      />
      <Button text="Entrar" onClick={() => requests.postLogin(history)} />
      <p>
        Não possui cadastro?{" "}
        <strong onClick={() => goToSignUpPage(history)}>Clique aqui.</strong>
      </p>
    </LoginPageContainer>
  );
}
