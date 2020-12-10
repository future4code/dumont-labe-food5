import React, { useContext, useEffect } from "react";
import { PageContainer, InputStyle, FilterContainer, CardImg, CardContainer, CardDetail, BottomBar} from "./styled";
import { baseUrl } from '../../constants/baseUrl'
import { useRequestData } from '../../hooks/useRequestData'
import { RestaurantCard } from "../../components/RestaurantCard/RestaurantCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToRestaurant } from "../../router/Coordinator";
import { useHistory } from "react-router-dom";
import { useProtectPage } from "../../hooks/useProtectPage";



function FeedPage() {
  useProtectPage();
  const history = useHistory()
  const {states, setters, requests} = useContext(GlobalStateContext)
  useEffect(() => {
    requests.getRestaurants()
}, []);
  // const feed = useRequestData(`${baseUrl}/restaurants`, [])
  // console.log(feed) 
  const renderRestaurants = states.restaurants.map((rest)=>{
    return(
      <RestaurantCard logoUrl={rest.logoUrl} shipping={rest.shipping} name={rest.name} deliveryTime={rest.deliveryTime} onClick={()=>goToRestaurant(history, rest.id)} />
    )
  })
  return (
    <PageContainer>
      <h4>4Food</h4>
      <form>
        <InputStyle />
      </form>
      <FilterContainer>
        <p>Burger</p>
        <p>Asiática</p>
        <p>Massas</p>
        <p>Saudáveis</p>
      </FilterContainer>
      {states.restaurants ? renderRestaurants :"<p>'</p>"}
      <BottomBar>
        <img src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/E718CCC7-08DF-4BEA-B3D1-8DCB3E8A3BA5.svg" />
        <img src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/31E0BDE3-26B3-421A-AEC5-883D098413D6.svg" />
        <img src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/3725C74F-82A8-4E32-9948-8CBFC09C877F.svg" />
      </BottomBar>
    </PageContainer>
  );
}

export default FeedPage;
