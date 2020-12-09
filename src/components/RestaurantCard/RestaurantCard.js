import React from "react";
import { ContainerInfos, ContainerRestaurantCard } from "./styled-RestaurantCard";


export function RestaurantCard(props) {
  // Componente do Card do Restaurante
  
  return (
    <ContainerRestaurantCard onClick={props.onClick}>
    <img src={props.logoUrl}/>
    <ContainerInfos>
        <h2>{props.name}</h2>
    
        <div>
            <p>{props.deliveryTime} min</p>
            <p>Frete R${props.shipping}</p>
        </div>
    </ContainerInfos>
    </ContainerRestaurantCard>
  )
  
}
