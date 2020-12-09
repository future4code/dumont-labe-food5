import React, { useEffect, useContext } from "react";
import { RestaurantCard } from "../components/RestaurantCard/RestaurantCard";
import GlobalStateContext from "../global/GlobalStateContext";
import { useProtectPage } from "../hooks/useProtectPage";

function ProfilePage() {
  useProtectPage()
  const {states, setters, requests} = useContext(GlobalStateContext)
  useEffect(() => {
    requests.getProfileData()
  }, []);

  console.log(states.profileData)

  return (
    
    <div>
      Meu perfil
      <hr />
      <div>
        <h4>Editar informações pessoais:</h4>
        <p>{states.profileData.name}</p>
        <p>{states.profileData.email}</p>
        <p>{states.profileData.cpf}</p>
      </div>
      <div>
        <h4>Endereço cadastrado: </h4>
        <p>{states.profileData.address}</p>
      </div>
      <div>
        Histórico de pedidos
        <hr />
        <div>Você não realizou nenhum pedido</div>
      </div>
    </div>
  );
}

export default ProfilePage;
