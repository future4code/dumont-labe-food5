import React from "react";
import {Page, AdressContainer, AdressTitle, Adress, Card, SubtotalTitle, SubtotalContainer, Frete, Total, Button, PayContainer, Pay, Credit, PayTitle} from './styles'

function CartPage() {
  return (
    <Page>
      <AdressContainer>
        <AdressTitle>Endereço de entrega</AdressTitle>
        <Adress>Rua Alessandra Viera, 42</Adress>
      </AdressContainer>
      <Card>Carrinho vazio</Card>
      <Frete>Frete R$ 0,00</Frete>
      <SubtotalContainer>
        <SubtotalTitle>SUBTOTAL</SubtotalTitle>
        <Total> R$ 00,00</Total>
      </SubtotalContainer>
      <PayTitle>Forma de pagamento</PayTitle>
      <hr />
      <PayContainer>
        <Pay>
          <input type="radio" />
          Dinheiro
        </Pay>
        <Credit>
          <input type="radio" />
          Cartão de crédito
        </Credit>
      </PayContainer>
      <Button>Confirmar</Button>
    </Page>
  );
}

export default CartPage;
