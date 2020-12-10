import React, { useContext } from 'react'
import { InfoContainer, ItemCardContainer } from "./styled-ItemCard";
import GlobalStateContext from "../../global/GlobalStateContext";

export function ItemCard(props) {
    // Componente do Card de Item

    return (
        <div>
            <div>{props.amount}x</div>
            <ItemCardContainer>
                <img src={props.photoUrl} />
                <InfoContainer>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    <p>R${props.price}</p>
                </InfoContainer>
                <button onClick={props.addItemToCart}>{props.textButton}</button>
            </ItemCardContainer>
        </div>

    )

}
