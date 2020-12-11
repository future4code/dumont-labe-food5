import React, { useEffect } from "react";
import { useProtectPage } from "../../hooks/useProtectPage";
import { useForm } from "../../hooks/useForm"
import { editProfile } from "../../services/user"
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { FormContainer, Wrapper, EditProfileContainer } from "./styled";
import { TextField } from '@material-ui/core';
import { useRequestData } from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/baseUrl";

const ProfileEditUserPage = () => {
  useProtectPage();
  const { form, onChange, resetForm, setValues } = useForm({ name: "", email: "", cpf: "" })

  const handleSubmission = (event) => {
    editProfile(form);
    resetForm();
  }

    const dataUser = useRequestData(`${baseUrl}/profile`)

    useEffect(() => {
      dataUser && setValues(dataUser.user)
    }, [dataUser])


    return (
      <Wrapper>
        < Header />
        <EditProfileContainer>
          <FormContainer onSubmit={handleSubmission}>
            <TextField
              required
              name={'name'}
              type={'text'}
              label={'Nome'}
              placeholder={'Nome e sobrenome'}
              variant={'outlined'}
              value={form.name}
              onChange={onChange}
              style={{ margin: "10px 0" }}
            />
            <TextField
              required
              name={'email'}
              type={'email'}
              label={'Email'}
              placeholder={'Email'}
              variant={'outlined'}
              value={form.email}
              onChange={onChange}
              style={{ margin: "10px 0" }}
            />
            <TextField
              required
              name={'cpf'}
              type={'text'}
              label={'CPF'}
              placeholder={'000.000.000-00'}
              variant={'outlined'}
              value={form.cpf}
              onChange={onChange}
              style={{ margin: "10px 0" }}
            />
            <Button text="Salvar" type="submit" />
          </FormContainer>
        </EditProfileContainer>
      </Wrapper>
    );
}
export default ProfileEditUserPage;
