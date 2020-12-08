import React from "react";

function ProfileEditUserPage() {
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
