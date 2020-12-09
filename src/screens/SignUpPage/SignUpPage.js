import logoIFuture from "../../assets/iFuture-red-logo.svg";
import React from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { LoginPageContainer } from "../LoginPage/styled-LoginPage";
import { Header } from "../../components/Header/Header";
import { useHistory } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { signup } from "../../services/user"

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
    <div>
      <Header />
      <LoginPageContainer>
        <img src={logoIFuture} alt="Logo 4Food"/>
        <h1>Cadastrar</h1>
        <form onSubmit={handleSubmission} >
            <Input 
              label="Nome" 
              placeholder="Nome e sobrenome" 
              type="text" 
              required
              // value={form.name} 
              onChange={handleInputChange} 
            />
            <Input 
              label="E-mail" 
              placeholder="email@email.com" 
              type="email" 
              required
              // value={form.email} 
              onChange={handleInputChange} 
            />
            <Input 
              label="CPF" 
              placeholder="000.000.000-00" 
              // value={form.cpf}
              required
              onChange={handleInputChange} 
            />
            <Input
              label="Senha"
              placeholder="Mínimo 6 caracteres"
              type="password"
              required
              // value={form.password}
              onChange={handleInputChange}
            />
            <Input
              label="Confirmar"
              placeholder="Confirme a senha anterior"
              type="password"
              required
              // value={form.password}
              onChange={handleInputChange}
            />
            <Button text="Criar" type="submit" />
        </form>
      </LoginPageContainer>
    </div>
  );
}
