import React from "react";
import { useProtectPage } from "../hooks/useProtectPage";

function ProfilePageEditAdress() {
  useProtectPage();
  return (
    <div>
      Endereço
      <hr />
      <form>
        <input placeholder="Logradouro" />
        <input placeholder="Número" />
        <input placeholder="Complemento" />
        <input placeholder="Bairro" />
        <input placeholder="Cidade" />
        <input placeholder="Estado" />
      </form>
      <button>Salvar</button>
    </div>
  );
}

export default ProfilePageEditAdress;
