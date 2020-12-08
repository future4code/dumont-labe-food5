import React from "react";
import { ButtonContainer } from "./styled-Button";
export function Button(props) {
  // Componente do botão usado na aplicação
  // Recebe uma props de texto

  return <ButtonContainer onClick={props.onClick}>{props.text}</ButtonContainer>;
}
