import React, { useEffect, useState, useContext } from "react";
import { Page, AdressContainer, AdressTitle, Adress, Card, SubtotalTitle, SubtotalContainer, Tax, Total, Button, PayContainer, Pay, Credit, PayTitle } from './styles'
import { ItemCard } from "../../components/ItemCard/ItemCard";
import GlobalStateContext from "../../global/GlobalStateContext";

function CartPage() {
  const { states, setters } = useContext(GlobalStateContext);
  const [priceToPay, setPriceToPay] = useState(0);

  const tax = states.restaurantDetails.shipping;

  useEffect(() => {
    let currentTotal = 0;
    states.cart.forEach((item) => {
      currentTotal += item.price * item.amount + tax;
    });
    setPriceToPay(currentTotal);
  }, [states.cart]);

  const removeItemFromCart = (itemToRemove) => {
    const index = states.cart.findIndex((item) => item.id === itemToRemove.id);
    let newCart = [...states.cart];
    if (newCart[index].amount === 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].amount -= 1;
    }
    setters.setCart(newCart);
  };

  const productsList = states.cart.map((item) => {
    return (
      <ItemCard
        key={item.id}
        photoUrl={item.photoUrl}
        name={item.name}
        description={item.description}
        price={item.price}
        amount={item.amount}
        removeItem={() => removeItemFromCart(item)}
        textButton="Remover"
      />
    );
  });
  
  return (
    <Page>
      <AdressContainer>
        <AdressTitle>Endereço de entrega</AdressTitle>
        <Adress>Rua Alessandra Viera, 42</Adress>
      </AdressContainer>
      <Card>{productsList.length > 0 ? productsList : <p>Carrinho Vazio</p>}</Card>
      <Tax>Frete R$ {states.restaurantDetails.shipping ? states.restaurantDetails.shipping : "0. 00"} </Tax>
      <SubtotalContainer>
        <SubtotalTitle>SUBTOTAL</SubtotalTitle>
        <Total>  R${priceToPay.toFixed(2)}</Total>
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
