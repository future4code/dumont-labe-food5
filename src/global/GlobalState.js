import React, { useState } from 'react';
import axios from 'axios';
import GlobalStateContext from './GlobalStateContext';
import { baseUrl } from '../constants/baseUrl';
import { useHistory } from 'react-router-dom';
import { goToFeed } from '../router/Coordinator';

const GlobalState = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    
// Request que faz o login
    const postLogin = (history) => {
		const body = {
            "email":email,
            "password":password
        };
        axios.post(`${baseUrl}/login`, body)
        .then((resposta)=>{
            console.log("Resposta request postLogin",resposta.data)
            // Depois da requisição, o token é guardado no localStorage
            localStorage.setItem("token", resposta.data.token)
            alert("LOGIN FEITO COM SUCESSO")
            // Se a requisição funcionar, o usuário é direcionado até o feed
            goToFeed(history)
		}).catch((err) => {
			console.log("Erro Request postLogin",err.message)
        });
        setEmail("")
        setPassword("")
        
       
        
	};
    
    const states = {email, password};
    const setters = {setEmail, setPassword};
    const requests = {postLogin};
  
    const data = { states, setters, requests };
    return (
      <GlobalStateContext.Provider value={data}>
        {props.children}
      </GlobalStateContext.Provider>
    );
  };
  
  export default GlobalState;