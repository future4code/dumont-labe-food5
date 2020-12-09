import logoIFuture from "../../assets/iFuture-red-logo.svg";
import React from "react";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { useHistory } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { signup } from "../../services/user"
import {TextField} from "@material-ui/core"
import { FormContainer, Title, LogoSignUp, Wrapper, SignUpPageContainer } from "./styled-SignUpPage";

export function SignUpPage() {
  // Página de SignUp do usuário

  const history = useHistory()
  const { form, onChange } = useForm({ name:"", email:"", cpf:"", password:"" })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    signup(form, history)
  }

  return (
    <Wrapper>
      <Header />
      <SignUpPageContainer>
        <LogoSignUp src={logoIFuture} alt="Logo 4Food"/>
        <Title>Cadastrar</Title>
        <FormContainer onSubmit={handleSubmission} >
            <TextField 
              label="Nome" 
              variant="outlined"
              placeholder="Nome e sobrenome" 
              type="text" 
              required
              value={form.name} 
              onChange={handleInputChange} 
              name="name"
              style={{margin:'10px 0'}}
            />
            <TextField 
              label="E-mail" 
              placeholder="email@email.com" 
              variant="outlined"
              type="email" 
              required
              value={form.email} 
              onChange={handleInputChange}
              name="email"
              style={{margin:'10px 0'}}
            />
            <TextField 
              label="CPF" 
              placeholder="000.000.000-00" 
              variant="outlined"
              value={form.cpf}
              required
              onChange={handleInputChange}
              name="cpf"
              pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
              style={{margin:'10px 0'}}
            />
            <TextField
              label="Senha"
              placeholder="Mínimo 6 caracteres"
              variant="outlined"
              type="password"
              required
              value={form.password}
              onChange={handleInputChange}
              name="password"
              style={{margin:'10px 0'}}
            />
            <TextField
              label="Confirmar"
              placeholder="Confirme a senha anterior"
              variant="outlined"
              type="password"
              required
              value={form.password}
              onChange={handleInputChange}
              name="confirm-password"
              style={{margin:'10px 0'}}
            />
            <Button text="Criar" type="submit" />
        </FormContainer>
      </SignUpPageContainer>
    </Wrapper>
  );
}
