import logoIFuture from "../../assets/iFuture-red-logo.svg";
import React from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { LoginPageContainer } from "../LoginPage/styled-LoginPage";
import { Header } from "../../components/Header/Header";
export function SignUpPage() {
  // Página de SignUp do usuário
  return (
    <div>
      <Header />
      <LoginPageContainer>
        <img src={logoIFuture} />
        <h1>Cadastrar</h1>
        <Input label="Nome" placeholder="Nome e sobrenome" type="text" />
        <Input label="E-mail" placeholder="email@email.com" type="email" />
        <Input label="CPF" placeholder="000.000.000-00" />
        <Input
          label="Senha"
          placeholder="Mínimo 6 caracteres"
          type="password"
        />
        <Input
          label="Confirmar"
          placeholder="Confirme a senha anterior"
          type="password"
        />

        <Button text="Criar" />
      </LoginPageContainer>
    </div>
  );
}
