import logoIFuture from "../../assets/iFuture-red-logo.svg";
import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { signup } from "../../services/user";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import {
  FormContainer,
  Title,
  LogoSignUp,
  Wrapper,
  SignUpPageContainer,
} from "./styled-SignUpPage";

export function SignUpPage() {
  // Página de SignUp do usuário

  const history = useHistory();
  const { form, onChange } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmission = (event) => {
    signup(form, history);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmShowPassword = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  const validatePassword = (event) => {
    const password1 = form.password;
    const password2 = form.confirmPassword;
    event.preventDefault();
    if (password1 === password2) {
      handleSubmission();
    } else {
      alert("As senhas não conferem");
    }
  };

  return (
    <Wrapper>
      <Header />
      <SignUpPageContainer>
        <LogoSignUp src={logoIFuture} alt="Logo 4Food" />
        <Title>Cadastrar</Title>
        <FormContainer onSubmit={validatePassword}>
          <TextField
            label="Nome"
            variant="outlined"
            placeholder="Nome e sobrenome"
            type="text"
            required
            value={form.name}
            onChange={handleInputChange}
            name="name"
            style={{ margin: "10px 0" }}
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
            style={{ margin: "10px 0" }}
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
            style={{ margin: "10px 0" }}
          />
          <FormControl style={{ margin: "10px 0" }}>
            <InputLabel htmlFor="outlined-adornment-password" margin="dense">
              Senha
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              label="Senha"
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Mínimo 6 caracteres"
              value={form.password}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl style={{ margin: "10px 0" }}>
            <InputLabel htmlFor="outlined-adornment-confirm-password">
              Confirmar
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirm-password"
              required
              label="Confirmar"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Mínimo 6 caracteres"
              value={form.confirmPassword}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleConfirmShowPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button text="Criar" type="submit" />
        </FormContainer>
      </SignUpPageContainer>
    </Wrapper>
  );
}
