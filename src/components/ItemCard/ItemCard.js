import { InfoContainer, ItemCardContainer } from "./styled-ItemCard";
import React from 'react'

export function ItemCard(props) {
    // Componente do Card de Item
    
    return (
     <ItemCardContainer>
         <img src={props.photoUrl}/>
         <InfoContainer>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>R${props.price}</p>
         </InfoContainer>
         <button>Adicionar</button>
     </ItemCardContainer>
    )
    
  }