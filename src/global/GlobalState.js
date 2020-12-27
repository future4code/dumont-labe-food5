import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { baseUrl } from "../constants/baseUrl";
import { goToLoginPage } from "../router/Coordinator";

const GlobalState = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Estado com todos os restaurantes
  const [restaurants, setRestaurants] = useState([]);
  // Estado com produtos do restaurante escolhido
  const [restaurantProducts, setRestaurantProducts] = useState([]);
  // Estado com detalhes do restaurante escolhido
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  // Estado para armazenar dados do perfil
  const [profileData, setProfileData] = useState({});
  // Estado usado para filtrar por categoria
  const [category, setCategory] = useState(0);
  // Estado usado para filtrar por nome
  const [filteredByName, setFilteredByName] = useState("");
  // Variável com o token do localStorage
  const token = localStorage.getItem("token");
  // Variável com autorização para requisições
  const auth = { headers: { auth: token } };


  //Estado do carrinho
  const [cart, setCart] = useState([]);
  const [number, setNumber] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [complement, setComplement] = useState("");
  const [street, setStreet] = useState("");

  // Request que faz o login
  const postLogin = (history) => {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(`${baseUrl}/login`, body)
      .then((resposta) => {
        console.log("Resposta request postLogin", resposta.data);
        // Depois da requisição, o token é guardado no localStorage
        localStorage.setItem("token", resposta.data.token);
        alert("LOGIN FEITO COM SUCESSO");
        // Se a requisição funcionar, o usuário é direcionado até o feed
        setTimeout(function () {
          history.push("/feed");
        }, 2000);
      })
      .catch((err) => {
        console.log("Erro Request postLogin", err.message);
      });
    setEmail("");
    setPassword("");
  };

  // Request de pegar os restaurantes

  const getRestaurants = (history) => {
    axios
      .get(`${baseUrl}/restaurants`, auth)
      .then((resposta) => {
        // Requisição seta estado restaurants com todos os restaurantes
        setRestaurants(resposta.data.restaurants);
        console.log("Resposta requisição getRestaurants", resposta.data);
      })
      .catch((err) => {
        console.log("Erro Request GetRestaurants");
      });
  };

  // Resquest de pegar os detalhes do Restaurante

  const getRestaurantDetails = (id) => {
    axios
      .get(`${baseUrl}/restaurants/${id}`, auth)
      .then((resposta) => {
        setRestaurantProducts(resposta.data.restaurant.products);
        console.log(
          "Resposta requisição getRestaurantDetails",
          resposta.data.restaurant
        );
        setRestaurantDetails(resposta.data.restaurant);
      })
      .catch((err) => {
        console.log("Erro Request GetRestaurantDetails");
      });
  };

  // Request para pegar os dados do perfil

  const getProfileData = () => {
    axios
      .get(`${baseUrl}/profile`, auth)
      .then((response) => {
        setProfileData(response.data.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Request para adicionar Endereço

  const putAddAddress = (history) => {
    const body = {
      street: street,
      number: number,
      neighbourhood: neighbourhood,
      city: city,
      state: state,
      complement: complement,
    };
    console.log(auth);
    axios
      .put(`${baseUrl}/address`, body, auth)
      .then((resposta) => {
        console.log("Resposta request addAddress", resposta.data);
        goToLoginPage(history);
      })
      .catch((err) => {
        console.log("Erro RequestaddAddress", err.message);
      });
  };

  const states = {
    email,
    password,
    restaurants,
    restaurantProducts,
    restaurantDetails,
    profileData,
    category,
    filteredByName,
    street,
    number,
    neighbourhood,
    city,
    state,
    complement,
    cart,
  };
  const setters = {
    setEmail,
    setPassword,
    setCategory,
    setFilteredByName,
    setStreet,
    setNumber,
    setNeighbourhood,
    setCity,
    setState,
    setComplement,
    setCart,
  };

  const requests = {
    postLogin,
    getRestaurants,
    getRestaurantDetails,
    getProfileData,
    putAddAddress,
  };

  const data = { states, setters, requests };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
