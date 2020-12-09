import React from "react";
import { ContainerInfos, ContainerRestaurantCard } from "./styled-RestaurantCard";


export function RestaurantCard(props) {
  // Componente do Card do Restaurante
  
  return (
    <ContainerRestaurantCard>
    <img src="https://especiais.estadao.com.br/rotapaladar/wp-content/uploads/sites/115/2018/11/Bullguer-Mr-Belly-o-Lucas-Terribili-2-1.jpg"/>
    <ContainerInfos>
        <h2>Bullguer Vila Madalena</h2>
    
        <div>
            <p>30-45 min</p>
            <p>Frete R$60</p>
        </div>
    </ContainerInfos>
    </ContainerRestaurantCard>
  )
  
}
