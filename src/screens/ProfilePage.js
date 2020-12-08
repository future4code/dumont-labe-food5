import React from 'react';


function ProfilePage() {
  return (
    <div>
      Meu perfil
      <hr/>
      <div>
          Editar informações pessoais (ProfileEditUserPage) 
      </div>
      <div>
          Endereço cadastrado (ProfilePageEditAdress)
      </div>
      <div>
          Histórico de pedidos
          <hr/>
          <div>
              Você não realizou nenhum pedido
          </div>
      </div>
      
    </div>
  );
}

export default ProfilePage;