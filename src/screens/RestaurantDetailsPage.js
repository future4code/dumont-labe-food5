import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 22.5rem;
    height: 40rem;
`
const CardImg = styled.img`
    width: 20.5rem;
    height: 7.5rem;
    margin: 0 0 0.75rem;
    object-fit: contain;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20.5rem;
    height: 11.75rem;
    padding: 0 0 1rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`
const CardDetail = styled.div`
    display: flex;
    justify-content: space-between;
`




function RestaurantDetailsPage() {

    return(
        <PageContainer>
            <h4>Restaurante</h4>
            <CardImg src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/C78C3992-5FF3-4F52-8632-E1CA759C9C9F.png" />
            <p>Principais</p>
            <CardContainer>
                <CardImg src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/C78C3992-5FF3-4F52-8632-E1CA759C9C9F.png" />    
                <p>Bullguer</p>
                <CardDetail>
                    <p>pão, carne, queijo, picles e molho</p>
                    <p>R$20,00</p>
                    <button> Adicionar </button>
                </CardDetail>
            </CardContainer>
            <p>Acompanhamentos</p>
            <CardContainer>
                <CardImg src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/C78C3992-5FF3-4F52-8632-E1CA759C9C9F.png" />    
                <p>Bullguer</p>
                <CardDetail>
                    <p>pão, carne, queijo, picles e molho</p>
                    <p>R$20,00</p>
                    <button> Adicionar </button>
                </CardDetail>
            </CardContainer>
        </PageContainer>
    )
}

export default RestaurantDetailsPage