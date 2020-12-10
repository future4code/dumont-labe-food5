import React from "react";
import { CardContainer } from "./styled"

export function OrderHistoryCard(props) {
    return(
        <CardContainer>
            <h5>{props.restaurantName}</h5>
            <h4>SUBTOTAL R${props.totalPrice}</h4>
        </CardContainer>
    )
}