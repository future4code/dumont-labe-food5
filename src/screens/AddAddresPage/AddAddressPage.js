import logoIFuture from "../../assets/iFuture-red-logo.svg";
import React from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { LoginPageContainer } from "../LoginPage/styled-LoginPage";
import { Header } from "../../components/Header/Header";

// Página de Adicionar Endereço no Cadastro

export function AddAddressPage() {
  return (
    <div>
      <Header />
      <LoginPageContainer>
        <h1>Meu endereço</h1>
        <Input label="Logradouro" placeholder="Rua / Av." type="text" />
        <Input label="Número" placeholder="Número" type="number" />
        <Input label="Complemento" placeholder="Apto / Bloco" />
        <Input label="Bairro" placeholder="Bairro" type="text" />
        <Input label="Cidade" placeholder="Cidade" type="text" />
        <Input label="Estado" placeholder="Estado" type="text" />
        <Button text="Criar" />
      </LoginPageContainer>
    </div>
  );
}
