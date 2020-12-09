import React from "react";
import { useProtectPage } from "../hooks/useProtectPage";
import { Input } from "../components/Input/Input"

function SearchPlaceholder() {
  useProtectPage();
  return (
    <div>
      <form>
        <Input />
        <p>Busque por nome de Restaurante</p>
      </form>
    </div>
  );
}
