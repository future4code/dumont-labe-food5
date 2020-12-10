import React from "react";
import { useProtectPage } from "../hooks/useProtectPage";

function ProfileEditUserPage() {
  useProtectPage();
  return (
    <div>
      Editar
      <hr />
      <form>
        <input placeholder="Nome" />
        <input placeholder="Email" />
        <input placeholder="CPF" />
      </form>
      <button>Salvar</button>
    </div>
  );
}

export default ProfileEditUserPage;
