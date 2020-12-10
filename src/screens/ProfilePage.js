import React, { useEffect, useContext } from "react";
import { RestaurantCard } from "../components/RestaurantCard/RestaurantCard";
import { useProtectPage } from "../hooks/useProtectPage";
import GlobalStateContext from "../global/GlobalStateContext";

function ProfilePage() {
  useProtectPage();
  const {states, requests} = useContext(GlobalStateContext)
  useEffect(() => {
    requests.getProfileData()
}, []);


  return (
    
    <div>
      Meu perfil
      <hr />
      <div>
        <p>{states.profileData.name}</p>
        <p>{states.profileData.email}</p>
        <p>{states.profileData.cpf}</p>
      </div>
      <div>
        Endereço cadastrado:
        <p><p>{states.profileData.address}</p></p>
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
