import React from 'react';


function ProfilePageEditAdress() {
  return (
    <div >
        Endereço
        <hr/>
        <form>
            <input
            placeholder="Logradouro"
            />
            <input
            placeholder="Número"
            />
            <input
            placeholder="Complemento"
            />
            <input
            placeholder="Bairro"
            />
            <input
            placeholder="Cidade"
            />
            <input
            placeholder="Estado"
            />
        </form>
        <button>Salvar</button>
    </div>
  );
}

export default ProfilePageEditAdress;