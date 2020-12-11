import logoIFuture from "../../assets/iFuture-red-logo.svg";
import React, { useContext } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { LoginPageContainer } from "../LoginPage/styled-LoginPage";
import { Header } from "../../components/Header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useProtectPage } from "../../hooks/useProtectPage";
import { useHistory } from "react-router-dom";

// Página de Adicionar Endereço no Cadastro

export function AddAddressPage() {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const history = useHistory();
  const onChangeSetStreet = (event) => {
    setters.setStreet(event.target.value);
  };
  const onChangeSetNumber = (event) => {
    setters.setNumber(event.target.value);
  };
  const onChangeSetNeighbourhood = (event) => {
    setters.setNeighbourhood(event.target.value);
  };
  const onChangeSetCity = (event) => {
    setters.setCity(event.target.value);
  };
  const onChangeSetState = (event) => {
    setters.setState(event.target.value);
  };
  const onChangeSetComplement = (event) => {
    setters.setComplement(event.target.value);
  };
  return (
    <div>
      <Header />
      <LoginPageContainer>
        <h1>Meu endereço</h1>
        <Input
          label="Logradouro"
          placeholder="Rua / Av."
          type="text"
          onChange={onChangeSetStreet}
        />
        <Input
          label="Número"
          placeholder="Número"
          type="number"
          onChange={onChangeSetNumber}
        />
        <Input
          label="Complemento"
          placeholder="Apto / Bloco"
          onChange={onChangeSetComplement}
        />
        <Input
          label="Bairro"
          placeholder="Bairro"
          type="text"
          onChange={onChangeSetNeighbourhood}
        />
        <Input
          label="Cidade"
          placeholder="Cidade"
          type="text"
          onChange={onChangeSetCity}
        />
        <Input
          label="Estado"
          placeholder="Estado"
          type="text"
          onChange={onChangeSetState}
        />
        <Button text="Criar" onClick={() => requests.putAddAddress(history)} />
      </LoginPageContainer>
    </div>
  );
}
