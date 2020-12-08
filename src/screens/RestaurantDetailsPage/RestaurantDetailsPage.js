import React from "react";
import { PageContainer, CardImg, CardContainer, CardDetail} from './styled'

function RestaurantDetailsPage() {
  return (
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
  );
}

export default RestaurantDetailsPage;
