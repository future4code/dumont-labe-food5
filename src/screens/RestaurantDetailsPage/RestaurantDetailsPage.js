import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useProtectPage } from "../../hooks/useProtectPage";
import { PageContainer, CardImg, CardContainer, CardDetail, RestaurantDetailsContainer} from './styled'

function RestaurantDetailsPage() {
  useProtectPage();
  const pathParams = useParams()
  const history = useHistory()
  const { states, setters, requests } = useContext(GlobalStateContext)
  
  useEffect(() => {
    requests.getRestaurantDetails(pathParams.id)
  }, []);


  const addItemToCart = (newItem) => {
    const index = states.cart.findIndex((i) => i.id === newItem.id);
    let newCart = [...states.cart];
    if (index === -1) {
      newCart.push({ ...newItem, amount: 1 })
    }
    else {
      newCart[index].amount += 1;
    }
    setters.setCart(newCart);
    alert(`${newItem.name} foi adicionado ao seu carrinho!`)
  }

  const renderRestaurantDetails = states.restaurantProducts.map((item) => {
    return (
      <ItemCard 
      key={item.id}
      photoUrl={item.photoUrl[0]} 
      name={item.name} 
      description={item.description} 
      price={item.price} 
      amount={item.amount}
      addItemToCart={() => addItemToCart(item)}
      />
    )
  })
  return (
    <div>
      <Header text="Restaurante" />
      <RestaurantDetailsContainer>
        <img src={states.restaurantDetails.logoUrl} />
        <h1>{states.restaurantDetails.name}</h1>
        <p>{states.restaurantDetails.category}</p>
        <div>
          <p>{states.restaurantDetails.deliveryTime} min</p>
          <p>Frete: R${states.restaurantDetails.shipping}</p>
        </div>
        <p>{states.restaurantDetails.address}</p>
      </RestaurantDetailsContainer>
      {states.restaurantProducts ? renderRestaurantDetails : "<p>'</p>"}
      {/* <PageContainer>
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
    </PageContainer> */}
    </div>
  );
}

export default RestaurantDetailsPage;
