import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  width: 20.5rem;
  height: 3.5rem;
  padding: 1rem 0.503rem 1rem 1.063rem;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`;

function SearchPlaceholder() {
  return (
    <div>
      <form>
        <InputStyle />
        <p>Busque por nome de Restaurante</p>
      </form>
    </div>
  );
}
