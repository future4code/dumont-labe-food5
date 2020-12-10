import React, { useContext, useEffect, useState } from "react";
import {
  PageContainer,
  InputStyle,
  FilterContainer,
  BottomBar,
  Categories,
} from "./styled";
import { RestaurantCard } from "../../components/RestaurantCard/RestaurantCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToRestaurant } from "../../router/Coordinator";
import { useHistory } from "react-router-dom";

function FeedPage() {
  const history = useHistory();
  const { states, setters, requests } = useContext(GlobalStateContext);
  // Estado com as categorias dos restaurantes no feed

  useEffect(() => {
    requests.getRestaurants();
  }, []);

  // Muda Estado de filtro por nome
  const onChangeSetFilteredByName = (event) => {
    setters.setFilteredByName(event.target.value);
    console.log(states.filteredByName);
  };
  // Muda Estado de filtro por categoria
  const onClickSetCategory = (cat) => {
    setters.setCategory(cat);
    console.log(states.category);
  };

  // Funcionalidade de filtro
  const filteredRestaurants = states.restaurants.filter((rest) => {
    if (states.category === 0) {
      return (
        rest.deliveryTime >= 0 && rest.name.includes(states.filteredByName)
      );
    } else {
      return (
        rest.category === states.category &&
        rest.name.includes(states.filteredByName)
      );
    }
  });

  // Display das categorias
  const getCategories = states.restaurants.map((rest) => {
    return (
      <Categories onClick={() => onClickSetCategory(rest.category)}>
        {rest.category}
      </Categories>
    );
  });
  const renderRestaurants = filteredRestaurants.map((rest) => {
    return (
      <RestaurantCard
        logoUrl={rest.logoUrl}
        shipping={rest.shipping}
        name={rest.name}
        deliveryTime={rest.deliveryTime}
        onClick={() => goToRestaurant(history, rest.id)}
      />
    );
  });
  return (
    <PageContainer>
      <h4>4Food </h4>
      <form>
        <InputStyle onChange={onChangeSetFilteredByName} />
      </form>
      <FilterContainer>
        {states.restaurants ? getCategories : "<p></p>"}
      </FilterContainer>
      {states.restaurants ? renderRestaurants : "<p>'</p>"}
      <BottomBar>
        <img src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/E718CCC7-08DF-4BEA-B3D1-8DCB3E8A3BA5.svg" />
        <img src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/31E0BDE3-26B3-421A-AEC5-883D098413D6.svg" />
        <img src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/3725C74F-82A8-4E32-9948-8CBFC09C877F.svg" />
      </BottomBar>
    </PageContainer>
  );
}

export default FeedPage;
