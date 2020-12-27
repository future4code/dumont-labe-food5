import React from 'react'
import { InfoContainer, ItemCardContainer, Page } from "./styled-ItemCard";

export function ItemCard(props) {
    // Componente do Card de Item

    return (
        <Page>
            <div>{props.amount} </div>
            <ItemCardContainer>
                <img src={props.photoUrl} alt={props.name} />
                <InfoContainer>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    <p>R${props.price}</p>
                </InfoContainer>
                <button onClick={props.addItemToCart}>{props.textButton}</button>
            </ItemCardContainer>
        </Page>

    )

}
