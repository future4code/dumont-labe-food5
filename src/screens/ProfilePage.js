import React, { useEffect, useContext } from "react";
import { useProtectPage } from "../hooks/useProtectPage";
import GlobalStateContext from "../global/GlobalStateContext";
import { useRequestData } from "../hooks/useRequestData";
import { baseUrl } from "../constants/baseUrl";
import { OrderHistoryCard } from "../components/OrderHistoryCard/OrderHistoryCard";
import { Header } from '../components/Header/Header'

function ProfilePage() {
  useProtectPage();
  const {states, requests} = useContext(GlobalStateContext)
  useEffect(() => {
    requests.getProfileData()
}, []);

const ordersHistory = useRequestData(`${baseUrl}/orders/history`, [])

console.log(ordersHistory)

const renderOrdersHistory = ordersHistory.map((order)=>{
  return(
    <OrderHistoryCard restaurantName={order.restaurantName} date={order.createdAt} totalPrice={order.totalPrice} />
  )
})

  return (
    <div>
      <Header />
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
        <div>{renderOrdersHistory}</div>
      </div>
    </div>
  );
}

export default ProfilePage;
