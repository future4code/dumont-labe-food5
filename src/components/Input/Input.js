import React from "react";
import { InputContainer } from "./styled-Input";
export function Input(props) {
  // Componente de Input usado na aplicação
  // Rece 2 props --> placeholder e type

  return (
    <InputContainer>
      <label>{props.label}</label>
      <input 
        placeholder={props.placeholder} 
        type={props.type} 
        onChange={props.onChange}
        value={props.value}
        required 
      />
    </InputContainer>
  );
}
