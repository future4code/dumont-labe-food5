import React, { useEffect, useState, useContext } from "react";
import { Page, AdressContainer, AdressTitle, Adress, Card, SubtotalTitle, SubtotalContainer, Tax, Total, Button, PayContainer, Cash, Credit, PayTitle } from './styles'
import { ItemCard } from "../../components/ItemCard/ItemCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Header } from '../../components/Header/Header'

function CartPage() {
  const { states, setters } = useContext(GlobalStateContext);
  const [ priceToPay, setPriceToPay ] = useState(0);
  const [ pay, setPay ] = useState(false);

  const tax = states.restaurantDetails.shipping;
  
  const onChangeValue = (event) => {
    setPay(event.target.value);
  }
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

  console.log(states.cart)
  
  return (
    <Page>
      <Header />
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
        <Cash>
          <input type="radio" name="paymentmethod" id="money" value="Dinheiro" />
          <label for="money"> Dinheiro </label>
        </Cash>
        <Credit>
          <input type="radio" name="paymentmethod" id="creditcard" value="Cartão de Credito" />
          <label for="creditcard"> Cartão de crédito </label>

        </Credit>
        </PayContainer>
          <Button>Confirmar</Button>
      </Page>


  );
}

export default CartPage;
